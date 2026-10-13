import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type RefObject,
} from "react";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  TooltipPlacement,
  TourCardStep,
  TourHotspot,
  TourImageStep,
  TourMediaStep,
  TourStep,
  TourVideoStep,
  TourZoom,
} from "./types";

export type { TourStep } from "./types";

const BRAND = "#2142E7";
const TOOLTIP_GAP = 22;
const EDGE_MARGIN = 8;
const ZOOM_EASE = [0.4, 0, 0.2, 1] as const;
/*
 * Opacity fades use CSS transitions rather than framer-motion: framer hands accelerated
 * opacity animations back to inline styles when they finish, and that hand-off showed the
 * element at its starting opacity for one frame (the "flicker" after every step).
 */
const LAYER_FADE_MS = 300;
const PRELOAD_OFFSETS = [1, 2, 3, -1];
/** Show a clip anyway if the browser never reports a first frame (e.g. data saver). */
const VIDEO_READY_TIMEOUT = 3000;

export interface ProductTourProps {
  steps: TourStep[];
  /** Width / height of the media frame. */
  aspectRatio?: number;
  /** Accessible name for the tour region. */
  label?: string;
  initialStep?: number;
  onStepChange?: (index: number) => void;
  className?: string;
}

export function ProductTour({
  steps,
  aspectRatio = 16 / 10,
  label = "Product tour",
  initialStep = 0,
  onStepChange,
  className,
}: ProductTourProps) {
  const [index, setIndex] = useState(() => clampIndex(initialStep, steps.length));
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const stage = useElementSize(stageRef);
  const reduceMotion = useReducedMotion() ?? false;

  const step = steps[index];
  const total = steps.length;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const goTo = useCallback(
    (next: number) => {
      const target = clampIndex(next, steps.length);
      setIndex(target);
      onStepChange?.(target);
    },
    [steps.length, onStepChange],
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const back = useCallback(() => goTo(index - 1), [goTo, index]);

  // Advancing unmounts the control that was clicked; keep focus in the tour so arrow keys keep working.
  const advanceFromStage = useCallback(() => {
    rootRef.current?.focus({ preventScroll: true });
    next();
  }, [next]);

  const indexRef = useRef(index);
  indexRef.current = index;
  const onMediaEnded = useCallback(
    (stepId: string) => {
      // A clip still fading out underneath the next step must not advance the tour again.
      if (steps[indexRef.current]?.id === stepId) goTo(indexRef.current + 1);
    },
    [steps, goTo],
  );

  useEffect(() => {
    for (const offset of PRELOAD_OFFSETS) {
      const neighbour = steps[index + offset];
      if (neighbour) preloadStep(neighbour);
    }
  }, [index, steps]);

  const layers = useLayerStack(steps[index]);
  const shown = layers.shownStep;

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const keyActions: Record<string, () => void> = {
      ArrowRight: next,
      ArrowLeft: back,
      Home: () => goTo(0),
      End: () => goTo(total - 1),
    };
    const action = keyActions[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  };

  if (!step) return null;

  const sheetText = step.type === "card" ? step.subtitle : step.caption;
  const showReplay = isLast && step.type !== "card" && !step.hotspot;
  const restart = () => {
    rootRef.current?.focus({ preventScroll: true });
    goTo(0);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={rootRef}
        role="region"
        aria-roledescription="product tour"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className={cn(
          "relative w-full bg-white text-[#0B1220] outline-none focus-visible:ring-2 focus-visible:ring-[#2142E7] focus-visible:ring-offset-2",
          className,
        )}
      >
        <div
          ref={stageRef}
          className="relative w-full overflow-hidden bg-white select-none"
          style={{ aspectRatio }}
        >
          {/* One persistent camera, so pan/zoom animates from the previous step instead of restarting. */}
          <motion.div
            className="absolute inset-0"
            style={{ originX: 0, originY: 0 }}
            initial={false}
            animate={cameraTarget(shown)}
            transition={{ duration: 0.8, ease: ZOOM_EASE }}
          >
            {layers.items.map((layer, i) => (
              <div
                key={layer.id}
                className="absolute inset-0 transition-opacity ease-out"
                style={{
                  opacity: layer.ready ? 1 : 0,
                  transitionDuration: i === 0 ? "0ms" : `${LAYER_FADE_MS}ms`,
                }}
                onTransitionEnd={(event) => {
                  if (event.target === event.currentTarget && layer.ready) layers.settle(layer.id);
                }}
                aria-hidden={layer.step.id !== step.id || undefined}
              >
                {layer.step.type === "card" ? (
                  <CardLayer
                    step={layer.step}
                    isLast={isLast}
                    onAdvance={advanceFromStage}
                    onRestart={restart}
                    onReady={() => layers.markReady(layer.id)}
                  />
                ) : (
                  <MediaLayer
                    step={layer.step}
                    reduceMotion={reduceMotion}
                    onReady={() => layers.markReady(layer.id)}
                    onEnded={onMediaEnded}
                  />
                )}
              </div>
            ))}
          </motion.div>

          {shown?.id === step.id && step.type !== "card" && step.hotspot && step.caption && (
            <HotspotLayer
              key={step.id}
              step={step}
              hotspot={step.hotspot}
              caption={step.caption}
              stage={stage}
              reduceMotion={reduceMotion}
              onActivate={advanceFromStage}
            />
          )}

          {showReplay && shown?.id === step.id && (
            <ReplayOverlay key={step.id} onReplay={restart} />
          )}
        </div>

        {/* Always rendered on mobile so the frame doesn't jump on steps without a caption. */}
        <div className="flex min-h-[5.875rem] items-stretch border-t border-[#0B1220]/10 bg-white md:hidden">
          {sheetText && (
            <button
              type="button"
              onClick={isLast ? restart : advanceFromStage}
              className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-[#2142E7]/5 active:bg-[#2142E7]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2142E7]"
            >
              <span className="flex-1 text-sm leading-relaxed text-[#0B1220]">
                <RichCaption text={sheetText} />
              </span>
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: BRAND }}
              >
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          )}
        </div>

        <ControlBar
          index={index}
          total={total}
          isFirst={isFirst}
          isLast={isLast}
          onBack={back}
          onNext={isLast ? restart : next}
        />

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {`Step ${index + 1} of ${total}. ${plainCaption(
            (step.type === "card" ? step.title : step.caption) ?? "",
          )}`}
        </p>
      </div>
    </MotionConfig>
  );
}

