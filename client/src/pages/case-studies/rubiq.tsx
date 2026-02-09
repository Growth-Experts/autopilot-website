import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check, Shield, Users, Clock } from "lucide-react";
import LogoRubiq from "@assets/generated_images/rubiq_logo_text.png";

export default function RubiqCaseStudy() {
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
                src={LogoRubiq} 
                alt="RUBiQ logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Customer Story</p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Accelerating Governance, Risk, and Compliance
              </h1>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-accent pl-6 italic">
            "Rolled out in hours"
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
                RUBiQ, a leader in Governance, Risk, and Compliance (GRC) software, needed a way to streamline their own internal processes to match the efficiency they deliver to their clients.
              </p>
              <p className="mb-4">
                By implementing Autopilot, RUBiQ was able to gain enterprise-grade controls, easier approvals, and a smooth employee experience, all rolled out in record time.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-primary">Key Benefits</h2>
            
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Rapid Deployment</h3>
                  <p className="text-gray-600">The entire solution was rolled out in hours, not weeks or months, allowing for immediate impact and quick ROI.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Enterprise-Grade Controls</h3>
                  <p className="text-gray-600">Robust governance and control mechanisms were established to ensure compliance and security across all workflows.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <Check size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Easier Approvals</h3>
                  <p className="text-gray-600">Approval processes were simplified and streamlined, reducing bottlenecks and speeding up decision-making.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Smooth Employee Experience</h3>
                  <p className="text-gray-600">Employees experienced a frictionless workflow, improving satisfaction and productivity.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Outcome</h2>
            <p className="text-lg text-gray-600 mb-8">
              Autopilot enabled RUBiQ to maintain high standards of governance while significantly improving operational efficiency and agility.
            </p>
            
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100 text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Rolled Out In Hours</h3>
              <p className="text-gray-600">
                Speed to value was immediate, proving that enterprise-grade automation doesn't have to come with long implementation timelines.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold mb-4">Experience the Speed of Autopilot</h2>
            <p className="text-gray-600 mb-8">
              See how quickly you can transform your organization's workflows.
            </p>
            
            <div className="bg-accent/5 border border-accent/20 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to get started?</h3>
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
