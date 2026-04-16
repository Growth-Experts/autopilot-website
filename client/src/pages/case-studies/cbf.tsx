import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Shield, Zap, Users } from "lucide-react";
import LogoCBF from "@assets/cbf-logo.png";

export default function CBFCaseStudy() {
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
                src={LogoCBF}
                alt="Cooperative Baptist Fellowship logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Customer Story</p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                CBF's Mission on the Move
              </h1>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-accent pl-6 italic">
            "Speed of Light" decisions without losing control
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section background="gray" className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Overview */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                The Cooperative Baptist Fellowship (CBF) is a global network dedicated to spreading hope. But even the most inspired missions can be grounded by "Administrative Gravity." For CBF, the challenge was clear: how do you maintain strict stewardship and governance without letting approval cycles stall the actual work of the church?
              </p>
            </div>
          </div>

          {/* Challenge */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Challenge: The Hidden Cost of "Context Switching"</h2>
            <p className="text-gray-600 mb-6">
              Jumping between different tasks and platforms creates a "cognitive tax" that slows down decision-making. For CBF, this manifested in three key pain points:
            </p>
            <div className="grid gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">The Approval Purgatory</h3>
                <p className="text-gray-600">Key decisions were often trapped in inbox limbo, forcing leadership to spend their mental budget chasing updates rather than focusing on their mission.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">The Governance Tightrope</h3>
                <p className="text-gray-600">As a non-profit, they couldn't just "move fast and break things." They needed speed, but they also needed a complete digital paper trail to ensure perfect stewardship.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Friction in the Flow</h3>
                <p className="text-gray-600">Forced to leave their primary collaboration tool (Microsoft Teams) to handle administrative tasks, the team suffered from "Administrative Drag."</p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-2 text-primary">The Solution: Bringing the Workflow to the Worker</h2>
            <p className="text-gray-600 mb-6">CBF worked with Autopilot for operational efficiency — meeting their team exactly where they already were.</p>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">The "Native" Approval Engine</h3>
                  <p className="text-gray-600">By integrating Autopilot directly into Microsoft Teams, they eliminated context switching. Approvals now happen in the flow of conversation.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Standardized Governance</h3>
                  <p className="text-gray-600">They replaced ad-hoc emails with rigorous, automated workflows that ensure every decision follows the same high standard of oversight.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Complete Audit Transparency</h3>
                  <p className="text-gray-600">Autopilot provides a single source of truth, turning the stress of audit preparation into a simple, automated byproduct of doing the work.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Results: Modern Tech Speed, Non-Profit Heart</h2>
            <p className="text-lg text-gray-600 mb-6">
              By choosing Autopilot, CBF proved that "Stewardship" and "Speed" are not mutually exclusive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center">
                <h3 className="font-bold text-primary mb-2">Eliminated Delays</h3>
                <p className="text-gray-600 text-sm">Decision-making cycles were slashed, allowing the fellowship to respond to needs in real-time.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center">
                <h3 className="font-bold text-primary mb-2">Strengthened Oversight</h3>
                <p className="text-gray-600 text-sm">Governance didn't just stay the same — it got stronger. Every approval is now tracked, timed, and transparent.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center">
                <h3 className="font-bold text-primary mb-2">Frictionless Collaboration</h3>
                <p className="text-gray-600 text-sm">By reducing the effort per decision, the team regained the mental energy needed to focus on their community.</p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl">
              <p className="text-lg text-gray-700 italic">
                CBF has found the "Perfect Balance." They aren't just making faster decisions — they are making better ones because the administrative noise has been silenced. Does your governance empower your mission, or does it hold it back?
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <div className="bg-accent/5 border border-accent/20 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Is Your Administration Sabotaging Your Mission?</h3>
              <p className="text-gray-600 mb-6">It's time to put your approvals on Autopilot.</p>
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
