import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Eye, BarChart, Shield, TrendingUp } from "lucide-react";
import LogoPedros from "@assets/pedros-logo.jpg";

export default function PedrosCaseStudy() {
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
              <img src={LogoPedros} alt="Pedros logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Customer Story</p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Scaling the Flock with Financial Integrity
              </h1>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-accent pl-6 italic">
            "From 0 to 180+ stores — with full financial control at every step"
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
                When a business grows from zero to 180+ stores in just six years, the "behind the scenes" systems often struggle to keep up with the pace of the front of the house. For Pedros, the challenge wasn't just about grilling great chicken — it was about maintaining financial control across a massive, national footprint of branches and a busy head office.
              </p>
              <p className="mb-4 italic text-gray-500">
                "Our business ethos is not scared to challenge conventions… we hold our ethics and morals at the core of our flavor." — Pedros Company Profile
              </p>
            </div>
          </div>

          {/* Challenge */}
          <div>
            <h2 className="text-2xl font-bold mb-6">When Growth Outpaces Manual Processes</h2>
            <p className="text-gray-600 mb-6">Before Autopilot, managing the financial life cycle of over 180 branches required intense manual effort. The finance team needed to manage and track:</p>
            <div className="grid gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Purchase Requests</h3>
                <p className="text-gray-600">Ensuring every branch has what it needs without losing oversight.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Invoice & Credit Note Requests</h3>
                <p className="text-gray-600">Managing the paper trail between suppliers, branches, and head office.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Payment Batches</h3>
                <p className="text-gray-600">Consolidating high volumes of transactions into reliable, approved batches for processing.</p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-primary">How Autopilot Solved It</h2>
            <p className="text-gray-600 mb-6">
              Autopilot provided a "digital backbone" for the Pedros finance department. By moving these core processes into a structured, automated environment, Pedros could maintain its "local is lekker" feel while operating with the precision of a global powerhouse.
            </p>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary font-bold">1</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Digitized Workflows</h3>
                  <p className="text-gray-600">Manual requests were replaced with standardized digital forms.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Branch-to-Head-Office Connectivity</h3>
                  <p className="text-gray-600">Approvals now flow effortlessly from individual branches to the central finance team.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-primary font-bold">3</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Automated Tracking</h3>
                  <p className="text-gray-600">Instead of chasing emails or paper, managers see a real-time dashboard of all pending and completed actions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Results</h2>
            <p className="text-lg text-gray-600 mb-6">
              Once Autopilot was implemented by the Pedros Finance Team, the turnaround in their workflow was immediate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-center gap-4">
                <Eye className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Total Visibility</h3>
                  <p className="text-gray-600 text-sm">Day-to-day tracking of all financial tasks with a clear view of every request</p>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-center gap-4">
                <Shield className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Audit-Ready Operations</h3>
                  <p className="text-gray-600 text-sm">Full digital audit trail for every approval, from purchase requests to payment batches</p>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-center gap-4">
                <BarChart className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Data-Driven Performance</h3>
                  <p className="text-gray-600 text-sm">KPI reports measure turnaround times, identifying and removing bottlenecks</p>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-center gap-4">
                <TrendingUp className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">High-Volume Mastery</h3>
                  <p className="text-gray-600 text-sm">Easily handles the high transaction volumes of a national branch network</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl">
              <p className="text-lg text-gray-700">
                With Autopilot, Pedros has proven that you don't have to sacrifice governance for growth. They now run a high-volume accounts operation that is <strong>transparent</strong>, <strong>accountable</strong>, and <strong>scalable</strong>. As Pedros continues to "spread its wings" toward 200+ stores, their financial systems are ready to fly with them.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <div className="bg-accent/5 border border-accent/20 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Scale with Financial Integrity?</h3>
              <p className="text-gray-600 mb-6">
                See how Autopilot can bring control and visibility to your growing operations.
              </p>
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
