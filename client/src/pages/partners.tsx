import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, ShieldCheck, Zap } from "lucide-react";

export default function Partners() {
  return (
    <div className="flex flex-col">
      <Section background="white" className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Strategic Alliances. Trusted Integration.</h1>
          <p className="text-xl text-gray-600 mb-8">
            Built to Integrate. Powered by World-Class Technology.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Autopilot is built to integrate seamlessly with your existing systems - deploying inside or alongside Microsoft Teams without disrupting your broader technology stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-blue-50 border-none">
            <CardContent className="p-8">
               <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                 <ShieldCheck className="h-6 w-6" /> Microsoft Partner
               </h3>
               <p className="text-gray-700">
                 We are a trusted Microsoft Partner, leveraging technologies like SharePoint to ensure secure storage and compliance.
               </p>
            </CardContent>
          </Card>
          
          <Card className="bg-orange-50 border-none">
            <CardContent className="p-8">
               <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                 <Handshake className="h-6 w-6" /> DocuSign Integration
               </h3>
               <p className="text-gray-700">
                 We integrate with compliant e-signature providers like DocuSign that meet legal and security requirements.
               </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Expand Your Reach. Partner with Autopilot.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Autopilot works with certified implementation partners to deliver faster deployments and consistent outcomes for clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
           <div className="bg-white p-8 rounded-none shadow-sm border border-gray-100 text-center">
             <div className="w-12 h-12 bg-blue-100 rounded-none flex items-center justify-center text-primary mx-auto mb-6">
               <Zap className="h-6 w-6" />
             </div>
             <h3 className="font-bold text-lg mb-2">Sales Collateral</h3>
             <p className="text-sm text-gray-600">Access to standardized sales decks and content to present our solutions effectively.</p>
           </div>
           
           <div className="bg-white p-8 rounded-none shadow-sm border border-gray-100 text-center">
             <div className="w-12 h-12 bg-blue-100 rounded-none flex items-center justify-center text-primary mx-auto mb-6">
               <Zap className="h-6 w-6" />
             </div>
             <h3 className="font-bold text-lg mb-2">Growth Opportunities</h3>
             <p className="text-sm text-gray-600">Implement solutions for high-demand needs like employee and client onboarding.</p>
           </div>
           
           <div className="bg-white p-8 rounded-none shadow-sm border border-gray-100 text-center">
             <div className="w-12 h-12 bg-blue-100 rounded-none flex items-center justify-center text-primary mx-auto mb-6">
               <Zap className="h-6 w-6" />
             </div>
             <h3 className="font-bold text-lg mb-2">Dedicated Support</h3>
             <p className="text-sm text-gray-600">Direct access to the Autopilot team for technical and sales enablement.</p>
           </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Join Our Partner Network</h3>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-10">
            Contact Adam
          </Button>
        </div>
      </Section>
    </div>
  );
}
