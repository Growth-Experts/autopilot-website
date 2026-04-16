import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldCheck, Users, Zap, GitBranch } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-40 md:pb-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Autopilot Turns <br />
              <span className="text-accent">Complexity into Clarity</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Founded in 2014, Autopilot was built to solve the problem of disorganized, manual business processes inside modern organizations.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Today, we build workflow automation solutions within the Microsoft ecosystem — helping organizations streamline onboarding, approvals, and internal processes while maintaining full accountability and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Values / What drives us */}
      <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Driven by Workflow Specialists</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our team is dedicated to understanding the intricacies of critical business processes — building solutions that are technologically advanced and highly usable for both internal teams and external parties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-none bg-blue-50 flex items-center justify-center text-primary mb-5">
                  <GitBranch className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold mb-3">Structured Processes</h3>
                <p className="text-gray-600">We replace fragmented email threads and manual handoffs with guided, step-by-step workflows that keep every stakeholder aligned.</p>
              </div>

              <div className="bg-white p-8 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-none bg-orange-50 flex items-center justify-center text-accent mb-5">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold mb-3">Built-in Compliance</h3>
                <p className="text-gray-600">Every workflow includes full audit trails, tamper-evident storage, and compliant e-signatures — so governance is never an afterthought.</p>
              </div>

              <div className="bg-white p-8 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-none bg-blue-50 flex items-center justify-center text-primary mb-5">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI-Enhanced Automation</h3>
                <p className="text-gray-600">We leverage Microsoft CoPilot and AI document processing to reduce manual effort while keeping humans firmly in control of decisions.</p>
              </div>

              <div className="bg-white p-8 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-none bg-orange-50 flex items-center justify-center text-accent mb-5">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold mb-3">People-First Design</h3>
                <p className="text-gray-600">Autopilot is built for real teams — intuitive enough for external parties, powerful enough for enterprise-scale operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to See It in Action?</h2>
            <p className="text-lg text-gray-600">
              Most workflows go live in days, not months. Book a demo and we'll show you how Autopilot fits your processes.
            </p>
            <Link href="https://calendly.com/marklehrer-autopilot/30min" data-testid="link-book-demo-about">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-bold px-10 h-14 text-lg"
                data-testid="button-book-demo-about"
              >
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
