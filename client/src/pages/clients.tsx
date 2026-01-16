import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";

import LogoLawd from "@assets/lawd-logo_1767792280625.png";
import LogoSyntech from "@assets/Syntech-Logo_1767792280626.png";
import LogoYMCA from "@assets/YMCA_Logo_1768585772781.jpg";
import LogoTalksure from "@assets/generated_images/talksure_logo_text.png";
import LogoRubiq from "@assets/generated_images/rubiq_logo_text.png";
import LogoCBF from "@assets/generated_images/cooperative_baptist_fellowship_logo.png";
import LogoSACanegrowers from "@assets/generated_images/sa_canegrowers_logo.png";

export default function Clients() {
  const caseStudies = [
    {
      company: "LAWD",
      logo: LogoLawd,
      result: "Halved time spent managing onboarding",
      detail: "Supporting weekly new hires without an internal HR or IT team."
    },
    {
      company: "Syntech",
      logo: LogoSyntech,
      result: "Cut reseller approval time from 10 days to 1 day",
      detail: "By pushing clean, validated data directly into CRM systems."
    },
    {
      company: "YMCA South Africa",
      logo: LogoYMCA,
      result: "Transformed operational efficiency",
      detail: "Reduced audit times and enhanced financial accountability with Autopilot."
    },
    {
      company: "Talksure",
      logo: LogoTalksure,
      result: "Reduced manual steps and cut ERP costs",
      detail: "Moved procurement approvals into Microsoft Teams with full audit trails."
    },
    {
      company: "RUBiQ",
      logo: LogoRubiq,
      result: "Rolled out in hours",
      detail: "Gained enterprise-grade controls, easier approvals, and a smooth employee experience."
    },
    {
      company: "Cooperative Baptist Fellowship",
      logo: LogoCBF,
      result: "Faster decisions with strong governance",
      detail: "Streamlined key approval workflows inside Microsoft Teams."
    },
    {
      company: "SA Canegrowers",
      logo: LogoSACanegrowers,
      result: "Organisation-wide adoption in just days",
      detail: "Digitized approval processes inside Microsoft Teams improving process control."
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
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
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
          ))}
        </div>

        <div className="text-center mt-20">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-10 h-14 text-lg">
            Book a Demo
          </Button>
        </div>
      </Section>
    </div>
  );
}
