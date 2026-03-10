import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check, Quote } from "lucide-react";
import LogoTalksure from "@assets/talksure logo.png";

export default function TalksureCaseStudy() {
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
                src={LogoTalksure} 
                alt="Talksure logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Customer Story</p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                A Smarter Way to Manage Purchase Requests
              </h1>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-accent pl-6 italic">
            "Reduced manual steps and cut ERP costs"
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section background="gray" className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-12">
          
          {/* Problem */}
          <div>
            <h2 className="text-2xl font-bold mb-4">When Solutions Become Problems</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                When Talksure passed the 1,200-employee mark, their procurement process started showing strain.
              </p>
              <p className="mb-4">
                As a fast-growing financial services business operating across South Africa and international markets, Talksure needed a way to manage purchase requests that could scale - without slowing people down or overloading finance.
              </p>
              <p className="mb-4">
                They turned to Autopilot, with Greenlight supporting the implementation, to redesign procurement in a way that worked for real people, not just systems.
              </p>
              <p className="font-semibold text-gray-900 mb-4">
                Talksure had invested in a new ERP system, including its procurement module. On paper, it made sense. In practice, it created friction.
              </p>
              <p className="mb-4">
                Occasional users struggled with a complex interface, leading to errors. Managers had to log into the ERP finance system just to approve requests, which introduced delays. Every requester and approver required a full ERP licence - an expensive solution for people who only needed to submit or approve the occasional purchase.
              </p>
              <p className="mb-4">
                When something went wrong, the workflow was rigid. Finance teams were forced to step in manually, rework requests, and keep things moving.
              </p>
              <p className="font-semibold text-gray-900">
                The issue was usability.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-primary">How Autopilot Solved It</h2>
            <p className="text-lg text-gray-600 mb-6">
              Autopilot’s role was to simplify the process without compromising governance.
            </p>
            <p className="text-gray-600 mb-6">
              Rather than replacing the ERP, Autopilot became the front door to procurement - designed around how people already work.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-700">Purchase requests are initiated through the Autopilot Workflow app inside Microsoft Teams</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-700">Requests follow a clear approval flow, with managers approving directly in Teams or on mobile</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-700">Once approved, Power Automate automatically creates the purchase order in the ERP</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-700">A PDF of the approved PO is generated and shared with the requester for visibility and record-keeping</span>
              </li>
            </ul>
            
            <p className="mt-8 font-medium text-primary">
              The ERP remains the system of record. Autopilot removes the friction that sits around it.
            </p>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Results</h2>
            <p className="text-lg text-gray-600 mb-8">
              Here’s what changed once Autopilot was introduced:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Faster Requests</h3>
                <p className="text-gray-600 text-sm">Purchase requests moved through the business faster.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Mobile Approval</h3>
                <p className="text-gray-600 text-sm">Managers could approve requests directly from Teams or mobile.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Fewer Errors</h3>
                <p className="text-gray-600 text-sm">Fewer errors from occasional users raising requests.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Less Rework</h3>
                <p className="text-gray-600 text-sm">Less manual intervention and rework for finance.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Reduced Costs</h3>
                <p className="text-gray-600 text-sm">Reduced ERP licensing costs for non-core users.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Better Visibility</h3>
                <p className="text-gray-600 text-sm">Better visibility and reporting across procurement.</p>
              </div>
            </div>

            <p className="text-xl font-medium text-center text-gray-900">
              Procurement stopped being a blocker and became a smooth, predictable process.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold mb-4">What This Proves</h2>
            <p className="text-gray-600 mb-4">
              If your ERP is powerful but painful to use, the problem isn’t the system - it’s the experience around it.
            </p>
            <p className="text-gray-600 mb-8">
              Autopilot helps you keep control while giving your people a workflow they actually want to use. If procurement, approvals, or internal processes are slowing your teams down, there’s a better way to work.
            </p>
            
            <div className="bg-accent/5 border border-accent/20 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Let’s fix the friction, without ripping everything out.</h3>
              <Link href="/book-demo">
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
