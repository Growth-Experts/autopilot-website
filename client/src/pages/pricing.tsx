import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

export default function Pricing() {
  const [currency, setCurrency] = useState<'USD' | 'ZAR'>('USD');
  const [locationChecked, setLocationChecked] = useState(false);

  useEffect(() => {
    if (locationChecked) return;

    // Check for hash first
    const hash = window.location.hash.toLowerCase();
    if (hash === '#usd') {
      setCurrency('USD');
      setLocationChecked(true);
      return;
    }
    if (hash === '#zar') {
      setCurrency('ZAR');
      setLocationChecked(true);
      return;
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const isSouthAfrica = latitude >= -35 && latitude <= -22 && longitude >= 16 && longitude <= 33;

          if (isSouthAfrica) {
             setCurrency('ZAR');
          }
          setLocationChecked(true);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLocationChecked(true);
        }
      );
    } else {
       setLocationChecked(true);
    }
  }, [locationChecked]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#usd') {
        setCurrency('USD');
      } else if (hash === '#zar') {
        setCurrency('ZAR');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const symbol = currency === 'USD' ? '$' : 'R';
  const flag = currency === 'ZAR' ? (
    <span className="inline-flex items-center justify-center ml-2 text-2xl" role="img" aria-label="South Africa Flag">
      🇿🇦
    </span>
  ) : null;

  const tiers = [
    {
      name: "Starter",
      price: currency === 'USD' ? "420" : "7 500",
      description: "For small teams getting started with workflow automation.",
    },
    {
      name: "Growth",
      price: currency === 'USD' ? "850" : "15 000",
      description: "For growing businesses that need more capacity and integrations.",
    },
    {
      name: "Pro",
      price: currency === 'USD' ? "1,500" : "28 000",
      description: "For scaled teams with advanced automation and AI needs.",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      isCustom: true,
      description: "For large organizations with complex, high-volume workflows.",
    },
  ];

  return (
    <div className="flex flex-col">
      <Section background="blue" className="text-white pt-24 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white flex items-center justify-center gap-2">
            Simple, Scalable Pricing {flag}
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Choose the plan that fits your workflow volume. Upgrade or downgrade at any time.
          </p>
        </div>
      </Section>

      <Section background="white" className="-mt-24 pt-0">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <Card key={index} className={`relative flex flex-col border-none shadow-xl rounded-none overflow-visible ${tier.highlight ? 'ring-2 ring-accent ring-offset-2' : ''}`}>
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-none px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                      Most popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-2">
                  <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                  <div className="mt-4 mb-2">
                    {tier.isCustom ? (
                      <span className="text-4xl font-extrabold text-gray-900">Custom</span>
                    ) : (
                      <div className="flex flex-col items-start xl:flex-row xl:items-baseline gap-1">
                        <span className={`font-extrabold text-gray-900 ${currency === 'ZAR' ? 'text-3xl' : 'text-4xl'}`}>{symbol}{tier.price}</span>
                        <span className="text-gray-500 font-medium">/ month</span>
                      </div>
                    )}
                    {!tier.isCustom && (
                      <p className="text-xs text-gray-400 mt-1">billed monthly</p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pb-8 flex flex-col flex-1">
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {tier.description}
                  </p>
                  <div className="mt-auto">
                    <Link href="/contact">
                      <Button
                        className={`w-full h-12 rounded-full font-bold ${
                          tier.highlight
                            ? 'bg-accent hover:bg-accent/90 text-white border-none'
                            : 'bg-primary hover:bg-primary/90 text-white border-none'
                        }`}
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-3 font-medium">Not sure which plan is right for you?</p>
            <p className="text-sm text-gray-500 mb-8">
              Get in touch and we'll walk you through the full feature breakdown for each tier.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-10 h-12 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                Talk to our team
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
