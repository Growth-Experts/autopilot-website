import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col">
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Autopilot Turns <br/>
              <span className="text-accent">Complexity into Clarity</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Autopilot was founded in 2014 to solve the problem of disorganized, manual business processes inside modern organizations.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Today, Autopilot builds workflow automation solutions within the Microsoft ecosystem - helping organizations streamline onboarding, approvals, and internal processes while maintaining full accountability and compliance.
            </p>
        </div>
      </Section>

      <Section background="white" className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
           <h2 className="text-3xl font-bold">Driven by Workflow Specialists</h2>
           <p className="text-lg text-gray-600">
             Our team is composed of workflow and integration specialists dedicated to understanding the intricacies of critical business processes. We focus on building solutions that are not only technologically advanced but also highly usable for both internal teams and external parties.
           </p>
           <div className="pt-8">
             <Link href="https://autopilotworkflows.com/book-demo" data-testid="link-book-demo-about">
               <Button
                 size="lg"
                 className="bg-accent hover:bg-accent/90 text-white font-bold px-10"
                 data-testid="button-book-demo-about"
               >
                 Book a Demo
               </Button>
             </Link>
           </div>
        </div>
      </Section>
    </div>
  );
}
