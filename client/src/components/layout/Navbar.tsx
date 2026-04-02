import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Logo from "@assets/Autopilot_logo_1767782180335.png";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/#products" },
    { label: "Clients", href: "/clients" },
    { label: "Partners", href: "/partners" },
    { label: "Pricing", href: "/pricing" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return true;
    }
    return false;
  };

  const handleNavClick = (href: string) => {
    if (href === "/#products") {
      if (location === "/") {
        scrollToProducts();
      } else {
        setLocation("/");
        // Retry scroll until element is available after navigation
        let attempts = 0;
        const tryScroll = () => {
          if (scrollToProducts() || attempts > 10) return;
          attempts++;
          setTimeout(tryScroll, 100);
        };
        setTimeout(tryScroll, 50);
      }
      return;
    }
    if (location === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => handleNavClick("/")} data-testid="link-nav-logo">
            <img src={Logo} alt="Autopilot" className="h-10 md:h-14 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href === "/#products" ? "/" : item.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary",
                item.href === "/#products"
                  ? "text-gray-600"
                  : location === item.href
                    ? "text-primary font-bold"
                    : "text-gray-600"
              )}
              onClick={(e) => {
                if (item.href === "/#products") {
                  e.preventDefault();
                }
                handleNavClick(item.href);
              }}
              data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
                {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Link href="https://autopilotworkflows.com/book-demo" data-testid="link-book-demo-navbar">
            <Button 
              className="bg-accent hover:bg-accent/90 text-white font-bold px-6"
              size="lg"
              data-testid="button-book-demo-navbar"
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
                    href={item.href === "/#products" ? "/" : item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary block",
                      item.href === "/#products"
                        ? "text-gray-600"
                        : location === item.href
                          ? "text-primary font-bold"
                          : "text-gray-600"
                    )}
                    onClick={(e) => {
                      if (item.href === "/#products") {
                        e.preventDefault();
                      }
                      handleNavClick(item.href);
                      setIsOpen(false);
                    }}
                    data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                      {item.label}
                  </Link>
                ))}
                <Link
                  href="https://autopilotworkflows.com/book-demo"
                  className="w-full"
                  data-testid="link-book-demo-navbar-mobile"
                >
                  <Button
                    className="bg-accent hover:bg-accent/90 text-white w-full"
                    data-testid="button-book-demo-navbar-mobile"
                  >
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
