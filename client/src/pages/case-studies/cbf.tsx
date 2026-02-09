import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check, Shield, Zap, Users } from "lucide-react";
import LogoCBF from "@assets/generated_images/cooperative_baptist_fellowship_logo.png";

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
                Faster Decisions with Strong Governance
              </h1>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-accent pl-6 italic">
            "Streamlined key approval workflows inside Microsoft Teams"
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
                The Cooperative Baptist Fellowship (CBF) is a Christian network comprised of individuals and churches that work together to spread the hope of Christ. To support their mission effectively, they needed efficient administrative processes that didn't compromise on governance.
              </p>
              <p className="mb-4">
                By implementing Autopilot, CBF was able to streamline key approval workflows directly inside Microsoft Teams, resulting in faster decision-making without sacrificing control.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-primary">Key Benefits</h2>
            
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Faster Decision Making</h3>
                  <p className="text-gray-600">By moving approvals into Microsoft Teams, delays were eliminated, allowing leadership to make key decisions more quickly.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Strong Governance</h3>
                  <p className="text-gray-600">While speed increased, governance was strengthened with standardized workflows and complete audit trails.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Seamless Collaboration</h3>
                  <p className="text-gray-600">Workflows are now integrated where the team already collaborates, reducing friction and context switching.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Outcome</h2>
            <p className="text-lg text-gray-600 mb-8">
              CBF successfully modernized their approval processes, proving that non-profits can operate with the speed and efficiency of modern tech companies while maintaining strict stewardship.
            </p>
            
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100 text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Efficiency Meets Governance</h3>
              <p className="text-gray-600">
                A perfect balance of operational speed and administrative control.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold mb-4">Streamline Your Governance</h2>
            <p className="text-gray-600 mb-8">
              See how Autopilot can help your organization make faster decisions with better control.
            </p>
            
            <div className="bg-accent/5 border border-accent/20 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to upgrade your workflows?</h3>
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
