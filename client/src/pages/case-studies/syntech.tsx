import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Zap, BarChart, Eye, Shield } from "lucide-react";
import LogoSyntech from "@assets/syntech-logo-new.png";

export default function SyntechCaseStudy() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/clients">
            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all text-gray-500 hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Clients
            </Button>
          </Link>

          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-2 border border-gray-100 shadow-sm shrink-0 overflow-hidden">
              <img
                src={LogoSyntech}
                alt="Syntech logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Customer Story</p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                From a 10-Day Onboarding "Labyrinth" to a 48-Hour Success Story
              </h1>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-accent pl-6 italic">
            "80% reduction in onboarding lead time"
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section background="gray" className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Overview */}
          <div>
            <h2 className="text-2xl font-bold mb-4">The Growth Paradox: When Success Becomes a Liability</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Syntech, a powerhouse distributor of specialized IT hardware across Sub-Saharan Africa, faced a classic growth paradox. As they expanded their reseller network, their internal onboarding process became a bottleneck of complexity.
              </p>
              <p className="mb-4">
                What should have been an exciting partnership began with a grueling 10-day wait, buried under a mountain of manual paperwork and scanned documents.
              </p>
            </div>
          </div>

          {/* Challenge */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Challenge: A Team Terrified of Making Mistakes</h2>
            <p className="text-gray-600 mb-6">For Syntech's team, the manual process wasn't just slow — it was mentally taxing:</p>
            <div className="grid gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                <h3 className="font-bold text-gray-900 mb-2">The Fear Factor</h3>
                <p className="text-gray-600">The team lived in a state of "onboarding anxiety," terrified that a manual data entry error or a lost attachment would derail a new partnership.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                <h3 className="font-bold text-gray-900 mb-2">The Visibility Black Hole</h3>
                <p className="text-gray-600">Without a central system, contracts were "lost in the mail" (metaphorically and literally), leaving leadership with zero visibility into the pipeline.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                <h3 className="font-bold text-gray-900 mb-2">Friction-Heavy First Impressions</h3>
                <p className="text-gray-600">For new resellers, the first 10 days of the relationship were defined by administrative drag rather than service excellence.</p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-primary">The Solution: Designing the Frictionless Entry</h2>
            <p className="text-gray-600 mb-6">
              Syntech didn't just digitize their forms — they applied the "Law of Least Effort" to their entire reseller application process by implementing Autopilot.
            </p>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary font-bold">1</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Seamless Digital Capture</h3>
                  <p className="text-gray-600">Replaced "wet signatures" and manual scanning with an end-to-end digital workflow.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">The One-Stop Integration</h3>
                  <p className="text-gray-600">By integrating DocuSign and automated data capture, Syntech turned a disconnected maze into a single, unified path for new partners.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary font-bold">3</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Real-Time Dashboards</h3>
                  <p className="text-gray-600">Moved from "hoping it's done" to "knowing it's done" with instant visibility into every stage of the application.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Results: 5x Faster Onboarding</h2>
            <p className="text-lg text-gray-600 mb-6">
              Syntech achieved a transformation that was both radical and immediate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-center gap-4">
                <Zap className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">80% Faster</h3>
                  <p className="text-gray-600 text-sm">10 days down to less than 2</p>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-center gap-4">
                <BarChart className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">From Terror to Thriving</h3>
                  <p className="text-gray-600 text-sm">Team shifted from avoiding mistakes to delivering excellence</p>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-center gap-4">
                <Shield className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Competitive Edge</h3>
                  <p className="text-gray-600 text-sm">Resellers active and earning in 48 hours</p>
                </div>
              </div>
            </div>

            <p className="text-xl font-medium text-center text-gray-900 italic">
              "That's Autopilot. Doing what it does best. Making work flow faster, effortlessly and more accurately."
            </p>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <div className="bg-accent/5 border border-accent/20 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Is Your First Impression a 10-Day Wait?</h3>
              <p className="text-gray-600 mb-6">
                Syntech proved that speed is a form of service. Is your onboarding a labyrinth or a launchpad?
              </p>
              <Link href="https://calendly.com/marklehrer-autopilot/30min">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-8">
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
}
