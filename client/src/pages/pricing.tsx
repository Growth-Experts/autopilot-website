import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";

export default function Pricing() {
  const [currency, setCurrency] = useState<'USD' | 'ZAR'>('USD');
  const [locationChecked, setLocationChecked] = useState(false);

  useEffect(() => {
    // Only ask for location once per session/mount
    if (locationChecked) return;

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Approximate bounding box for South Africa
          // Latitude: -35 to -22
          // Longitude: 16 to 33
          const isSouthAfrica = 
            latitude >= -35 && latitude <= -22 &&
            longitude >= 16 && longitude <= 33;
            
          if (isSouthAfrica) {
            setCurrency('ZAR');
          }
          setLocationChecked(true);
        },
        (error) => {
          console.log("Location access denied or error:", error);
          setLocationChecked(true);
        }
      );
    }
  }, [locationChecked]);

  const prices = {
    base: { USD: "420", ZAR: "7 500" },
    tier1: { USD: "1.00", ZAR: "19" },
    tier2: { USD: "0.75", ZAR: "14" },
    tier3: { USD: "0.50", ZAR: "9" },
    esign: { USD: "2.20", ZAR: "40" },
    bank: { USD: "1.20", ZAR: "22" },
    cipc: { USD: "1.20", ZAR: "22" },
    aiDoc: { USD: "0.03", ZAR: "0,50" },
    aiCustom: { USD: "0.07", ZAR: "1,25" }
  };

  const symbol = currency === 'USD' ? '$' : 'R';

  return (
    <div className="flex flex-col">
      <Section background="blue" className="text-white pt-24 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Licensing Model: Simple, Scalable, Predictable</h1>
          <p className="text-xl text-blue-100 mb-8">
            At Autopilot, we believe pricing should reflect the value you receive. Our licensing is based on the actual number of workflows or processes initiated per month.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-none border border-white/20 flex items-center gap-3">
              <Check className="h-5 w-5 text-accent" />
              <span>Unlimited Internal Users</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-none border border-white/20 flex items-center gap-3">
              <Check className="h-5 w-5 text-accent" />
              <span>Unlimited Forms & Processes</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-none border border-white/20 flex items-center gap-3">
              <Check className="h-5 w-5 text-accent" />
              <span>Unlimited External Users</span>
            </div>
          </div>
        </div>
      </Section>

      <Section background="white" className="-mt-20 pt-0">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Main Pricing Table */}
          <Card className="shadow-xl border-t-4 border-t-accent overflow-hidden">
            <CardHeader className="text-center bg-gray-50 border-b border-gray-100 py-8">
              <CardTitle className="text-2xl font-bold text-gray-800">Workflow Volume Fees (Monthly License)</CardTitle>
              <CardDescription>Costs scale predictably as your organization grows.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-[50%] px-8 py-4 text-base font-bold text-gray-900 bg-gray-50/50">Usage Tier</TableHead>
                    <TableHead className="px-8 py-4 text-base font-bold text-gray-900 bg-gray-50/50">Fee Structure ({currency})</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="px-8 py-6 font-medium text-gray-700">Base License Fee</TableCell>
                    <TableCell className="px-8 py-6">
                      <div className="flex items-baseline gap-1">
                         <span className="text-sm text-gray-500 font-medium">From</span>
                         <span className="text-xl font-bold text-primary">{symbol} {prices.base[currency]}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Includes the first 1–100 workflows initiated per month</p>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="px-8 py-6 font-medium text-gray-700">Tier 1 (101–1,000 workflows p/mo.)</TableCell>
                    <TableCell className="px-8 py-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-gray-500 font-medium">From</span>
                        <span className="text-xl font-bold text-primary">{symbol} {prices.tier1[currency]}</span> <span className="text-gray-500">per workflow</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="px-8 py-6 font-medium text-gray-700">Tier 2 (1,001–5,000 workflows p/mo.)</TableCell>
                    <TableCell className="px-8 py-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-gray-500 font-medium">From</span>
                        <span className="text-xl font-bold text-primary">{symbol} {prices.tier2[currency]}</span> <span className="text-gray-500">per workflow</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="px-8 py-6 font-medium text-gray-700">Tier 3 (5,001+ workflows p/mo.)</TableCell>
                    <TableCell className="px-8 py-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-gray-500 font-medium">From</span>
                        <span className="text-xl font-bold text-primary">{symbol} {prices.tier3[currency]}</span> <span className="text-gray-500">per workflow</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="px-8 py-6 font-medium text-gray-700">Enterprise / Large Organizations</TableCell>
                    <TableCell className="px-8 py-6">
                      <span className="text-xl font-bold text-primary">Price on request</span>
                      <p className="text-sm text-gray-500 mt-1">For organizations with high volume requirements</p>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* 3rd Party Fees */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Integrated 3rd Party Service Fees</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              If your solution requires advanced verification or e-signature services, these are integrated seamlessly and billed per transaction.
            </p>
            
            <Card className="shadow-lg border-gray-100">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="w-[50%] px-8 py-4 text-base font-bold text-gray-900 bg-gray-50/50">Service</TableHead>
                      <TableHead className="px-8 py-4 text-base font-bold text-gray-900 bg-gray-50/50">Fee ({currency})</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="px-8 py-4 font-medium">e-signatures (DocuSign)</TableCell>
                      <TableCell className="px-8 py-4">{symbol} {prices.esign[currency]} per transaction</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="px-8 py-4 font-medium">Bank Account Verification</TableCell>
                      <TableCell className="px-8 py-4">{symbol} {prices.bank[currency]} per transaction</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="px-8 py-4 font-medium">CIPC Integration</TableCell>
                      <TableCell className="px-8 py-4">{symbol} {prices.cipc[currency]} per transaction</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="px-8 py-4 font-medium">AI Document Processing (Invoices/Receipts)</TableCell>
                      <TableCell className="px-8 py-4">{symbol} {prices.aiDoc[currency]} per page</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="px-8 py-4 font-medium">AI Document Processing (Custom)</TableCell>
                      <TableCell className="px-8 py-4">{symbol} {prices.aiCustom[currency]} per page</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-none p-10 text-center border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Ready to Build Your Custom Workflow?</h2>
            <p className="text-gray-600 mb-8">
              The best way to understand your investment is to see the platform in action and discuss your specific workflow needs.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-10">
              Request a Custom Quote
            </Button>
          </div>

        </div>
      </Section>
    </div>
  );
}
