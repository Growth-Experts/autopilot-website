import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import OfficeImage from "@assets/generated_images/professional_corporate_office_team.png";
import AdamPhoto from "@assets/adam_shapiro_1767786578211.jpg";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col">
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Autopilot Turns <br/>
              <span className="text-accent">Complexity into Clarity</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Autopilot was founded in 2014 to solve the problem of disorganized, manual business processes inside modern organizations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, Autopilot builds workflow automation solutions within the Microsoft ecosystem - helping organizations streamline onboarding, approvals, and internal processes while maintaining full accountability and compliance.
            </p>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-accent/10 rounded-none transform rotate-3"></div>
             <img 
               src={OfficeImage} 
               alt="Autopilot Team" 
               className="relative rounded-none shadow-xl w-full object-cover aspect-video"
             />
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Founder</h2>
          
          <div className="bg-white rounded-none shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gray-200 min-h-[300px] relative">
               <img src={AdamPhoto} alt="Adam Shapiro" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="md:w-2/3 p-8 md:p-12 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary" data-testid="text-founder-name">Adam Shapiro</h3>
                <p className="text-sm text-accent font-bold uppercase tracking-wide" data-testid="text-founder-title">Founder</p>
              </div>
              
              <div className="space-y-4 text-gray-600" data-testid="text-founder-bio">
                <p>
                  Adam Shapiro is a technology entrepreneur with over two decades of experience building and scaling digital businesses.
                </p>
                <p>
                  In 2001, Adam co-founded Pilotfish Digital, which he grew over two decades before its successful sale in 2022. In 2014, he and co-founder Hannes Bantjes launched Autopilot, a SaaS workflow automation platform designed to replace fragmented, manual processes with structured, auditable workflows.
                </p>
                <p>
                  Today, Adam focuses on helping organizations simplify complexity, improve accountability, and scale with confidence.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/in/adamshapirosafrica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto"
                  data-testid="link-follow-adam-linkedin"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white font-bold px-10 h-12 rounded-full shadow-sm hover:shadow-md transition-all"
                    data-testid="button-follow-adam-linkedin"
                  >
                    Follow Adam on LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="white" className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
           <h2 className="text-3xl font-bold">Driven by Workflow Specialists</h2>
           <p className="text-lg text-gray-600">
             Our team is composed of workflow and integration specialists dedicated to understanding the intricacies of critical business processes. We focus on building solutions that are not only technologically advanced but also highly usable for both internal teams and external parties.
           </p>
           <div className="pt-8">
             <Link href="/contact">
               <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-10">
                 Book a Demo
               </Button>
             </Link>
           </div>
        </div>
      </Section>
    </div>
  );
}
