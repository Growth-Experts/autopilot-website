import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Logo from "@assets/Autopilot_logo_1767782180335.png";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Partners", href: "/partners" },
    { label: "Clients", href: "/clients" },
    { label: "Pricing", href: "/pricing" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
            <img src={Logo} alt="Autopilot" className="h-10 md:h-14 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === item.href
                  ? "text-primary font-bold"
                  : "text-gray-600"
              )}
            >
                {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/contact">
            <Button 
              className="bg-accent hover:bg-accent/90 text-white font-bold px-6"
              size="lg"
            >
              Book a Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-6 mt-10">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary block",
                      location === item.href
                        ? "text-primary font-bold"
                        : "text-gray-600"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                      {item.label}
                  </Link>
                ))}
                <Link href="/contact">
                  <Button className="bg-accent hover:bg-accent/90 text-white w-full">
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
