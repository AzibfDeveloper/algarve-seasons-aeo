import LayoutPT from "@/components/LayoutPT";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wind, Sun, Flame, Check, Star, ArrowRight, Shield } from "lucide-react";
import { Link } from "wouter";

export default function HomePT() {
  return (
    <LayoutPT>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-50 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold tracking-wide uppercase">
              <Star className="w-4 h-4 fill-current" />
              #1 Especialista AVAC no Algarve
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-tight text-slate-900">
              Solução Climática <span className="text-primary">Tudo-em-Um</span> do Algarve
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              A Algarve Seasons fornece instalação premium de ar condicionado, sistemas de energia solar e bombas de calor para casas, moradias e empresas em Faro, Albufeira, Lagos e toda a região do Algarve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-primary/20">
                Pedir Orçamento Grátis
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary font-bold h-14 px-8 text-lg hover:bg-secondary/5">
                Ver Serviços
              </Button>
            </div>

            <div className="pt-8 border-t border-slate-200 flex items-center gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" /> Parceiro Daikin D1+
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" /> +200 Instalações
              </div>
            </div>
          </div>

          <div className="relative h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-slate-200 rounded-[2rem] transform rotate-3 scale-95 z-0"></div>
            <img 
              src="/images/hero-villa-solar.jpg" 
              alt="Moradia Moderna no Algarve com Painéis Solares" 
              className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl z-10"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs animate-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-forwards">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Qualidade Comprovada</p>
                  <p className="text-xs text-slate-500">200+ Instalações desde 2016</p>
                </div>
              </div>
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                ))}
                <div className="w-8 h-8 rounded-full bg-primary text-white text-xs flex items-center justify-center border-2 border-white font-bold">+200</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Soluções Completas de Climatização & Energia</h2>
            <p className="text-lg text-slate-600">
              Combinamos tecnologia de ponta com experiência local para oferecer conforto e eficiência energética durante todo o ano.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AC Card */}
            <Link href="/pt-pt/servicos/ar-condicionado">
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-slate-100 overflow-hidden h-full">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors z-10"></div>
                  <img src="/images/service-ac-interior.jpg" alt="Ar Condicionado" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#7ACCC8]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#7ACCC8] group-hover:text-white transition-colors">
                    <Wind className="w-6 h-6 text-[#7ACCC8] group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-secondary transition-colors">Ar Condicionado</h3>
                  <p className="text-slate-600 mb-6">
                    Sistemas Daikin premium para arrefecimento e aquecimento. Unidades murais, multi-split e VRV para moradias e comércio.
                  </p>
                  <div className="flex items-center text-secondary font-bold text-sm uppercase tracking-wide">
                    Saber Mais <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Solar Card */}
            <Link href="/pt-pt/servicos/energia-solar">
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-slate-100 overflow-hidden h-full">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10"></div>
                  <img src="/images/service-solar-roof.jpg" alt="Energia Solar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#FF9900]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF9900] group-hover:text-white transition-colors">
                    <Sun className="w-6 h-6 text-[#FF9900] group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">Energia Solar</h3>
                  <p className="text-slate-600 mb-6">
                    Reduza as suas faturas de eletricidade com painéis fotovoltaicos e baterias Tesla Powerwall. Incentivos do governo disponíveis.
                  </p>
                  <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wide">
                    Saber Mais <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Heat Pump Card */}
            <Link href="/pt-pt/servicos/bombas-calor">
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-slate-100 overflow-hidden h-full">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-accent/20 group-hover:bg-accent/10 transition-colors z-10"></div>
                  <img src="/images/service-heatpump-garden.jpg" alt="Bombas de Calor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#C02626]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C02626] group-hover:text-white transition-colors">
                    <Flame className="w-6 h-6 text-[#C02626] group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">Bombas de Calor</h3>
                  <p className="text-slate-600 mb-6">
                    Substitua a sua caldeira a gás por bombas de calor ar-água ultra-eficientes para piso radiante e águas quentes.
                  </p>
                  <div className="flex items-center text-accent font-bold text-sm uppercase tracking-wide">
                    Saber Mais <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust/About Section */}
      <section className="py-24 bg-slate-50">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl rounded-full"></div>
            <img src="/images/trust-technician.jpg" alt="Técnico Algarve Seasons" className="relative rounded-2xl shadow-2xl" />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold text-slate-900">
              Porquê Escolher a Algarve Seasons?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Parceiro Premium Daikin D1+</h3>
                  <p className="text-slate-600">A mais alta acreditação de qualidade e excelência de serviço em Portugal.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Sun className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Experiência Local</h3>
                  <p className="text-slate-600">Conhecimento profundo do clima algarvio e das necessidades específicas das propriedades locais.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Soluções Completas</h3>
                  <p className="text-slate-600">Design, instalação e manutenção de AC, solar e bombas de calor num só lugar.</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-slate-900 text-white px-8 py-6 text-lg hover:bg-slate-800">
              Saber Mais Sobre Nós
            </Button>
          </div>
        </div>
      </section>
    </LayoutPT>
  );
}
