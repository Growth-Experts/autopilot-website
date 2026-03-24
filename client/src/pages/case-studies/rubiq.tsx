import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Shield, Users, Clock, Zap } from "lucide-react";
import LogoRubiq from "@assets/rubiq-logo.png";

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
                RUBiQ's Governance at Speed
              </h1>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-accent pl-6 italic">
            How a GRC leader eliminated the "Compliance Tax"
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
                RUBiQ is a titan in the Governance, Risk, and Compliance (GRC) software space. They provide efficiency to their clients, yet internally, they faced a common scaling challenge: their own manual workflows couldn't keep pace with their expertise. To maintain their reputation, they needed to bridge the gap between "knowing" compliance and "automating" it.
              </p>
            </div>
          </div>

          {/* Challenge */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Challenge: The Friction of Manual Governance</h2>
            <p className="text-gray-600 mb-6">For RUBiQ, manual governance was draining their team's mental energy:</p>
            <div className="grid gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">The Approval Bottleneck</h3>
                <p className="text-gray-600">Critical decisions were trapped in email chains, creating "administrative drag" that slowed down the entire organization.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">The Scalability Wall</h3>
                <p className="text-gray-600">As a leader in GRC, any internal slip-up in security or control was a risk to their brand authority.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">The Implementation Paradox</h3>
                <p className="text-gray-600">Most enterprise-grade solutions take months to deploy — a "time tax" that RUBiQ simply couldn't afford to pay.</p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-primary">The Solution: Enterprise-Grade Control on Autopilot</h2>
            <p className="text-gray-600 mb-6">RUBiQ implemented Autopilot to handle the heavy lifting of governance.</p>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Rapid Deployment (Hours, Not Months)</h3>
                  <p className="text-gray-600">Enterprise software usually involves endless consulting hours, but Autopilot was rolled out in record time — literally hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Streamlined Approval Engines</h3>
                  <p className="text-gray-600">They replaced "chasing people down" with automated, simplified approval paths, significantly speeding up decision-making.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Robust Governance Mechanisms</h3>
                  <p className="text-gray-600">They established enterprise-grade controls that ensure every workflow is compliant and secure by default, not by effort.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Results: Agile Governance in Action</h2>
            <p className="text-lg text-gray-600 mb-6">
              RUBiQ realized that a better employee experience leads to a better client experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center">
                <h3 className="font-bold text-primary mb-2">Immediate ROI</h3>
                <p className="text-gray-600 text-sm">Because the solution was active in hours, the speed to value was instantaneous.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center">
                <h3 className="font-bold text-primary mb-2">Frictionless Employee Experience</h3>
                <p className="text-gray-600 text-sm">Employees moved from "fighting the system" to "working with the flow," leading to a measurable spike in productivity.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center">
                <h3 className="font-bold text-primary mb-2">Total Operational Agility</h3>
                <p className="text-gray-600 text-sm">RUBiQ now moves with the speed of a startup but the controls of a global enterprise.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <div className="bg-accent/5 border border-accent/20 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Does Your Automation Move at the Speed of Business?</h3>
              <p className="text-gray-600 mb-6">Are you waiting months for "control," or are you ready to launch in hours?</p>
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
