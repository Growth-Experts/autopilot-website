import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, Shield, Users, FileText, UserCheck, Send, Layers, X, Mail, FileQuestion, AlertCircle, Check, GitBranch, FileCheck, LayoutDashboard, ShieldCheck, Handshake } from "lucide-react";
import LogoApprovals from "@assets/Autopilot_Logo_Approvals_-_Primary_1767782851207.png";
import LogoOnboarding from "@assets/Autopilot_Logo_Onboarding_-_Primary_1767782851208.png";
import LogoLawd from "@assets/lawd-logo_1767792280625.png";
import LogoSyntech from "@assets/Syntech-Logo_1767792280626.png";
import Logo3Way from "@assets/3way-logo_1767792280625.png";
import LogoBidvest from "@assets/bidvest-logo_1767792280625.png";
import LogoMetrofile from "@assets/metrofile-logo_1767792280626.png";
import LogoTongaat from "@assets/Tongaat-Huletts-Logo_1767792280626.png";
import LogoYMCA from "@assets/YMCA_Logo_1768585772781.jpg";
import LaptopImage from "@assets/app-screenshot_1767787178377.png";
import OnboardingScreenshot from "@assets/unnamed_(4)_1768585890405.png";
import ApprovalsScreenshot from "@assets/unnamed_(11)_1768586007598.png";
import OverviewImage from "@assets/app_screenshot_1767792973731.png";
import LeftScreenshot from "@assets/app-screenshot-left_1767793647658.png";
import { Link } from "wouter";
import { motion } from "framer-motion";

import app_screenshot__1_ from "@assets/app screenshot (1).png";

import app_screenshot__1__Background_Removed from "@assets/app screenshot (1) Background Removed.png";

import app_screenshot_left from "@assets/app-screenshot-left.png";
import AutopilotBackground from "@assets/autopilot-background_1767798365737.jpg";

