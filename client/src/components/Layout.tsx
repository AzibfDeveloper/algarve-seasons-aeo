import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Sun } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services/air-conditioning", label: "Air Conditioning" },
    { href: "/services/solar-energy", label: "Solar Energy" },
    { href: "/services/heat-pumps", label: "Heat Pumps" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      {/* Top Bar - Contact Info */}
      <div className="bg-secondary text-secondary-foreground py-2 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +351 910 675 168
            </span>
            <span>Serving the entire Algarve region</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 font-display font-bold text-2xl tracking-tight cursor-pointer">
              <Sun className="w-8 h-8 text-primary" />
              <span>Algarve<span className="text-primary">Seasons</span></span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}>
                  {link.label}
                </div>
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-md shadow-md">
              Get Free Quote
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <div className="text-lg font-medium hover:text-primary cursor-pointer">
                      {link.label}
                    </div>
                  </Link>
                ))}
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold mt-4">
                  Get Free Quote
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 border-t border-white/10">
        <div className="container grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-display font-bold text-xl">
              <Sun className="w-6 h-6 text-primary" />
              <span>Algarve<span className="text-primary">Seasons</span></span>
            </div>
            <p className="text-sm text-gray-400">
              The Algarve's All-In-One HVAC Solution Provider. Premium Daikin, Tesla, and Huawei partners.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services/air-conditioning"><div className="hover:text-primary cursor-pointer">Air Conditioning</div></Link></li>
              <li><Link href="/services/solar-energy"><div className="hover:text-primary cursor-pointer">Solar Energy</div></Link></li>
              <li><Link href="/services/heat-pumps"><div className="hover:text-primary cursor-pointer">Heat Pumps</div></Link></li>
              <li><Link href="/services/maintenance"><div className="hover:text-primary cursor-pointer">Maintenance</div></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Service Areas</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Faro</li>
              <li>Lagos</li>
              <li>Albufeira</li>
              <li>Vilamoura</li>
              <li>Portimão</li>
              <li>Tavira</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+351 910 675 168</li>
              <li>Dan@algarveseasons.com</li>
              <li>Mon-Sat: 9am - 6pm</li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Algarve Seasons. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
