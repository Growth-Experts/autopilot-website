import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Users, HelpCircle, Handshake } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Autopilot</h1>
          <p className="text-xl text-gray-600">
            We're Ready to Talk Process. Whether you need a full demonstration, technical assistance, or partnership information, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto items-start">
          {/* Left Column: Contact Info Blocks */}
          <div className="lg:col-span-4 space-y-6">
            {/* General Inquiries */}
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-none flex items-center justify-center text-primary mb-3">
                  <Users className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">General Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-gray-600">For general questions about the company, licensing, or corporate information.</p>
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-3 font-medium">
                    <Mail className="h-4 w-4 text-accent" />
                    <span>info@autopilot.co.za</span>
                  </div>
                  <div className="flex items-center gap-3 font-medium">
                    <Phone className="h-4 w-4 text-accent" />
                    <span>+27 (0) 11 123 4567</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Support */}
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-none flex items-center justify-center text-primary mb-3">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Technical Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-gray-600">If you are a current client and require technical assistance or support.</p>
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-3 font-medium">
                    <Mail className="h-4 w-4 text-accent" />
                    <span>support@autopilot.co.za</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Partnership */}
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-none flex items-center justify-center text-primary mb-3">
                  <Handshake className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Partnerships</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-gray-600">Interested in becoming an Implementation Partner?</p>
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-3 font-medium">
                    <Mail className="h-4 w-4 text-accent" />
                    <span>partners@autopilot.co.za</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 md:p-12 rounded-none shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Schedule Your Live Demo</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Work Email</label>
                  <Input type="email" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Name</label>
                  <Input placeholder="Acme Corp" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">How can we help?</label>
                  <Textarea placeholder="Tell us about your process challenges..." className="min-h-[150px]" />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white font-bold px-8">
                  Request Demo
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
