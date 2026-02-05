import { Link } from "wouter";
import Logo from "@assets/Autopilot_logo_1767782180335.png";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="col-span-1 md:col-span-4 lg:col-span-4">
            <img src={Logo} alt="Autopilot" className="h-11 w-auto mb-6 brightness-0 invert" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Autopilot replaces confusing emails, duplicate requests, and scattered internal tasks with one clear, guided workflow.
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-2 lg:col-start-9">
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/about"><a className="hover:text-white transition-colors">About Us</a></Link></li>
              <li><Link href="/partners"><a className="hover:text-white transition-colors">Partners</a></Link></li>
              <li><Link href="/clients"><a className="hover:text-white transition-colors">Clients</a></Link></li>
              <li><Link href="/pricing"><a className="hover:text-white transition-colors">Pricing</a></Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-3 lg:col-start-11 lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <Link href="/book-demo" data-testid="link-book-demo-footer">
                  <a className="hover:text-white transition-colors">Book a Demo</a>
                </Link>
              </li>
              
              <li className="pt-4 flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@autopilot.co.za" className="hover:text-white transition-colors">info@autopilot.co.za</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+27111234567" className="hover:text-white transition-colors">+27 (0) 11 123 4567</a>
              </li>
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
