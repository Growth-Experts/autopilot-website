import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, Info, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function Pricing() {
  const [currency, setCurrency] = useState<'USD' | 'ZAR'>('USD');
  const [locationChecked, setLocationChecked] = useState(false);

  useEffect(() => {
    if (locationChecked) return;
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const isSouthAfrica = latitude >= -35 && latitude <= -22 && longitude >= 16 && longitude <= 33;
          if (isSouthAfrica) setCurrency('ZAR');
          setLocationChecked(true);
        },
        (error) => {
          setLocationChecked(true);
        }
      );
    }
  }, [locationChecked]);

  const symbol = currency === 'USD' ? '$' : 'R';
  
  // Pricing tiers adapted to the new layout
  const tiers = [
    {
      name: "Starter",
      price: currency === 'USD' ? "420" : "7 500",
      description: "Foundational workflow tools for small teams.",
      features: [
        "Up to 100 workflows / month",
        "Unlimited Internal Users",
        "Unlimited Forms",
        "Basic Audit Logs",
        "Email Support"
      ],
      cta: "Get Started",
      ctaVariant: "outline" as const,
      highlight: false
    },
    {
      name: "Growth",
      price: currency === 'USD' ? "850" : "15 000",
      description: "Essential automation for growing businesses.",
      features: [
        "Up to 1,000 workflows / month",
        "Advanced Verification Tools",
        "CIPC Integration",
        "Priority Email Support",
        "90 days review history"
      ],
      includes: "EVERYTHING IN STARTER, PLUS:",
      cta: "Try it free",
      ctaVariant: "default" as const, // Blue
      highlight: false
    },
    {
      name: "Pro",
      price: currency === 'USD' ? "1 500" : "28 000",
      description: "Advanced collaboration and workflow for scaled teams.",
      features: [
        "Up to 5,000 workflows / month",
        "Bank Account Verification",
        "AI Document Processing",
        "Dedicated Success Manager",
        "Unlimited review history"
      ],
      includes: "EVERYTHING IN GROWTH, PLUS:",
      cta: "Try it free",
      ctaVariant: "default" as const,
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      isCustom: true,
      description: "For large organizations with complex workflows.",
      features: [
        "Unlimited workflows",
        "Custom AI Models",
        "SLA Guarantees",
        "On-premise deployment options",
        "White-glove onboarding"
      ],
      includes: "EVERYTHING IN PRO, PLUS:",
      cta: "Contact us",
      ctaVariant: "destructive" as const, // Pink/Reddish
      highlight: false
    }
  ];

  return (
    <div className="flex flex-col">
      <Section background="blue" className="text-white pt-24 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Simple, Scalable Pricing</h1>
          <p className="text-xl text-blue-100 mb-8">
            Choose the plan that fits your workflow volume. Upgrade or downgrade at any time.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-bold ${currency === 'USD' ? 'text-white' : 'text-blue-200'}`}>USD</span>
            <Switch 
              checked={currency === 'ZAR'}
              onCheckedChange={(checked) => setCurrency(checked ? 'ZAR' : 'USD')}
              className="data-[state=checked]:bg-accent"
            />
            <span className={`text-sm font-bold ${currency === 'ZAR' ? 'text-white' : 'text-blue-200'}`}>ZAR</span>
          </div>
        </div>
      </Section>

      <Section background="white" className="-mt-24 pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <Card key={index} className={`relative flex flex-col h-full border-none shadow-xl rounded-none overflow-visible ${tier.highlight ? 'ring-2 ring-accent ring-offset-2' : ''}`}>
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-500 hover:to-purple-600 text-white border-none px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                      Most popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                  <div className="mt-4 mb-2">
                    {tier.isCustom ? (
                       <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-extrabold text-gray-900">Custom</span>
                       </div>
                    ) : (
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-extrabold text-gray-900">{symbol}{tier.price}</span>
                          <span className="text-gray-500 font-medium">/ month</span>
                        </div>
                    )}
                    {!tier.isCustom && <p className="text-xs text-gray-400 mt-1">billed monthly</p>}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed min-h-[40px]">
                    {tier.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pb-8">
                   <Button 
                      className={`w-full h-12 rounded-full font-bold mb-8 ${
                        tier.ctaVariant === 'outline' 
                          ? 'bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-50' 
                          : tier.ctaVariant === 'destructive'
                             ? 'bg-[#E91E63] hover:bg-[#D81B60] text-white border-none'
                             : 'bg-[#0066FF] hover:bg-[#0052CC] text-white border-none'
                      }`}
                      variant={tier.ctaVariant === 'outline' ? 'outline' : 'default'}
                   >
                     {tier.cta}
                   </Button>

                   {tier.includes && (
                     <p className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">
                       {tier.includes}
                     </p>
                   )}
                   
                   <ul className="space-y-4">
                     {tier.features.map((feature, i) => (
                       <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                         {/* Using a custom bullet or check based on the image style (just text list or info icons) */}
                         {/* Image implies simple list, maybe with tooltips? stick to simple text for now */}
                         <div className="w-full flex justify-between items-center group cursor-pointer">
                            <span>{feature}</span>
                            <Info className="h-4 w-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
                         </div>
                       </li>
                     ))}
                   </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ or Additional Info could go here */}
          <div className="mt-20 text-center">
             <p className="text-gray-500">Need help choosing the right plan? <a href="/contact" className="text-primary font-bold hover:underline">Contact our sales team</a></p>
          </div>
        </div>
      </Section>
    </div>
  );
}
