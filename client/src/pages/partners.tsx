import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, ShieldCheck, Zap } from "lucide-react";

export default function Partners() {
  return (
    <div className="flex flex-col">
      <Section background="white" className="pt-24 pb-16 md:pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Expand Your Reach. Partner with Autopilot.</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Autopilot works with certified implementation partners to deliver faster deployments and consistent outcomes for clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
           <div className="bg-white p-8 rounded-none shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 cursor-default">
             <div className="w-12 h-12 bg-blue-100 rounded-none flex items-center justify-center text-primary mx-auto mb-6">
               <Zap className="h-6 w-6" />
             </div>
             <h3 className="font-bold text-lg mb-2">Sales Collateral</h3>
             <p className="text-sm text-gray-600">Access to standardized sales decks and content to present our solutions effectively.</p>
           </div>
           
           <div className="bg-white p-8 rounded-none shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 cursor-default">
             <div className="w-12 h-12 bg-blue-100 rounded-none flex items-center justify-center text-primary mx-auto mb-6">
               <Zap className="h-6 w-6" />
             </div>
             <h3 className="font-bold text-lg mb-2">Growth Opportunities</h3>
             <p className="text-sm text-gray-600">Implement solutions for high-demand needs like employee and client onboarding.</p>
           </div>
           
           <div className="bg-white p-8 rounded-none shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 cursor-default">
             <div className="w-12 h-12 bg-blue-100 rounded-none flex items-center justify-center text-primary mx-auto mb-6">
               <Zap className="h-6 w-6" />
             </div>
             <h3 className="font-bold text-lg mb-2">Dedicated Support</h3>
             <p className="text-sm text-gray-600">Direct access to the Autopilot team for technical and sales enablement.</p>
           </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Join Our Partner Network</h3>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-10">
              Contact Adam
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
