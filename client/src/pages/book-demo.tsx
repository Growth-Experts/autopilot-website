import Section from "@/components/layout/Section";
import { InlineWidget } from "react-calendly";

export default function BookDemo() {
  return (
    <div className="flex flex-col">
      <Section background="white" className="pt-14 md:pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-gray-500" data-testid="text-book-demo-kicker">
            Autopilot
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900" data-testid="text-book-demo-title">
            Book a Demo
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto" data-testid="text-book-demo-subtitle">Schedule a time to see how Autopilot can streamline your workflow processes.</p>
        </div>

        <div className="mt-10 md:mt-12 max-w-5xl mx-auto">
          <div
            className="bg-white border border-gray-200 shadow-xl rounded-none overflow-hidden"
            data-testid="card-calendly"
          >
            <InlineWidget
              url="https://calendly.com/marklehrer-autopilot/30min"
              styles={{ height: "820px", width: "100%" }}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
