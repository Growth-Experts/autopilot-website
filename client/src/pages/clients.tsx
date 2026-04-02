import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

import LogoLawd from "@assets/lawd-logo-new.png";
import LogoSyntech from "@assets/syntech-logo-new.png";
import LogoYMCA from "@assets/YMCA_Logo_1768585772781.jpg";
import LogoTalksure from "@assets/talksure logo.png";
import LogoRubiq from "@assets/rubiq-logo.png";
import LogoCBF from "@assets/cbf-logo.png";
import LogoSACanegrowers from "@assets/generated_images/sa_canegrowers_logo.png";
import LogoPedros from "@assets/pedros-logo.jpg";

type CaseStudy = {
  company: string;
  logo: string | null;
  result: string;
  detail: string;
  link: string;
};

export default function Clients() {
  const caseStudies: CaseStudy[] = [
    {
      company: "LAWD",
      logo: LogoLawd,
      result: "Halved time spent managing onboarding",
      detail: "Supporting weekly new hires without an internal HR or IT team.",
      link: "/case-studies/lawd"
    },
    {
      company: "Syntech",
      logo: LogoSyntech,
      result: "Cut reseller approval time from 10 days to 1 day",
      detail: "By pushing clean, validated data directly into CRM systems.",
      link: "/case-studies/syntech"
    },
    {
      company: "YMCA South Africa",
      logo: LogoYMCA,
      result: "Transformed operational efficiency",
      detail: "Reduced audit times and enhanced financial accountability with Autopilot.",
      link: "/case-studies/ymca"
    },
    {
      company: "Talksure",
      logo: LogoTalksure,
      result: "Reduced manual steps and cut ERP costs",
      detail: "Moved procurement approvals into Microsoft Teams with full audit trails.",
      link: "/case-studies/talksure"
    },
    {
      company: "SA Canegrowers",
      logo: LogoSACanegrowers,
      result: "Organisation-wide adoption in just days",
      detail: "Digitized approval processes inside Microsoft Teams improving process control.",
      link: "/case-studies/sa-canegrowers"
    },
    {
      company: "Pedros",
      logo: LogoPedros,
      result: "Full financial control across 180+ stores",
      detail: "Digitized procurement, invoicing, and payment batches across a national branch network.",
      link: "/case-studies/pedros"
    },
    {
      company: "RUBiQ",
      logo: LogoRubiq,
      result: "Rolled out in hours",
      detail: "Gained enterprise-grade controls, easier approvals, and a smooth employee experience.",
      link: "/case-studies/rubiq"
    },
    {
      company: "Cooperative Baptist Fellowship",
      logo: LogoCBF,
      result: "Faster decisions with strong governance",
      detail: "Streamlined key approval workflows inside Microsoft Teams.",
      link: "/case-studies/cbf"
    }
  ];

  return (
    <div className="flex flex-col">
       <Section background="white" className="pt-20 pb-4">
        <div className="max-w-4xl mx-auto text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Proven Success Across Industries</h1>
          <p className="text-xl text-gray-600 mb-8">
            Leading organizations trust our solutions to manage high-volume, mission-critical processes.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Our focus on transparent management and auditability ensures success in compliance-heavy environments.
          </p>
        </div>
      </Section>

      <Section background="gray" className="pt-6 md:pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => {
            const CardContentWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => (
              <Card 
                key={index} 
                className={`border-none shadow-md hover:shadow-lg transition-shadow duration-300 ${
                  index === caseStudies.length - 1 ? "md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto" : ""
                } ${className || ''}`}
              >
                {children}
              </Card>
            );

            if (study.link) {
              return (
                <Link key={index} href={study.link} className="block">
                  <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ring-1 ring-transparent hover:ring-accent/20 h-full">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center p-1 border border-gray-100 shadow-sm shrink-0 overflow-hidden">
                          {study.logo ? (
                            <img
                              src={study.logo}
                              alt={`${study.company} logo`}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <span className="text-sm font-black text-gray-800 tracking-tight">{study.company}</span>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <CardTitle className="text-2xl font-bold text-gray-800">{study.company}</CardTitle>
                          <span className="text-sm font-medium text-accent flex items-center gap-1 mt-1">
                            Read Case Study <span className="text-lg">→</span>
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-bold text-primary mb-3">"{study.result}"</p>
                      <p className="text-gray-600">{study.detail}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            }

            return (
              <Card 
                key={index} 
                className={`border-none shadow-md hover:shadow-lg transition-shadow duration-300 ${
                  index === caseStudies.length - 1 ? "md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto" : ""
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center p-1 border border-gray-100 shadow-sm shrink-0 overflow-hidden">
                      <img 
                        src={study.logo} 
                        alt={`${study.company} logo`} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800">{study.company}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold text-primary mb-3">"{study.result}"</p>
                  <p className="text-gray-600">{study.detail}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <Link href="https://autopilotworkflows.com/book-demo" className="inline-block" data-testid="link-book-demo-clients">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-bold px-10 h-14 text-lg"
              data-testid="button-book-demo-clients"
            >
              Book a Demo
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