function CardLayer({
  step,
  isLast,
  onAdvance,
  onRestart,
  onReady,
}: {
  step: TourCardStep;
  isLast: boolean;
  onAdvance: () => void;
  onRestart: () => void;
  onReady: () => void;
}) {
  const { action } = step;
  const imgRef = useRef<HTMLImageElement>(null);
  useReadyWhenDecoded(imgRef, step.backgroundImage, onReady);
  const entered = useEntered();
  const buttonClass =
    "inline-flex items-center gap-2 rounded-[6px] px-4 py-2 text-xs font-bold text-white shadow-lg transition-colors sm:px-6 sm:py-3 sm:text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]";

  return (
    <div className="absolute inset-0">
      {step.backgroundImage && (
        <img
          ref={imgRef}
          src={step.backgroundImage}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-[6px]"
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,18,32,0.95)_0%,rgba(11,18,32,0.84)_55%,rgba(33,66,231,0.7)_100%)]" />
      <div
        className={cn(
          "relative flex h-full max-w-3xl flex-col justify-center gap-3 px-[7%] transition-[opacity,transform] delay-100 duration-[450ms] ease-out motion-reduce:transform-none sm:gap-5",
          entered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        )}
      >
        <h2 className="text-lg font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-5xl">
          {step.title}
        </h2>
        {step.subtitle && (
          <p className="hidden max-w-xl text-base leading-relaxed text-white/80 md:block lg:text-lg">
            {step.subtitle}
          </p>
        )}
        <div className="mt-1 flex flex-wrap items-center gap-3 sm:mt-2">
          {action.href ? (
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
              style={{ backgroundColor: BRAND }}
            >
              {action.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : (
            <button
              type="button"
              onClick={onAdvance}
              className={buttonClass}
              style={{ backgroundColor: BRAND }}
            >
              {action.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
          {isLast && (
            <button
              type="button"
              onClick={onRestart}
              className="inline-flex items-center gap-2 rounded-[6px] border border-white/40 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10 sm:px-6 sm:py-3 sm:text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Restart tour
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function MediaLayer({
  step,
  reduceMotion,
  onReady,
  onEnded,
}: {
  step: TourMediaStep;
  reduceMotion: boolean;
  onReady: () => void;
  onEnded: (stepId: string) => void;
}) {
  return step.type === "image" ? (
    <TourImage step={step} onReady={onReady} />
  ) : (
    <TourVideo step={step} reduceMotion={reduceMotion} onReady={onReady} onEnded={onEnded} />
  );
}

function TourImage({ step, onReady }: { step: TourImageStep; onReady: () => void }) {
  const ref = useRef<HTMLImageElement>(null);
  useReadyWhenDecoded(ref, step.image, onReady);
  return (
    <img
      ref={ref}
      src={step.image}
      alt={step.alt}
      draggable={false}
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

function TourVideo({
  step,
  reduceMotion,
  onReady,
  onEnded,
}: {
  step: TourVideoStep;
  reduceMotion: boolean;
  onReady: () => void;
  onEnded: (stepId: string) => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(!reduceMotion);
  const onEndedRef = useRef(onEnded);
  onEndedRef.current = onEnded;
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  // Ready once the first frame is decoded, so the layer never fades in on an empty video box.
  useLayoutEffect(() => {
    const video = ref.current;
    if (!video) return;
    const ready = () => onReadyRef.current();
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      ready();
      return;
    }
    const fallback = window.setTimeout(ready, VIDEO_READY_TIMEOUT);
    video.addEventListener("loadeddata", ready, { once: true });
    video.addEventListener("error", ready, { once: true });
    return () => {
      window.clearTimeout(fallback);
      video.removeEventListener("loadeddata", ready);
      video.removeEventListener("error", ready);
    };
  }, [step.video]);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const rate = step.playbackRate ?? 1;
    const bounds = () => {
      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      return { start: (step.start ?? 0) * duration, end: (step.end ?? 1) * duration };
    };
    const onMetadata = () => {
      video.defaultPlaybackRate = rate;
      video.playbackRate = rate;
      if (step.autoAdvance) return;
      const { start } = bounds();
      if (start > 0) video.currentTime = start;
    };
    const onTimeUpdate = () => {
      if (step.autoAdvance) return;
      const { start, end } = bounds();
      if (end <= start) return;
      if (video.currentTime < start || video.currentTime >= end) video.currentTime = start;
    };
    const onVideoEnded = () => {
      if (step.autoAdvance) onEndedRef.current(step.id);
    };
    onMetadata();
    video.addEventListener("loadedmetadata", onMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onVideoEnded);
    return () => {
      video.removeEventListener("loadedmetadata", onMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onVideoEnded);
    };
  }, [step]);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (playing) {
      video.play().catch(() => setPlaying(false));
    } else {
      video.pause();
    }
  }, [playing]);

  return (
    <>
      <video
        ref={ref}
        src={step.video}
        // Autoplaying clips skip the poster: swapping poster for the first frame can blink.
        poster={reduceMotion ? step.poster : undefined}
        muted
        loop={!step.autoAdvance}
        playsInline
        preload="auto"
        aria-label={step.caption ? plainCaption(step.caption) : "Product walkthrough video"}
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute bottom-2 left-2 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1220]/70 text-white transition-colors hover:bg-[#0B1220]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-3 sm:left-3"
      >
        {playing ? (
          <Pause className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Play className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
    </>
  );
}

function HotspotLayer({
  step,
  hotspot,
  caption,
  stage,
  reduceMotion,
  onActivate,
}: {
  step: TourMediaStep;
  hotspot: TourHotspot;
  caption: string;
  stage: Size;
  reduceMotion: boolean;
  onActivate: () => void;
}) {
  const { x, y } = displayedHotspot(hotspot, step.type === "image" ? step.zoom : undefined);
  // Let the zoom settle before the hotspot appears at its final position.
  const delay = reduceMotion ? 0 : step.type === "image" && step.zoom ? 650 : 250;
  const entered = useEntered();

  return (
    <div
      className="pointer-events-none absolute inset-0 transition-opacity duration-300"
      style={{ opacity: entered ? 1 : 0, transitionDelay: `${delay}ms` }}
    >
      <button
        type="button"
        onClick={onActivate}
        aria-label={`Next step: ${plainCaption(caption)}`}
        className="group pointer-events-auto absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus-visible:outline-none md:h-10 md:w-10"
        style={{ left: `${x * 100}%`, top: `${y * 100}%` }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full opacity-60 motion-safe:animate-ping"
          style={{ backgroundColor: BRAND }}
        />
        <span
          aria-hidden="true"
          className="absolute inset-[18%] rounded-full opacity-30"
          style={{ backgroundColor: BRAND }}
        />
        <span
          aria-hidden="true"
          className="relative h-3.5 w-3.5 rounded-full border-2 border-white shadow-[0_0_0_2px_rgba(33,66,231,0.35),0_4px_12px_rgba(11,18,32,0.35)] transition-transform group-hover:scale-125 group-focus-visible:ring-2 group-focus-visible:ring-white group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[#2142E7] motion-reduce:transition-none md:h-4 md:w-4"
          style={{ backgroundColor: BRAND }}
        />
      </button>

      {stage.width > 0 && (
        <Tooltip
          caption={caption}
          anchor={{ x: x * stage.width, y: y * stage.height }}
          stage={stage}
          preferred={hotspot.placement}
          onActivate={onActivate}
        />
      )}
    </div>
  );
}

/** Clicking the bubble advances like the dot; the dot stays the keyboard-focusable control. */
function Tooltip({
  caption,
  anchor,
  stage,
  preferred,
  onActivate,
}: {
  caption: string;
  anchor: { x: number; y: number };
  stage: Size;
  preferred?: TooltipPlacement;
  onActivate: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const size = useElementSize(ref);
  const layout = layoutTooltip(anchor, size, stage, preferred);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      onClick={onActivate}
      className="pointer-events-auto absolute hidden w-max max-w-[min(20rem,42%)] cursor-pointer rounded-[6px] px-4 py-3 text-sm font-medium leading-snug text-white shadow-[0_12px_32px_rgba(11,18,32,0.3)] transition-[filter] hover:brightness-110 md:block"
      style={{
        backgroundColor: BRAND,
        left: layout.left,
        top: layout.top,
        visibility: size.width ? "visible" : "hidden",
      }}
    >
      <RichCaption text={caption} />
      <span
        className="absolute h-3 w-3 rotate-45"
        style={{ backgroundColor: BRAND, ...layout.arrow }}
      />
    </div>
  );
}

/** Final screen without a hotspot ends like Arcade's player: the last screenshot and a Replay button. */
function ReplayOverlay({ onReplay }: { onReplay: () => void }) {
  const entered = useEntered();
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center bg-[#0B1220]/25 transition-opacity delay-[400ms] duration-300",
        entered ? "opacity-100" : "opacity-0",
      )}
    >
      <button
        type="button"
        onClick={onReplay}
        className="inline-flex items-center gap-2 rounded-[6px] px-4 py-2 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90 sm:px-6 sm:py-3 sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2142E7]"
        style={{ backgroundColor: BRAND }}
      >
        <RotateCcw className="h-4 w-4" aria-hidden="true" />
        Replay
      </button>
    </div>
  );
}

function ControlBar({
  index,
  total,
  isFirst,
  isLast,
  onBack,
  onNext,
}: {
  index: number;
  total: number;
  isFirst: boolean;
  isLast: boolean;
  onBack: () => void;
  onNext: () => void;
}) {
  const progress = ((index + 1) / total) * 100;
  const buttonClass =
    "inline-flex h-8 items-center gap-1.5 rounded-[6px] px-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2142E7]";

  return (
    <div className="relative border-t border-[#0B1220]/10 bg-white">
      <div
        role="progressbar"
        aria-label="Tour progress"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={index + 1}
        aria-valuetext={`Step ${index + 1} of ${total}`}
        className="absolute inset-x-0 top-0 h-[3px] -translate-y-full bg-[#0B1220]/10"
      >
        <div
          className="h-full transition-[width] duration-500 ease-out motion-reduce:transition-none"
          style={{ width: `${progress}%`, backgroundColor: BRAND }}
        />
      </div>
      <div className="flex h-10 items-center justify-between gap-2 px-2 sm:px-3">
        <button
          type="button"
          onClick={onBack}
          disabled={isFirst}
          className={cn(buttonClass, "text-[#0B1220] hover:bg-[#0B1220]/5")}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </button>
        <span className="text-xs font-medium tabular-nums text-[#0B1220]/60">
          {index + 1} / {total}
        </span>
        <button
          type="button"
          onClick={onNext}
          className={cn(buttonClass, "text-white hover:opacity-90")}
          style={{ backgroundColor: BRAND }}
        >
          {isLast ? (
            <>
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Replay
            </>
          ) : (
            <>
              Next
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

interface Size {
  width: number;
  height: number;
}

function useElementSize(ref: RefObject<HTMLElement | null>): Size {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setSize({ width: el.offsetWidth, height: el.offsetHeight });
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}

function clampIndex(index: number, length: number) {
  return Math.min(Math.max(index, 0), Math.max(length - 1, 0));
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), Math.max(min, max));
}

/** Same layer for consecutive steps on one image, so only the camera moves. */
function layerKey(step: TourStep) {
  if (step.type === "card") return `card:${step.id}`;
  return step.type === "image" ? `image:${step.image}` : `video:${step.id}`;
}

function cameraTarget(step: TourStep | undefined) {
  const zoom = step?.type === "image" ? step.zoom : undefined;
  return zoom
    ? { x: `${zoom.left * 100}%`, y: `${zoom.top * 100}%`, scale: zoom.level }
    : { x: "0%", y: "0%", scale: 1 };
}

interface Layer {
  id: number;
  key: string;
  step: TourStep;
  ready: boolean;
}

/**
 * Stacks the incoming step on top of the visible one. The new layer stays hidden until its
 * media has decoded, then fades in over a fully opaque previous frame; layers underneath are
 * dropped only once it is fully visible, so the stage background never shows through.
 */
function useLayerStack(step: TourStep | undefined) {
  const nextId = useRef(0);
  const [items, setItems] = useState<Layer[]>(() =>
    step ? [{ id: nextId.current++, key: layerKey(step), step, ready: false }] : [],
  );

  useEffect(() => {
    if (!step) return;
    const key = layerKey(step);
    setItems((prev) => {
      const top = prev[prev.length - 1];
      if (top?.key === key) {
        return top.step === step ? prev : [...prev.slice(0, -1), { ...top, step }];
      }
      // Anything still loading is superseded; keep what is already on screen.
      const visible = prev.filter((layer) => layer.ready);
      return [...visible, { id: nextId.current++, key, step, ready: false }];
    });
  }, [step]);

  const markReady = useCallback((id: number) => {
    // Wait until the hidden state has been painted, or the fade-in would not transition.
    afterNextPaint(() =>
      setItems((prev) =>
        prev.some((layer) => layer.id === id && !layer.ready)
          ? prev.map((layer) => (layer.id === id ? { ...layer, ready: true } : layer))
          : prev,
      ),
    );
  }, []);

  const settle = useCallback((id: number) => {
    setItems((prev) => {
      const at = prev.findIndex((layer) => layer.id === id);
      return at > 0 ? prev.slice(at) : prev;
    });
  }, []);

  // Fallback for when transitionend never fires (e.g. a background tab).
  const top = items[items.length - 1];
  useEffect(() => {
    if (!top?.ready || items.length < 2) return;
    const timer = window.setTimeout(() => settle(top.id), LAYER_FADE_MS + 500);
    return () => window.clearTimeout(timer);
  }, [top, items.length, settle]);

  const shownStep = [...items].reverse().find((layer) => layer.ready)?.step;
  return { items, markReady, settle, shownStep };
}

function afterNextPaint(callback: () => void) {
  requestAnimationFrame(() => requestAnimationFrame(callback));
}

/** Becomes true after the first paint, so a CSS transition from the hidden state runs. */
function useEntered() {
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    let active = true;
    afterNextPaint(() => active && setEntered(true));
    return () => {
      active = false;
    };
  }, []);
  return entered;
}

/** Calls `onReady` once the image is loaded and decoded (immediately if there is no image). */
function useReadyWhenDecoded(
  ref: RefObject<HTMLImageElement | null>,
  src: string | undefined,
  onReady: () => void,
) {
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useLayoutEffect(() => {
    let active = true;
    const done = () => {
      if (active) onReadyRef.current();
    };
    const img = ref.current;
    if (!src || !img) done();
    else img.decode().then(done, done);
    return () => {
      active = false;
    };
  }, [ref, src]);
}

const decodedImages = new Map<string, HTMLImageElement>();
const preloadedVideos = new Map<string, HTMLVideoElement>();

/** Fetches and decodes a step's media ahead of time; the references keep it in memory. */
function preloadStep(step: TourStep) {
  if (step.type === "video") {
    if (preloadedVideos.has(step.video)) return;
    const video = document.createElement("video");
    video.muted = true;
    video.preload = "auto";
    video.src = step.video;
    video.load();
    preloadedVideos.set(step.video, video);
    return;
  }
  const src = step.type === "card" ? step.backgroundImage : step.image;
  if (!src || decodedImages.has(src)) return;
  const img = new Image();
  img.decoding = "async";
  img.src = src;
  img.decode().catch(() => {});
  decodedImages.set(src, img);
}

function RichCaption({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-bold">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

function plainCaption(text: string) {
  return text.split("**").join("");
}

/** Hotspot position within the frame once the step's zoom is applied. */
function displayedHotspot({ x, y }: TourHotspot, zoom?: TourZoom) {
  if (!zoom) return { x, y };
  return {
    x: clamp(x * zoom.level + zoom.left, 0, 1),
    y: clamp(y * zoom.level + zoom.top, 0, 1),
  };
}

function fits(placement: TooltipPlacement, anchor: { x: number; y: number }, tip: Size, stage: Size) {
  switch (placement) {
    case "right":
      return anchor.x + TOOLTIP_GAP + tip.width <= stage.width - EDGE_MARGIN;
    case "left":
      return anchor.x - TOOLTIP_GAP - tip.width >= EDGE_MARGIN;
    case "bottom":
      return anchor.y + TOOLTIP_GAP + tip.height <= stage.height - EDGE_MARGIN;
    case "top":
      return anchor.y - TOOLTIP_GAP - tip.height >= EDGE_MARGIN;
  }
}

const OPPOSITE: Record<TooltipPlacement, TooltipPlacement> = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};

function layoutTooltip(
  anchor: { x: number; y: number },
  tip: Size,
  stage: Size,
  preferred?: TooltipPlacement,
) {
  const order: TooltipPlacement[] = preferred
    ? [preferred, OPPOSITE[preferred], "right", "left", "bottom", "top"]
    : ["right", "left", "bottom", "top"];
  const placement = order.find((p) => fits(p, anchor, tip, stage)) ?? order[0];

  let left: number;
  let top: number;
  if (placement === "right" || placement === "left") {
    left = placement === "right" ? anchor.x + TOOLTIP_GAP : anchor.x - TOOLTIP_GAP - tip.width;
    top = anchor.y - tip.height / 2;
  } else {
    left = anchor.x - tip.width / 2;
    top = placement === "bottom" ? anchor.y + TOOLTIP_GAP : anchor.y - TOOLTIP_GAP - tip.height;
  }
  left = clamp(left, EDGE_MARGIN, stage.width - tip.width - EDGE_MARGIN);
  top = clamp(top, EDGE_MARGIN, stage.height - tip.height - EDGE_MARGIN);

  const arrowInset = 14;
  const arrow: CSSProperties =
    placement === "right" || placement === "left"
      ? {
          top: clamp(anchor.y - top, arrowInset, tip.height - arrowInset) - 6,
          [placement === "right" ? "left" : "right"]: -6,
        }
      : {
          left: clamp(anchor.x - left, arrowInset, tip.width - arrowInset) - 6,
          [placement === "bottom" ? "top" : "bottom"]: -6,
        };

  return { left, top, arrow };
}
