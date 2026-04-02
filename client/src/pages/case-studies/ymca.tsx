import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check, TrendingUp, Clock, FileCheck, ShieldCheck } from "lucide-react";
import LogoYMCA from "@assets/YMCA_Logo_1768585772781.jpg";

export default function YMCACaseStudy() {
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
                src={LogoYMCA} 
                alt="YMCA logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Customer Story</p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Transforming Payment Requisition and Reporting at YMCA South Africa
              </h1>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-accent pl-6 italic">
            "Transformed operational efficiency"
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
                When you work with non-profit organisations, you quickly learn that good intentions aren’t enough. If the systems behind the scenes don’t work, even the most impactful programmes struggle to scale, report, or earn funder trust.
              </p>
              <p className="mb-4">
                That was exactly the challenge facing YMCA South Africa when we first started working together in 2018.
              </p>
              <p className="mb-4">
                YMCA operates across South Africa, often in remote areas, managing multiple donor-funded projects - each with strict reporting and compliance requirements. Their mission was strong. Their people were committed. But the processes supporting their financial workflows were holding them back.
              </p>
            </div>
          </div>

          {/* The Challenge */}
          <div>
            <h2 className="text-2xl font-bold mb-6">When Manual Processes Become a Risk</h2>
            <p className="text-lg text-gray-600 mb-6">
              When YMCA came to Autopilot, their funding management and reporting processes were entirely manual. That created several compounding challenges:
            </p>
            
            <div className="grid gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                    <span>Paper-based workflows caused long approval delays</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                    <span>Retrieving documents for audits was time-consuming and unreliable</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                    <span>Staff working in remote areas had limited access to computers, making coordination difficult</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                    <span>Manual data handling increased the risk of errors and inconsistencies</span>
                  </li>
                </ul>
                <p className="mt-4 font-medium text-gray-900 border-t border-gray-100 pt-4">
                  Over time, these challenges began to affect confidence with auditors and funders. And for a non-profit organisation, trust is everything.
                </p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-primary">How Autopilot Solved It</h2>
            <p className="text-lg text-gray-600 mb-6">
              The goal was to create a system that worked for real people, in real conditions, without adding complexity. Together with YMCA South Africa, we implemented Autopilot to fully digitise and automate their funding request and approval processes.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <FileCheck size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Digital Funding Request Forms</h3>
                  <p className="text-gray-600">Customised forms with built-in validation ensured requests were accurate from the start.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Automated Approval Workflows</h3>
                  <p className="text-gray-600">Requests moved through structured, rule-driven workflows, removing bottlenecks and guesswork.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Mobile-Friendly Access</h3>
                  <p className="text-gray-600">Staff in remote areas could submit and approve requests using mobile devices, not just desktops.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Integrated Audit Access</h3>
                  <p className="text-gray-600">Auditors were given secure access to records, allowing them to review payments without delays.</p>
                </div>
              </div>
            </div>
            
            <p className="mt-8 font-medium text-center text-primary text-lg">
              The result was a single, transparent system that replaced fragmented, manual processes.
            </p>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Results</h2>
            <p className="text-lg text-gray-600 mb-8">
              By implementing Autopilot, YMCA South Africa achieved:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">40% Less Audit Time</h3>
                <p className="text-gray-600 text-sm">A 40% reduction in audit time, due to fewer findings.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Hours, Not Days</h3>
                <p className="text-gray-600 text-sm">Approval times reduced from several days to just a few hours.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Real-Time Visibility</h3>
                <p className="text-gray-600 text-sm">Real-time visibility into funding requests and approvals.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Increased Trust</h3>
                <p className="text-gray-600 text-sm">Increased trust with international donors, driven by transparency and accountability.</p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative bg-primary text-white p-8 md:p-12 rounded-xl shadow-lg my-12 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck size={120} />
              </div>
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                  “SA-YMCA started using Autopilot in 2018 and it was the best decision we’ve made. It has cut the time spent with auditors by at least 30–40%.”
                </p>
                <div>
                  <p className="font-bold text-lg">Petro Bantjes</p>
                  <p className="text-blue-200 text-sm uppercase tracking-wide">Financial Administrator</p>
                  <p className="text-blue-200 text-sm mt-1">YMCA South Africa</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg font-medium text-center text-gray-700 italic max-w-2xl mx-auto">
              “With all staff involved in Autopilot, the financial accountability has increased, and this has increased the integrity of the Organisation with our international donors.”
            </p>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold mb-4">What This Proves</h2>
            <p className="text-gray-600 mb-4">
              This case study is about what happens when the right systems support the right mission.
            </p>
            <p className="text-gray-600 mb-8">
              For YMCA South Africa, automating their funding and reporting workflows improved accountability, strengthened donor trust, and allowed their teams to focus on what really matters. If your organisation is struggling with manual approvals, audits, or reporting, the right automation can make a measurable difference.
            </p>
            
            <div className="bg-accent/5 border border-accent/20 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Improve accountability and strengthen trust.</h3>
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
