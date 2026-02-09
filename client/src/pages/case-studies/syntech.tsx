import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check, Zap, Database, BarChart } from "lucide-react";
import LogoSyntech from "@assets/Syntech-Logo_1767792280626.png";

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
                Streamlining Reseller Onboarding for Tech Distributor Syntech
              </h1>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-accent pl-6 italic">
            "Cut reseller approval time from 10 days to 1 day"
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section background="gray" className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-12">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Syntech Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Syntech is a distributor of specialised IT hardware throughout Sub-Saharan Africa through mass, niche, and online retail resellers.
              </p>
              <p className="mb-4">
                Syntech leveraged Autopilot to streamline their reseller application process, making it simpler and more efficient whilst simultaneously enhancing their engagement with new resellers.
              </p>
            </div>
          </div>

          {/* The Problem */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Challenge: Manual Bottlenecks</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100 mb-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">The Old Way</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span>Resellers manually completed PDF forms and emailed large files that often bounced</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span>Handwritten forms led to illegible writing and data capture errors</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span>Staff had to manually enter data into systems</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>The Result:</strong> Vetting and approval took at least 10 days with sub-par communication</span>
                </li>
              </ul>
            </div>
            <p className="text-lg font-medium text-gray-900">
              They needed Autopilot. And they needed it fast.
            </p>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-primary">How Autopilot Solved It</h2>
            <p className="text-lg text-gray-600 mb-6">
              By using Autopilot’s streamlined approach to paperless onboarding processes, Syntech prioritized customer experience.
            </p>
            
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary font-bold">1</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Digital Self-Service</h3>
                  <p className="text-gray-600">New resellers are welcomed by a fully digital form that autosaves progress. It pre-populates business registration details from the CIPC database, making it faster to complete.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Transparent Tracking</h3>
                  <p className="text-gray-600">Customers can track their application progress. Syntech can reach out at any stage to assist, providing industry-leading customer service.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary font-bold">3</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Seamless Approval</h3>
                  <p className="text-gray-600">Supporting documents are uploaded and a digital copy is sent for electronic signature. Applications can be approved within minutes of submission.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary font-bold">4</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Automated Integration</h3>
                  <p className="text-gray-600">Once approved, validated data is automatically pushed to Syntech’s financial and CRM systems (like Pipedrive), ensuring accuracy and speed.</p>
                </div>
              </div>
            </div>
            
            <p className="mt-8 font-medium text-center text-primary text-lg">
              Pain-less, efficient, and paperless.
            </p>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Results</h2>
            <p className="text-lg text-gray-600 mb-8">
              Today, with Autopilot effortlessly managing the on-boarding of their new clients, Syntech is able to run their practice more efficiently and more accurately – with less time wastage and far less stress.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-center gap-4">
                <Zap className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Record Speed</h3>
                  <p className="text-gray-600 text-sm">Record for complete application: 10 minutes</p>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-center gap-4">
                <BarChart className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Faster Approvals</h3>
                  <p className="text-gray-600 text-sm">Reduced from 10 days to 1 day</p>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-center gap-4">
                <Check className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Accuracy</h3>
                  <p className="text-gray-600 text-sm">More accurate information transfer</p>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-center gap-4">
                <Database className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Integration</h3>
                  <p className="text-gray-600 text-sm">Effortless integration into existing systems</p>
                </div>
              </div>
            </div>

            <p className="text-xl font-medium text-center text-gray-900 italic">
              "That’s Autopilot. Doing what it does best. Making work flow faster, effortlessly and more accurately."
            </p>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold mb-4">Make Work Flow Faster</h2>
            <p className="text-gray-600 mb-8">
              Syntech transformed their reseller onboarding from a painful 10-day manual process to a sleek, digital experience that can be completed in minutes.
            </p>
            
            <div className="bg-accent/5 border border-accent/20 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to streamline your onboarding?</h3>
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
