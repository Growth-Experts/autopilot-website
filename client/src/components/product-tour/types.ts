export type TooltipPlacement = "top" | "bottom" | "left" | "right";

/** Hotspot position as a fraction (0–1) of the original, un-zoomed media. */
export interface TourHotspot {
  x: number;
  y: number;
  placement?: TooltipPlacement;
}

/**
 * Zoom applied to the media. `left`/`top` are the offsets of the scaled media
 * as a fraction of the frame size (normally ≤ 0), matching Arcade's panAndZoom.
 */
export interface TourZoom {
  level: number;
  left: number;
  top: number;
}

interface TourStepBase {
  id: string;
}

export interface TourCardAction {
  label: string;
  /** Omit to advance to the next step. Paths starting with "/" open in the same tab. */
  href?: string;
}

export interface TourCardStep extends TourStepBase {
  type: "card";
  title: string;
  subtitle?: string;
  action: TourCardAction;
  /** Blurred behind the gradient. */
  backgroundImage?: string;
}

export interface TourImageStep extends TourStepBase {
  type: "image";
  image: string;
  alt: string;
  /** `**text**` renders bold. */
  caption: string;
  hotspot: TourHotspot;
  zoom?: TourZoom;
}

interface TourVideoStepBase extends TourStepBase {
  type: "video";
  video: string;
  poster?: string;
  /** Loop window as fractions (0–1) of the clip duration. */
  start?: number;
  end?: number;
  playbackRate?: number;
}

/** Loops until the hotspot is clicked. */
export interface TourInteractiveVideoStep extends TourVideoStepBase {
  caption: string;
  hotspot: TourHotspot;
}

/** Plays once and advances on its own, like Arcade's video steps without a hotspot. Back skips it. */
export interface TourTransitionVideoStep extends TourVideoStepBase {
  caption?: undefined;
  hotspot?: undefined;
}

export type TourVideoStep = TourInteractiveVideoStep | TourTransitionVideoStep;
export type TourStep = TourCardStep | TourImageStep | TourVideoStep;
export type TourMediaStep = TourImageStep | TourVideoStep;
export type TourHotspotStep = TourImageStep | TourInteractiveVideoStep;
