import { Link } from "wouter";
import Logo from "@assets/Autopilot_logo_1767782180335.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <img src={Logo} alt="Autopilot" className="h-11 w-auto mb-6 brightness-0 invert" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Autopilot replaces confusing emails, duplicate requests, and scattered internal tasks with one clear, guided workflow.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/about"><a className="hover:text-white transition-colors">About Us</a></Link></li>
              <li><Link href="/partners"><a className="hover:text-white transition-colors">Partners</a></Link></li>
              <li><Link href="/clients"><a className="hover:text-white transition-colors">Clients</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Products</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/products"><a className="hover:text-white transition-colors">Onboarding</a></Link></li>
              <li><Link href="/products"><a className="hover:text-white transition-colors">Approvals</a></Link></li>
              <li><Link href="/pricing"><a className="hover:text-white transition-colors">Pricing</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/contact"><a className="hover:text-white transition-colors">Get in Touch</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-white transition-colors">Book a Demo</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-white transition-colors">Support</a></Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Autopilot. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
