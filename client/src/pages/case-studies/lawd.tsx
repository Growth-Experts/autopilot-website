import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check, Quote } from "lucide-react";
import LogoLawd from "@assets/lawd-logo-new.png";

export default function LawdCaseStudy() {
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
                src={LogoLawd}
                alt="LAWD logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Customer Story</p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                LAWD's Growth on Autopilot
              </h1>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-accent pl-6 italic">
            How to stop losing 50% of your time to "mental checklists"
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section background="gray" className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Overview */}
          <div>
            <h2 className="text-2xl font-bold mb-4">The "Invisible Hole" in Rapid Growth</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                When staff counts double overnight, most leaders celebrate. But for LAWD, a leading property advisory firm in Australia, doubling from 50 to 100 employees created a silent crisis. Without an internal HR or IT department, the National Operations Manager and CEO found themselves trapped in a "mental checklist" nightmare.
              </p>
              <p className="mb-4">
                Every new hire was a victory for the business, but a costly drain on leadership hours.
              </p>
            </div>
          </div>

          {/* Challenge */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Challenge: The High Cost of Falling Through the Cracks</h2>
            <p className="text-gray-600 mb-6">The pain of disorganization trickles down from the top all the way to the newest hire. For LAWD, this manifested as:</p>
            <div className="grid gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">The "Mental Checklist" Fallacy</h3>
                <p className="text-gray-600">Relying on informal memory led to missed IT setups and payroll errors.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">The Bottleneck Effect</h3>
                <p className="text-gray-600">High-level executives were bogged down in manual recruitment tasks, draining their mental energy budget.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Disconnected Vendors</h3>
                <p className="text-gray-600">Communicating IT needs to outside providers through manual email resulted in a broken chain of causality, causing delays in day-one productivity.</p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-primary">The Solution: Implementing Autopilot</h2>
            <p className="text-gray-600 mb-6">
              LAWD replaced their manual onboarding process with a streamlined, automated GPS for their operations.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">Customized Workflows</span>
                  <span className="text-gray-700">Replaced mental effort with automatic task assignments for IT, payroll, and equipment provisioning.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">Pre-populated Forms</span>
                  <span className="text-gray-700">Eliminated manual data errors by pre-filling critical hire information.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">Digital Contract Management</span>
                  <span className="text-gray-700">Enabled 100% friction-free signatures within the system.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Results: Scaling at High Speed</h2>
            <p className="text-lg text-gray-600 mb-6">
              By implementing Autopilot, LAWD transformed a grueling process into a seamless one.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center">
                <h3 className="font-bold text-primary mb-2">50% Time Recovery</h3>
                <p className="text-gray-600 text-sm">Contract management time was slashed by half, giving leadership back countless hours a week.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center">
                <h3 className="font-bold text-primary mb-2">Ruthless Accountability</h3>
                <p className="text-gray-600 text-sm">The built-in audit trail ensures nothing falls through the cracks ever again.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center">
                <h3 className="font-bold text-primary mb-2">Enhanced New Hire Experience</h3>
                <p className="text-gray-600 text-sm">New employees now enjoy a smooth, professional entry into the company culture.</p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative bg-primary text-white p-8 md:p-12 rounded-xl shadow-lg overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Quote size={120} />
              </div>
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                  "We used to use a mental checklist, so you can imagine that a few things fell through the cracks. Now, when things go wrong, we can refer back to the onboarding tool, and we know exactly what happened."
                </p>
                <div>
                  <p className="font-bold text-lg">Jo Beamsley</p>
                  <p className="text-blue-200 text-sm uppercase tracking-wide">National Operations Manager</p>
                  <p className="text-blue-200 text-sm mt-1">LAWD</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <div className="bg-accent/5 border border-accent/20 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Is Your Growth on Autopilot?</h3>
              <p className="text-gray-600 mb-6">
                LAWD is now hiring one new staff member every single week — scaling without the cognitive strain of manual management. Move from the stressed-out hell of mental checklists to the organized heaven of automated growth.
              </p>
              <Link href="https://autopilotworkflows.com/book-demo">
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
