import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, Shield, Users, FileText, UserCheck, Send, Layers } from "lucide-react";
import LogoApprovals from "@assets/Autopilot_Logo_Approvals_-_Primary_1767782851207.png";
import LogoOnboarding from "@assets/Autopilot_Logo_Onboarding_-_Primary_1767782851208.png";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-40 md:pb-56 bg-white overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
           {/* Grid Pattern */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h1 className="text-4xl md:text-6xl md:leading-[1.1] font-bold text-primary tracking-tight">
              Stop Chasing Email Threads. <br className="hidden md:block" />
              <span className="text-accent">Start Process Automation That Scales.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Autopilot replaces confusing emails, duplicate requests, and scattered internal tasks with one clear, guided workflow.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8 text-lg w-full sm:w-auto">
                Book a Live Demo
              </Button>
              <Link href="/products">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-primary text-primary hover:bg-primary/5 w-full sm:w-auto">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Being Disorganized Looks Unprofessional</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Unclear next steps and endless back-and-forth emails make your organization look hard to work with. The result? Poor first impressions, avoidable delays, and unnecessary risk.
          </p>
          <div className="pt-8">
            <p className="text-xl font-medium text-primary">
              Autopilot replaces fragmented communication with structured, auditable workflows that keep everyone aligned.
            </p>
          </div>
        </div>
      </Section>

      {/* Products Section */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-600">Streamline your operations with our dedicated solutions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Autopilot Onboarding - Swapped to Accent/Orange */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <div className="h-3 bg-accent w-full"></div>
            <CardHeader className="pt-8 pb-4">
              <div className="mb-4 h-12 flex items-center justify-start">
                <img src={LogoOnboarding} alt="Autopilot Onboarding" className="h-full w-auto" />
              </div>
              <h3 className="text-lg text-accent font-medium mt-1">One Coordinated Onboarding Flow</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 min-h-[80px]">
                Connect external parties with internal teams through a single, step-by-step digital process that captures clean, validated data from the start.
              </p>
              <div className="bg-gray-50 p-6 rounded-none mb-6 border border-gray-100">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Eliminate data entry errors</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Guided external forms</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Automated task assignment</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="pb-8">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                Explore Onboarding <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Autopilot Approvals - Swapped to Primary/Blue */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <div className="h-3 w-full bg-[#3A82D3]"></div>
            <CardHeader className="pt-8 pb-4">
              <div className="mb-4 h-12 flex items-center justify-start">
                <img src={LogoApprovals} alt="Autopilot Approvals" className="h-full w-auto" />
              </div>
              <h3 className="text-lg text-primary font-medium mt-1">One Workflow for All Internal Teams</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 min-h-[80px]">
                Replace spreadsheets, inbox approvals, and mental checklists with parallel, auditable approval workflows that scale across teams.
              </p>
               <div className="bg-gray-50 p-6 rounded-none mb-6 border border-gray-100">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Full audit trails</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Multi-level approvals</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Automated reminders</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="pb-8">
              <Link href="/products" className="w-full">
                <Button className="w-full bg-[#3A82D3] hover:bg-[#3A82D3]/90 text-white">
                  Explore Approvals <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* Features / Advantage */}
      <Section background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Autopilot Advantage</h2>
              <p className="text-xl text-accent font-medium">Made for People. Powered by Process. Enhanced by AI.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-none bg-blue-100 flex items-center justify-center text-primary font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Seamless Coordination</h4>
                  <p className="text-gray-600">Stop chasing emails. Connect internal teams and external stakeholders in one guided workflow that ensures accurate, complete data capture.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-none bg-blue-100 flex items-center justify-center text-primary font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">AI-Assisted Automation</h4>
                  <p className="text-gray-600">Reduce manual effort with AI-powered document processing, validation, and routing - while keeping humans in control.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-none bg-blue-100 flex items-center justify-center text-primary font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Bulletproof Compliance</h4>
                  <p className="text-gray-600">Combine compliant e-signatures with tamper-evident storage and full audit trails for every workflow and document.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-none bg-blue-100 flex items-center justify-center text-primary font-bold">4</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Effortless Management</h4>
                  <p className="text-gray-600">Track progress in real time and see exactly who did what, when, and where - across every step of the process.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-none p-8 md:p-12 border border-gray-200 shadow-inner">
             {/* Abstract representation of the process */}
             <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-none shadow-sm flex items-center justify-between opacity-50">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-none bg-gray-200"></div>
                     <div className="h-3 w-32 bg-gray-200 rounded-none"></div>
                   </div>
                   <div className="h-3 w-16 bg-green-100 rounded-none text-xs text-green-600 flex items-center justify-center">Completed</div>
                </div>
                <div className="bg-white p-4 rounded-none shadow-lg flex items-center justify-between border-l-4 border-accent transform scale-105">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-none bg-accent/20 text-accent flex items-center justify-center font-bold">AI</div>
                     <div>
                       <div className="h-3 w-40 bg-gray-800 rounded-none mb-2"></div>
                       <div className="h-2 w-24 bg-gray-400 rounded-none"></div>
                     </div>
                   </div>
                   <Button size="sm" className="bg-accent text-white h-8">Review</Button>
                </div>
                <div className="bg-gray-50 p-4 rounded-none shadow-sm flex items-center justify-between opacity-50">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-none bg-gray-200"></div>
                     <div className="h-3 w-32 bg-gray-200 rounded-none"></div>
                   </div>
                   <div className="h-3 w-16 bg-gray-100 rounded-none text-xs flex items-center justify-center">Pending</div>
                </div>
             </div>
             <div className="mt-8 text-center text-sm text-gray-500 font-medium">
               Real-time visibility into every step
             </div>
          </div>
        </div>
      </Section>

      {/* Stats/Results */}
      <Section background="blue" className="text-white">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Real Results. Auditable Clarity.</h2>
           <p className="text-blue-100 max-w-2xl mx-auto text-lg">Autopilot replaces guesswork with structure - cutting turnaround times while improving governance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-none border border-white/20">
            <div className="text-4xl font-bold text-accent mb-2">50%</div>
            <h4 className="text-xl font-bold mb-2 text-white">Efficiency Gain</h4>
            <p className="text-blue-100">LAWD halved time spent managing onboarding, supporting weekly new hires without an internal HR or IT team.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-none border border-white/20">
            <div className="text-4xl font-bold text-accent mb-2">10x</div>
            <h4 className="text-xl font-bold mb-2 text-white">Faster Approvals</h4>
            <p className="text-blue-100">Syntech cut reseller approval time from 10 days to 1 day by pushing clean, validated data directly into CRM systems.</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/clients">
             <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary transition-colors">
               Read more case studies
             </Button>
          </Link>
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section background="white">
        <div className="bg-gray-50 rounded-none p-12 md:p-20 text-center max-w-5xl mx-auto border border-gray-100 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Processes?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Replace scattered emails and loose tasks with one clean, auditable workflow. Most workflows go live in days, not months.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-10 text-lg shadow-lg hover:shadow-xl transition-all">
            Book a Live Demo with Autopilot
          </Button>
        </div>
      </Section>
    </div>
  );
}
