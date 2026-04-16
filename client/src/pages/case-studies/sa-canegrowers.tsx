import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check, Quote } from "lucide-react";
import LogoSACanegrowers from "@assets/generated_images/sa_canegrowers_logo.png";

export default function SACanegrowersCaseStudy() {
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
                src={LogoSACanegrowers} 
                alt="SA Canegrowers logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Customer Story</p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Simplifying Approvals Inside Microsoft Teams
              </h1>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-accent pl-6 italic">
            "Organisation-wide adoption in just days"
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section background="gray" className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-12">
          
          {/* Problem */}
          <div>
            <h2 className="text-2xl font-bold mb-4">When Solutions No Longer Fit the Way People Work</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                When SA Canegrowers came to Autopilot, it was clear they weren’t looking for “another system.”
                They were looking for a better way to manage approvals and information - one that actually fit into how their people worked day to day.
              </p>
              <p className="mb-4">
                As a South Africa–based agricultural organisation, their teams were already deeply embedded in Microsoft 365. But their existing information management solution wasn’t keeping up. Processes were fragmented, approvals were clunky, and critical workflows lived outside the tools employees used most.
              </p>
              <p className="font-semibold text-gray-900">
                That friction was slowing things down.
              </p>
              <p className="mt-4">
                So Autopilot focused on one question: <br />
                <span className="italic">How do you bring structure and control into approvals without pulling people out of their natural workflow?</span>
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-primary">How Autopilot Solved It</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our approach was simple: meet people where they already work.
            </p>
            <p className="text-gray-600 mb-6">
              Because Autopilot runs natively inside Microsoft Teams, SA Canegrowers didn’t need to retrain teams or force behavioural change. Instead, approvals became part of everyday collaboration.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-700">Approval workflows were embedded directly into Teams</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-700">Employees initiated and managed processes without leaving their workspace</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-700">Controls and compliance were built into the workflow itself</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-700">Rollout was fast, simple, and scalable</span>
              </li>
            </ul>
            
            <p className="mt-8 font-medium text-primary">
              Autopilot handled the structure. Teams focused on the work.
            </p>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Results</h2>
            <p className="text-lg text-gray-600 mb-8">
              Once Autopilot for Microsoft Teams was rolled out, the change was immediate:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Fast Adoption</h3>
                <p className="text-gray-600 text-sm">Autopilot was deployed organisation-wide in just a few days.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Digitized & Managed</h3>
                <p className="text-gray-600 text-sm">Key approval processes were digitised and managed directly inside Microsoft Teams.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Unified Workspace</h3>
                <p className="text-gray-600 text-sm">Employees could work within a single, familiar workspace.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Standardised Workflows</h3>
                <p className="text-gray-600 text-sm">Manual, inconsistent processes were replaced with reliable, standardised workflows.</p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative bg-primary text-white p-8 md:p-12 rounded-xl shadow-lg my-12 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Quote size={120} />
              </div>
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                  “Autopilot is a remarkably powerful tool when it comes to helping us manage and digitize our business processes in a single workspace.”
                </p>
                <div>
                  <p className="font-bold text-lg">John Moll</p>
                  <p className="text-blue-200 text-sm uppercase tracking-wide">Knowledge and Information Manager</p>
                  <p className="text-blue-200 text-sm mt-1">SA Canegrowers</p>
                </div>
              </div>
            </div>
            
            <p className="text-xl font-medium text-center text-gray-900">
              Approvals stopped being a bottleneck, and started flowing.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold mb-4">What This Proves</h2>
            <p className="text-gray-600 mb-4">
              If your processes live outside the tools your teams use every day, friction is inevitable.
            </p>
            <p className="text-gray-600 mb-8">
              Autopilot shows what’s possible when approvals, governance, and automation are built into the flow of work, not bolted on afterward. If internal processes are slowing your teams down, there’s a better way to work - without ripping everything out.
            </p>
            
            <div className="bg-accent/5 border border-accent/20 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Let’s remove the friction and bring structure back into the flow.</h3>
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
