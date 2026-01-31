import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, Phone, Sun } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
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
            <a href="https://www.facebook.com/algarveseasons" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a>
            <a href="https://www.instagram.com/algarveseasons" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
            <div className="border-l border-slate-300 pl-4 ml-2">
              <LanguageSwitcher currentLang="en" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/images/logo.png" alt="Algarve Seasons Logo" className="h-16 w-auto object-contain" />
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
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-md shadow-md">
                Get Free Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="sr-only">
                <SheetTitle>Mobile Navigation Menu</SheetTitle>
                <SheetDescription>Access site sections and services</SheetDescription>
              </div>
              <nav className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <div className="text-lg font-medium hover:text-primary cursor-pointer">
                      {link.label}
                    </div>
                  </Link>
                ))}
                <div className="pt-4 border-t border-slate-100">
                  <LanguageSwitcher currentLang="en" />
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold mt-4">
                    Get Free Quote
                  </Button>
                </Link>
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
      <footer className="bg-slate-50 text-slate-600 py-12 border-t border-slate-200">
        <div className="container grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-display font-bold text-xl">
              <img src="/images/logo.png" alt="Algarve Seasons Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-500">
              The Algarve's All-In-One HVAC Solution Provider. Premium Daikin, Tesla, and Huawei partners.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-slate-900">Services</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/services/air-conditioning"><div className="hover:text-primary cursor-pointer">Air Conditioning</div></Link></li>
              <li><Link href="/services/solar-energy"><div className="hover:text-primary cursor-pointer">Solar Energy</div></Link></li>
              <li><Link href="/services/heat-pumps"><div className="hover:text-primary cursor-pointer">Heat Pumps</div></Link></li>
              <li><Link href="/services/maintenance"><div className="hover:text-primary cursor-pointer">Maintenance</div></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-slate-900">Service Areas</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/faro"><div className="hover:text-primary cursor-pointer transition-colors">Faro</div></Link></li>
              <li><Link href="/lagos"><div className="hover:text-primary cursor-pointer transition-colors">Lagos</div></Link></li>
              <li><Link href="/albufeira"><div className="hover:text-primary cursor-pointer transition-colors">Albufeira</div></Link></li>
              <li><Link href="/portimao"><div className="hover:text-primary cursor-pointer transition-colors">Portimão</div></Link></li>
              <li><Link href="/loule"><div className="hover:text-primary cursor-pointer transition-colors">Loulé</div></Link></li>
              <li><Link href="/silves"><div className="hover:text-primary cursor-pointer transition-colors">Silves</div></Link></li>
              <li><Link href="/tavira"><div className="hover:text-primary cursor-pointer transition-colors">Tavira</div></Link></li>
              <li><Link href="/olhao"><div className="hover:text-primary cursor-pointer transition-colors">Olhão</div></Link></li>
              <li><Link href="/sao-bras"><div className="hover:text-primary cursor-pointer transition-colors">São Brás</div></Link></li>
              <li><Link href="/lagoa"><div className="hover:text-primary cursor-pointer transition-colors">Lagoa</div></Link></li>
              <li><Link href="/carriacao"><div className="hover:text-primary cursor-pointer transition-colors">Carriacão</div></Link></li>
              <li><Link href="/monchique"><div className="hover:text-primary cursor-pointer transition-colors">Monchique</div></Link></li>
              <li><Link href="/aljezur"><div className="hover:text-primary cursor-pointer transition-colors">Aljezur</div></Link></li>
              <li><Link href="/vila-do-bispo"><div className="hover:text-primary cursor-pointer transition-colors">Vila do Bispo</div></Link></li>
              <li><Link href="/castro-marim"><div className="hover:text-primary cursor-pointer transition-colors">Castro Marim</div></Link></li>
              <li><Link href="/alcoutim"><div className="hover:text-primary cursor-pointer transition-colors">Alcoutim</div></Link></li>
            </ul>
            <div className="mt-6 pt-4 border-t border-slate-300">
              <Link href="/service-areas">
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm">
                  View All Service Areas →
                </button>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-slate-900">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>+351 910 675 168</li>
              <li>Dan@algarveseasons.com</li>
              <li>Mon-Sat: 9am - 6pm</li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-slate-200 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Algarve Seasons. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