import Autopilot_app_screenshot_in_laptop from "@assets/Autopilot_app_screenshot_in_laptop_(2)-Photoroom_1770272900072.png";
import MSPartnerBadge from "@assets/Autopilot_(2)_1770271633028.png";
import LogoCoPilot from "@assets/copilot_1768826460167.png";
import LogoTeams from "@assets/ms-teams_1768826460169.png";
import LogoOffice365 from "@assets/office-365_1768826460169.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-40 md:pb-40 bg-white overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
           {/* Grid Pattern */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Centered Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 z-10"
            >
              <h1 className="text-4xl md:text-6xl md:leading-[1.1] font-bold text-primary tracking-tight">
                Stop Chasing Email Threads. <br className="hidden md:block" />
                <span className="text-accent">Start Process Automation That Scales.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Autopilot replaces confusing emails, duplicate requests, and scattered internal tasks with one clear, guided workflow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Link href="/book-demo" data-testid="link-book-demo-hero">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8 text-lg w-full sm:w-auto"
                    data-testid="button-book-demo-hero"
                  >
                    Book a Demo
                  </Button>
                </Link>
                <a href="#products">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-primary text-primary hover:bg-primary/5 w-full sm:w-auto">
                    Explore Solutions
                  </Button>
                </a>
              </div>

              {/* Arcade Video Embed */}
              <div className="mt-16 mb-8 max-w-5xl mx-auto shadow-2xl rounded-lg overflow-hidden bg-gray-50">
                <div style={{ position: 'relative', paddingBottom: 'calc(48.75% + 41px)', height: 0, width: '100%' }}>
                  <iframe 
                    src="https://demo.arcade.software/oBSvKoVqjMGdDIh4vcSy?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" 
                    title="Submit a customer quote request and route it to the right owners" 
                    frameBorder="0" 
                    loading="lazy" 
                    allowFullScreen 
                    allow="clipboard-write" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }} 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Client Logos Section */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 font-medium mb-8 text-sm uppercase tracking-wider">
            Proudly powering process for these leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 transition-opacity duration-300">
             <img src={Logo3Way} alt="3Way" className="h-8 md:h-12 w-auto object-contain" />
             <img src={LogoBidvest} alt="Bidvest" className="h-8 md:h-10 w-auto object-contain" />
             <img src={LogoLawd} alt="LAWD" className="h-8 md:h-12 w-auto object-contain" />
             <img src={LogoMetrofile} alt="Metrofile" className="h-6 md:h-8 w-auto object-contain" />
             <img src={LogoSyntech} alt="Syntech" className="h-8 md:h-12 w-auto object-contain" />
             <img src={LogoTongaat} alt="Tongaat Hulett" className="h-8 md:h-12 w-auto object-contain" />
             <img src={LogoYMCA} alt="YMCA" className="h-8 md:h-12 w-auto object-contain" />
          </div>
        </div>
      </section>
      {/* Strategic Alliances Section (Removed) */}
      {/* Problem Statement */}
      <Section background="gray" className="pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Being Disorganized Looks Unprofessional</h2>
            <p className="text-lg text-gray-600 leading-relaxed">Unclear next steps and endless back-and-forth emails make your organization look hard to work with.
             
            The result? Poor first impressions, avoidable delays, and unnecessary risk.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            {/* The Manual Way (Problem) */}
            <div className="bg-white p-8 border border-red-100 rounded-none shadow-sm relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-400"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-500">
                  <X size={20} />
                </span>
                The Manual Way
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                  <span>Buried in endless email threads</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <FileQuestion className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                  <span>Incomplete or missing data</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <AlertCircle className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                  <span>No visibility on process status</span>
                </li>
              </ul>
            </div>

            {/* The Autopilot Way (Solution) */}
            <div className="bg-white p-8 border border-blue-100 rounded-none shadow-lg relative overflow-hidden transform md:scale-105 z-10 h-full">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-primary">
                  <Check size={20} />
                </span>
                The Autopilot Way
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <GitBranch className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>One streamlined, guided workflow</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <FileCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Clean, validated data capture</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <LayoutDashboard className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Real-time tracking & audit logs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 text-center">
            <p className="text-xl font-medium text-primary">
              Autopilot replaces fragmented communication with structured, auditable workflows that keep everyone aligned.
            </p>
          </div>
        </div>
      </Section>
      {/* Products Section */}
      <Section background="white" id="products" className="scroll-mt-24 pt-12 md:pt-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-600">Streamline your operations with our dedicated solutions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Autopilot Onboarding - Swapped to Accent/Orange */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <div className="h-3 bg-accent w-full"></div>
            <CardHeader className="pt-8 pb-4">
              <div className="mb-4 h-12 flex items-center justify-start">
                <img src={LogoOnboarding} alt="Autopilot Onboarding" className="h-full w-auto" />
              </div>
              
              <h3 className="text-3xl md:text-4xl text-accent font-bold mt-1">One Coordinated Onboarding Flow</h3>
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
              <a href="https://autopilot-onboarding.replit.app/" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                  Explore Onboarding <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardFooter>
          </Card>

          {/* Autopilot Approvals - Swapped to Primary/Blue */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <div className="h-3 w-full bg-[#3A82D3]"></div>
            <CardHeader className="pt-8 pb-4">
              <div className="mb-4 h-12 flex items-center justify-start">
                <img src={LogoApprovals} alt="Autopilot Approvals" className="h-full w-auto" />
              </div>

              <h3 className="text-3xl md:text-4xl text-primary font-bold mt-1">One Workflow for Internal Teams</h3>
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
              <a
                href="https://56cf1ef1-47a4-459b-acb5-bde375fe4bb0-00-1sla7650pccd5.kirk.replit.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                data-testid="link-explore-approvals"
              >
                <Button className="w-full bg-[#3A82D3] hover:bg-[#3A82D3]/90 text-white" data-testid="button-explore-approvals">
                  Explore Approvals <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </Section>
      {/* Strategic Alliances Section - Redesigned for Microsoft Partnership */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
              {/* Left Column: Text Content */}
              <div className="flex-1 space-y-6">
                 <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                   <ShieldCheck className="h-4 w-4" />
                   <span>Strategic Partnership</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                   Your Trusted <span className="text-[#00A4EF]">Microsoft Partner</span>
                 </h2>
                 <div className="space-y-4 text-lg text-gray-600">
                    <p>
                      For over a decade, we've built solutions that live where you work. Our deep partnership ensures Autopilot evolves alongside Microsoft's latest innovations.
                    </p>
                    <p>
                      We integrate directly into <strong className="text-gray-900">Microsoft Teams</strong> and <strong className="text-gray-900">Office 365</strong>, removing friction by bringing workflows to the tools your team uses every day.
                    </p>
                    <p>
                      With <strong className="text-gray-900">Microsoft CoPilot</strong>, we bring next-gen AI capabilities into your processes—automating decisions while keeping your data secure.
                    </p>
                 </div>
                 
                 <div className="pt-6">
                   <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Integrated with</p>
                   <div className="flex flex-wrap items-center gap-4">
                     <div className="bg-white px-6 py-3 rounded-none shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
                       <img src={LogoTeams} alt="Microsoft Teams" className="h-10 w-auto" />
                     </div>
                     <div className="bg-white px-6 py-3 rounded-none shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
                       <img src={LogoOffice365} alt="Office 365" className="h-8 w-auto" />
                     </div>
                     <div className="bg-white px-6 py-3 rounded-none shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
                       <img src={LogoCoPilot} alt="Microsoft CoPilot" className="h-8 w-auto" />
                     </div>
                   </div>
                 </div>
              </div>
              
              {/* Right Column: Badge Image */}
              <div className="flex-1 flex justify-center md:justify-end">
                 <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <img 
                      src={MSPartnerBadge} 
                      alt="Microsoft Solutions Partner Badge" 
                      className="relative w-full max-w-sm md:max-w-md h-auto object-contain drop-shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]" 
                    />
                 </div>
              </div>
            </div>
        </div>
      </section>
      {/* Features / Advantage */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Full Width Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={AutopilotBackground} 
            alt="Autopilot Advantage Background" 
            className="w-full h-full object-cover"
          />
          {/* Left-side overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Column - Now on the left */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">The Autopilot Advantage</h2>
                  <p className="text-xl text-accent font-medium">Made for People. Powered by Process. Enhanced by AI.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-none bg-blue-100 flex items-center justify-center text-primary font-bold">1</div>
                    <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg md:bg-transparent md:p-0 md:backdrop-blur-none">
                      <h4 className="text-xl font-bold mb-2">Seamless Coordination</h4>
                      <p className="text-gray-800 font-medium md:font-normal md:text-gray-600">Stop chasing emails. Connect internal teams and external stakeholders in one guided workflow that ensures accurate, complete data capture.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-none bg-blue-100 flex items-center justify-center text-primary font-bold">2</div>
                    <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg md:bg-transparent md:p-0 md:backdrop-blur-none">
                      <h4 className="text-xl font-bold mb-2">AI-Assisted Automation</h4>
                      <p className="text-gray-800 font-medium md:font-normal md:text-gray-600">Reduce manual effort with AI-powered document processing, validation, and routing - while keeping humans in control.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-none bg-blue-100 flex items-center justify-center text-primary font-bold">3</div>
                    <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg md:bg-transparent md:p-0 md:backdrop-blur-none">
                      <h4 className="text-xl font-bold mb-2">Bulletproof Compliance</h4>
                      <p className="text-gray-800 font-medium md:font-normal md:text-gray-600">Combine compliant e-signatures with tamper-evident storage and full audit trails for every workflow and document.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-none bg-blue-100 flex items-center justify-center text-primary font-bold">4</div>
                    <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg md:bg-transparent md:p-0 md:backdrop-blur-none">
                      <h4 className="text-xl font-bold mb-2">Effortless Management</h4>
                      <p className="text-gray-800 font-medium md:font-normal md:text-gray-600">Track progress in real time and see exactly who did what, when, and where - across every step of the process.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Empty column to push text to left and reveal background image on right */}
              <div className="hidden lg:block"></div>
            </div>
        </div>
      </section>
      {/* Stats/Results */}
      <Section background="blue" className="text-white">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Real Results. Auditable Clarity.</h2>
           <p className="text-blue-100 max-w-2xl mx-auto text-lg">Autopilot replaces guesswork with structure - cutting turnaround times while improving governance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-none border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/40 hover:-translate-y-1 hover:shadow-lg">
            <div className="h-12 rounded-none mb-6 flex items-center justify-center px-4 bg-[#fff]">
               <img src={LogoLawd} alt="LAWD" className="h-8 object-contain" />
            </div>
            <div className="text-4xl font-bold text-accent mb-2">50%</div>
            <h4 className="text-xl font-bold mb-2 text-white">Efficiency Gain</h4>
            <p className="text-blue-100">LAWD halved time spent managing onboarding, supporting weekly new hires without an internal HR or IT team.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-none border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/40 hover:-translate-y-1 hover:shadow-lg">
            <div className="h-12 rounded-none mb-6 flex items-center justify-center px-4 bg-[#fff]">
               <img src={LogoSyntech} alt="Syntech" className="h-8 object-contain" />
            </div>
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
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-10 text-lg shadow-lg hover:shadow-xl transition-all">
              Book a Demo
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
