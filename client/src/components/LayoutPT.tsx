import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function LayoutPT({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navLinks = [
    { href: "/pt-pt", label: "Início" },
    { href: "/pt-pt/servicos/ar-condicionado", label: "Ar Condicionado" },
    { href: "/pt-pt/servicos/energia-solar", label: "Energia Solar" },
    { href: "/pt-pt/servicos/bombas-calor", label: "Bombas de Calor" },
    { href: "/pt-pt/sobre", label: "Sobre Nós" },
    { href: "/pt-pt/contacto", label: "Contacto" },
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
            <span>Servindo toda a região do Algarve</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <Link href="/"><span className="cursor-pointer font-bold ml-4">🇬🇧 EN</span></Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/pt-pt">
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
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-md shadow-md">
              Pedir Orçamento
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
                <Link href="/"><div className="text-lg font-bold hover:text-primary cursor-pointer">🇬🇧 English Version</div></Link>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold mt-4">
                  Pedir Orçamento
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
      <footer className="bg-slate-50 text-slate-600 py-12 border-t border-slate-200">
        <div className="container grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-display font-bold text-xl">
              <img src="/images/logo.png" alt="Algarve Seasons Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-500">
              O fornecedor de soluções AVAC "Tudo-em-Um" do Algarve. Parceiros Premium Daikin, Tesla e Huawei.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-slate-900">Serviços</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/pt-pt/servicos/ar-condicionado"><div className="hover:text-primary cursor-pointer">Ar Condicionado</div></Link></li>
              <li><Link href="/pt-pt/servicos/energia-solar"><div className="hover:text-primary cursor-pointer">Energia Solar</div></Link></li>
              <li><Link href="/pt-pt/servicos/bombas-calor"><div className="hover:text-primary cursor-pointer">Bombas de Calor</div></Link></li>
              <li><Link href="/pt-pt/servicos/manutencao"><div className="hover:text-primary cursor-pointer">Manutenção</div></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-slate-900">Áreas de Serviço</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>Faro</li>
              <li>Lagos</li>
              <li>Albufeira</li>
              <li>Vilamoura</li>
              <li>Portimão</li>
              <li>Tavira</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-slate-900">Contacto</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>+351 910 675 168</li>
              <li>Dan@algarveseasons.com</li>
              <li>Seg-Sáb: 9h - 18h</li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-slate-200 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Algarve Seasons. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
