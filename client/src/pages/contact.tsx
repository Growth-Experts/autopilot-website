import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Users, HelpCircle, Handshake } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Autopilot</h1>
          <p className="text-xl text-gray-600">
            We're Ready to Talk Process. Whether you need a full demonstration, technical assistance, or partnership information, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* General Inquiries */}
          <Card className="border-gray-100 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-none flex items-center justify-center text-primary mb-4">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle>General Inquiries</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">For general questions about the company, licensing, or corporate information.</p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-3 text-sm font-medium">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>info@autopilot.co.za</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>+27 (0) 11 123 4567</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Support */}
          <Card className="border-gray-100 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-none flex items-center justify-center text-primary mb-4">
                <HelpCircle className="h-6 w-6" />
              </div>
              <CardTitle>Technical Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">If you are a current client and require technical assistance or support for an existing workflow.</p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-3 text-sm font-medium">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>support@autopilot.co.za</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Partnership */}
          <Card className="border-gray-100 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-none flex items-center justify-center text-primary mb-4">
                <Handshake className="h-6 w-6" />
              </div>
              <CardTitle>Partnership Opportunities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Interested in becoming an Implementation Partner?</p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-3 text-sm font-medium">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>partners@autopilot.co.za</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact Form */}
      <Section background="gray">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-none shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Schedule Your Live Demo</h2>
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
              <Textarea placeholder="Tell us about your process challenges..." className="min-h-[100px]" />
            </div>

            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white font-bold">
              Request Demo
            </Button>
          </form>
        </div>
      </Section>
    </div>
  );
}
