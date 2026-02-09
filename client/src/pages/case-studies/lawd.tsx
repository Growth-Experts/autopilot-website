import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check, Quote } from "lucide-react";
import LogoLawd from "@assets/lawd-logo_1767792280625.png";

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
                LAWD’s Growth on Autopilot
              </h1>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-accent pl-6 italic">
            "Slashing Onboarding Management Time by 50%"
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section background="gray" className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-12">
          
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                LAWD, a leading property advisory firm in Australia, faced challenges managing its rapid staff expansion.
              </p>
              <p className="mb-4">
                With no internal HR or IT department, their manual onboarding processes led to delays and difficulty keeping track of which stages had been completed. By implementing Autopilot, LAWD was able to save 40%-50% of the time previously spent on recruitment and contract onboarding processes. Autopilot’s built-in audit-trail feature has also significantly improved onboarding task accountability.
              </p>
              <p className="mb-4">
                This transformation has enabled LAWD to scale its operations more effectively, supporting continued growth while hiring a new staff member every week.
              </p>
            </div>
          </div>

          {/* Challenges */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Challenges</h2>
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Rapid Expansion Without HR Support</h3>
                <p className="text-gray-600">
                  LAWD's staff count doubled from 50 to over 100 in a short span of time, but the company lacked an internal HR department. This meant that the National Operations Manager and CEO were managing recruitment and onboarding tasks, causing bottlenecks.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Manual Processes Leading to Errors</h3>
                <p className="text-gray-600">
                  Onboarding was managed manually through email and informal mental checklists, which often resulted in missed steps and errors—especially in areas like IT setup for new employees. This caused delays and inconsistent employee experiences.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-gray-900 mb-2">No Internal IT Department</h3>
                <p className="text-gray-600">
                  LAWD relied on a managed service provider for IT needs. With new hires requiring specific IT setups, manual communication often resulted in missing requests or errors during the process, further delaying employee productivity.
                </p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-primary">Features of Autopilot Used</h2>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">Customized Onboarding Workflow</span>
                  <span className="text-gray-700">Automates tasks such as assigning IT setups, payroll entries, and equipment provisioning.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">Centralized Task Assignment</span>
                  <span className="text-gray-700">A unified workflow system assigns tasks to responsible departments (HR, IT, Payroll) and external vendors.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">Pre-populated Forms</span>
                  <span className="text-gray-700">Pre-filled data forms reduce manual input errors and streamline information capture.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">Approval Workflows</span>
                  <span className="text-gray-700">Multiple approval steps are built into the workflow, including reviews by the CEO, Finance, and Payroll.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">External Task Integration</span>
                  <span className="text-gray-700">Allows external teams (e.g., outsourced IT, payroll) to engage with the onboarding process seamlessly.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">Digital Contract Management</span>
                  <span className="text-gray-700">Contracts are generated, uploaded, reviewed, and signed digitally within the system.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">40%+ Time Savings</h3>
                <p className="text-gray-600 text-sm">Reduction in time spent on onboarding, with up to 50% savings in contract management.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Improved Accountability</h3>
                <p className="text-gray-600 text-sm">Autopilot's system allows LAWD to quickly identify issues and hold the right parties accountable.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Scalability</h3>
                <p className="text-gray-600 text-sm">The system has scaled efficiently to accommodate rapid business growth and evolving needs.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-primary mb-2">Enhanced Experience</h3>
                <p className="text-gray-600 text-sm">Feedback from new hires has been more positive, with fewer delays and smoother integration.</p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative bg-primary text-white p-8 md:p-12 rounded-xl shadow-lg my-12 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Quote size={120} />
              </div>
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                  “We used to use a mental checklist, so you can imagine that a few things fell through the cracks. Now, when things go wrong, we can refer back to the onboarding tool, and we know exactly what happened.”
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
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="text-gray-600 mb-8">
              Autopilot has successfully transformed the onboarding process at LAWD, allowing the company to manage its rapid growth more effectively while saving time and reducing errors. By automating key processes and introducing greater accountability, LAWD is now better positioned to handle future expansions.
            </p>
            
            <div className="bg-accent/5 border border-accent/20 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Streamline critical HR processes with Autopilot.</h3>
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
