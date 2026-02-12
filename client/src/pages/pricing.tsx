import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Pricing() {
  const tiers = [
    { range: "101 – 1,000", price: "$1.00" },
    { range: "1,001 – 5,000", price: "$0.70" },
    { range: "5,001+", price: "$0.60" },
  ];

  return (
    <div className="flex flex-col">
      <Section background="blue" className="text-white pt-24 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Monthly Usage Fees
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            One simple base fee. Pay per workflow as you scale.
          </p>
        </div>
      </Section>

      <Section background="white" className="-mt-24 pt-0">
        <div className="max-w-3xl mx-auto">
          {/* Base License */}
          <Card className="border-none shadow-xl rounded-none overflow-visible mb-8">
            <CardHeader className="pb-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Base License</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-gray-900">$500</span>
                <span className="text-gray-500 font-medium text-lg">/ month</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Includes 1 – 100 workflows initiated per month.
              </p>
            </CardContent>
          </Card>

          {/* Volume Tiers */}
          <Card className="border-none shadow-xl rounded-none overflow-visible">
            <CardHeader className="pb-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Above Base Volume</p>
              <p className="text-gray-600 text-sm">
                Per workflow initiated, based on total monthly volume.
              </p>
            </CardHeader>
            <CardContent>
              <div className="divide-y divide-gray-100">
                {tiers.map((tier, i) => (
                  <div key={i} className="flex items-center justify-between py-5">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Tier {i + 1}</p>
                      <p className="text-sm text-gray-500">{tier.range} workflows</p>
                    </div>
                    <span className="text-2xl font-extrabold text-gray-900">{tier.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-3 font-medium">Need a custom quote?</p>
            <p className="text-sm text-gray-500 mb-8">
              Get in touch and we'll tailor a plan to your workflow volume.
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
