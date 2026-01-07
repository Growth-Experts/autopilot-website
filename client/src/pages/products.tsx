import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Products() {
  return (
    <div className="flex flex-col">
      <Section background="gray" className="py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-gray-600">
            Two powerful solutions designed to bring clarity and control to your most critical business processes.
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="space-y-24">
          {/* Autopilot Onboarding */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-100 text-primary font-bold rounded-full text-sm mb-2">External + Internal</div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Autopilot Onboarding</h2>
              <h3 className="text-xl text-accent font-medium">One Coordinated Onboarding Flow</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Connect external parties with internal teams through a single, step-by-step digital process that captures clean, validated data from the start.
              </p>
              <div className="pt-4">
                <Button className="bg-accent hover:bg-accent/90 text-white font-bold px-8">
                  Explore Onboarding
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <Card className="shadow-lg border-gray-100">
                <CardHeader className="bg-gray-50 border-b border-gray-100">
                  <CardTitle>Feature Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Feature</TableHead>
                        <TableHead>Benefit</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Guided Data Capture</TableCell>
                        <TableCell>Walks external users (clients, new hires) through a simple, error-checked form.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Automated Routing</TableCell>
                        <TableCell>Instantly notifies the right internal team members when action is required.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Document Collection</TableCell>
                        <TableCell>Securely collects, validates, and stores required documents automatically.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Status Visibility</TableCell>
                        <TableCell>Real-time dashboards showing exactly where every onboarding process stands.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="border-t border-gray-100"></div>

          {/* Autopilot Approvals */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 lg:order-last">
              <div className="inline-block px-3 py-1 bg-orange-100 text-accent font-bold rounded-full text-sm mb-2">Internal Teams</div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Autopilot Approvals</h2>
              <h3 className="text-xl text-accent font-medium">One Workflow for All Internal Teams</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Replace spreadsheets, inbox approvals, and mental checklists with parallel, auditable approval workflows that scale across teams.
              </p>
              <div className="pt-4">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8">
                  Explore Approvals
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <Card className="shadow-lg border-gray-100">
                <CardHeader className="bg-gray-50 border-b border-gray-100">
                  <CardTitle>Feature Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Feature</TableHead>
                        <TableHead>Benefit</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Parallel Approvals</TableCell>
                        <TableCell>Route requests to multiple departments (Finance, Legal, IT) simultaneously.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Audit Trails</TableCell>
                        <TableCell>Every decision, comment, and timestamp is recorded for total accountability.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Smart Deadlines</TableCell>
                        <TableCell>Automated reminders and escalations ensure approvals don't get stuck.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Centralized Dashboard</TableCell>
                        <TableCell>One view for all pending approvals, eliminating the "check your email" loop.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
