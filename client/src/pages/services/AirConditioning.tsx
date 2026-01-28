import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Thermometer, Wind, Zap, Settings, Shield, MapPin } from "lucide-react";

export default function AirConditioning() {
  return (
    <Layout>
      {/* Hero Section - Ice Blue Theme */}
      <section className="relative min-h-[70vh] flex items-center bg-blue-50/50">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="ac-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0L40 20L20 40L0 20Z" fill="currentColor" className="text-secondary"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#ac-pattern)" />
          </svg>
        </div>

        <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase">
              <Wind className="w-4 h-4" />
              Premium Cooling & Heating
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold leading-tight text-slate-900">
              Air Conditioning <span className="text-secondary">Installation & Repair</span> in the Algarve
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-secondary pl-4">
              "Algarve Seasons installs and repairs **Daikin premium air conditioning systems** for villas, apartments, and businesses across the Algarve. Our services include wall-mounted units, multi-room systems, and emergency same-day repairs designed for the Algarve's hot summers and mild winters."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-secondary/20">
                Get Free AC Quote
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary font-bold h-14 px-8 text-lg hover:bg-secondary/5">
                Emergency Repair: Call Now
              </Button>
            </div>
          </div>

          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute inset-0 bg-secondary/10 rounded-[2rem] transform -rotate-3 scale-95 z-0"></div>
            <img 
              src="/images/service-ac-interior.jpg" 
              alt="Daikin Air Conditioning Installation in Algarve Villa" 
              className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl z-10"
            />
            
            {/* Trust Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-secondary/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Daikin D1+ Partner</p>
                  <p className="text-xs text-muted-foreground">Highest Accreditation in Portugal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AC Essential */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Why Air Conditioning is Essential in the Algarve</h2>
            <p className="text-lg text-muted-foreground">
              With summer peaks reaching 40°C and mild but damp winters, modern AC is your year-round climate solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <Thermometer className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">Year-Round Comfort</h3>
              <p className="text-muted-foreground">
                Stay cool during the intense Algarve summer heat and efficiently warm your home during winter evenings.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <Zap className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">High Efficiency</h3>
              <p className="text-muted-foreground">
                Modern inverter units are A+++ rated, costing significantly less to run than traditional electric heaters.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <Shield className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">Healthier Air</h3>
              <p className="text-muted-foreground">
                Advanced filtration systems remove dust, allergens, and humidity, preventing mold in coastal properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-12 text-center">Our Air Conditioning Services</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Installation */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Settings className="w-6 h-6 text-secondary" /> Installation
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>**Wall-mounted units:** Daikin Perfera, Emura, and Stylish ranges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>**Multi-room systems:** One outdoor unit connecting up to 5 indoor units.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>**VRV systems:** High-capacity solutions for large villas and commercial spaces.</span>
                </li>
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Request Installation Quote</Button>
            </div>

            {/* Repair & Maintenance */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-secondary" /> Repair & Maintenance
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>**Emergency Repair:** Same-day response for breakdowns across the Algarve.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>**Annual Servicing:** Deep cleaning, gas checks, and performance testing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>**Rental Packages:** Maintenance plans specifically for holiday rental properties.</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/5">Schedule Maintenance</Button>
            </div>
          </div>
        </div>
      </section>

      {/* AEO FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Common Questions About AC in the Algarve</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold">What size AC do I need for my Algarve villa?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border-l-4 border-secondary">
                  "AC capacity depends on room size and sun exposure. A typical 3-bedroom Algarve villa (150-200m²) usually requires 9-12kW total capacity, often split across 3-4 indoor units."
                </p>
                <p>
                  It's crucial to get a professional load calculation. Undersized units run constantly, driving up bills, while oversized units cycle on/off too frequently, reducing lifespan. We provide free site surveys to determine the exact BTU requirements for each room.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold">Can air conditioning heat my home in winter?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border-l-4 border-secondary">
                  "Yes. Modern Daikin AC units are air-to-air heat pumps that provide highly efficient heating. They are 3-4 times more efficient than traditional electric heaters, making them perfect for Algarve winters."
                </p>
                <p>
                  With the "reverse cycle" technology, the unit extracts heat from the outside air (even when it's cold) and pumps it inside. This is the most cost-effective way to heat Algarve homes that don't have gas central heating.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-bold">How much does AC installation cost in the Algarve?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-blue-50 p-4 rounded-lg border-l-4 border-secondary">
                  "Installation typically ranges from €1,200–€2,000 for a single wall-mounted unit, and €4,000–€8,000+ for multi-room systems (3-5 units), depending on the property layout and brand selected."
                </p>
                <p>
                  Factors influencing cost include the distance between indoor and outdoor units, the need for scaffolding, and whether piping needs to be chased into walls. We provide transparent, itemized quotes with no hidden fees.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold mb-8">Serving All 16 Algarve Municipalities</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Faro', 'Albufeira', 'Lagos', 'Portimão', 'Vilamoura', 'Loulé', 'Tavira', 'Olhão', 'Silves', 'Lagoa'].map((city) => (
              <span key={city} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors cursor-default">
                <MapPin className="w-4 h-4 text-secondary" /> {city}
              </span>
            ))}
          </div>
          <div className="mt-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8">
              Get Your Free Quote Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
