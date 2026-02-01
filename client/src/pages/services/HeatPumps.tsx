import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Flame, Zap, Droplets, Gauge, MapPin, ArrowRight } from "lucide-react";

export default function HeatPumps() {
  return (
    <Layout>
      {/* Hero Section - Leaf Red Theme */}
      <section className="relative min-h-[70vh] flex items-center bg-red-50/50">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="heat-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0C31 0 40 9 40 20C40 31 31 40 20 40C9 40 0 31 0 20C0 9 9 0 20 0Z" fill="currentColor" className="text-accent"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#heat-pattern)" />
          </svg>
        </div>

        <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wide uppercase">
              <Flame className="w-4 h-4" />
              Efficient Heating & Cooling
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold leading-tight text-slate-900">
              Heat Pumps <span className="text-accent">Heating & Cooling</span> Solutions
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-accent pl-4">
              "Replace your gas boiler with an eco-friendly air-to-water heat pump. Enjoy year-round comfort with a single system that provides efficient underfloor heating, domestic hot water, and summer cooling."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/contact" className="inline-flex items-center justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-accent/20">
                  Get Free Heat Pump Quote
                </Button>
              </a>
              <a href="/faq" className="inline-flex items-center justify-center">
                <Button size="lg" variant="outline" className="border-2 border-accent text-accent font-bold h-14 px-8 text-lg hover:bg-accent/5">
                  How It Works
                </Button>
              </a>
            </div>
          </div>

          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute inset-0 bg-accent/10 rounded-[2rem] transform rotate-3 scale-95 z-0"></div>
            <img 
              src="/images/service-heatpump-garden.jpg" 
              alt="Daikin Altherma Heat Pump Outdoor Unit" 
              className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl z-10"
            />
            
            {/* Trust Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-accent/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">A+++ Efficiency</p>
                  <p className="text-xs text-muted-foreground">300-400% Efficient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Heat Pumps */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Why Choose a Heat Pump in the Algarve?</h2>
            <p className="text-lg text-muted-foreground">
              Heat pumps are the future of home comfort, offering superior efficiency compared to traditional gas or electric boilers. Combine heat pumps with <a href="/services/solar-energy" className="text-accent font-semibold hover:underline">solar energy systems</a> and <a href="/services/air-conditioning" className="text-accent font-semibold hover:underline">air conditioning</a> for <a href="/service-areas" className="text-accent font-semibold hover:underline">all-in-one climate solutions</a> that maximize comfort and savings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <Gauge className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Unmatched Efficiency</h3>
              <p className="text-muted-foreground">
                For every 1kW of electricity used, a heat pump generates 3-4kW of heat energy (COP 3-4), drastically cutting bills.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <Droplets className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">All-In-One System</h3>
              <p className="text-muted-foreground">
                One system handles your underfloor heating, radiators, domestic hot water, and even air conditioning in summer.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <Zap className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Solar Compatible</h3>
              <p className="text-muted-foreground">
                Ideally paired with solar panels. Use your free solar electricity to run the heat pump for virtually zero-cost heating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-12 text-center">Our Heat Pump Solutions</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Air-to-Water */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Droplets className="w-6 h-6 text-accent" /> Air-to-Water Systems
              </h3>
              <p className="text-muted-foreground mb-6">
                Perfect for renovations and new builds. Connects to underfloor heating, radiators, and hot water tanks.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span><span className="font-bold">Daikin Altherma 3:</span> High-temperature output (up to 65°C), ideal for replacing boilers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span><span className="font-bold">Integrated Tank:</span> Compact indoor units with built-in stainless steel hot water tanks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span><span className="font-bold">Smart Control:</span> Manage heating and hot water schedules via smartphone app.</span>
                </li>
              </ul>
              <a href="/contact" className="block">
                <Button className="w-full bg-accent hover:bg-accent/90 text-white">Request Heat Pump Quote</Button>
              </a>
            </div>

            {/* Pool Heating */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Flame className="w-6 h-6 text-accent" /> Pool Heating
              </h3>
              <p className="text-muted-foreground mb-6">
                Extend your swimming season by months with a dedicated pool heat pump.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span><span className="font-bold">Titanium Heat Exchangers:</span> Corrosion-resistant design for saltwater and chlorine pools.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span><span className="font-bold">Quiet Operation:</span> Low noise levels suitable for residential neighborhoods.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span><span className="font-bold">Inverter Technology:</span> Adjusts power output to maintain temperature efficiently.</span>
                </li>
              </ul>
              <a href="/contact" className="block">
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/5">View Pool Solutions</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AEO FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Common Questions About Heat Pumps</h2>
          <p className="text-center text-muted-foreground mb-8">For comprehensive answers, <a href="/faq" className="text-accent font-semibold hover:underline">see our full FAQ section</a> covering heat pump installation, efficiency, and warranty.</p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold">Is a heat pump suitable for an older house?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-red-50 p-4 rounded-lg border-l-4 border-accent">
                  "Yes. High-temperature heat pumps like the Daikin Altherma 3 HT are designed specifically for older properties. They can heat water up to 70°C, making them compatible with existing cast-iron radiators without needing to replace the piping."
                </p>
                <p>
                  However, improving insulation is always recommended to maximize efficiency and reduce the size of the unit needed.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold">How much space does a heat pump need?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-red-50 p-4 rounded-lg border-l-4 border-accent">
                  "An air-to-water heat pump system consists of an outdoor unit (similar size to a large AC unit) and an indoor unit. The indoor unit is typically the size of a fridge-freezer (60x60cm footprint) if it includes an integrated hot water tank."
                </p>
                <p>
                  If you have limited indoor space, we can install a 'monobloc' system where all components are outside, saving valuable interior space.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-bold">Can a heat pump cool my house in summer?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-red-50 p-4 rounded-lg border-l-4 border-accent">
                  "Yes, if you have underfloor heating or fan coil units. The heat pump can run in reverse to circulate cool water through the floor or fan coils, gently lowering the indoor temperature."
                </p>
                <p>
                  Note that cooling via underfloor heating is limited by the dew point (to prevent condensation on the floor), so it provides 'comfort cooling' rather than the intense cold air of a traditional AC unit.
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
            {[
              { name: 'Faro', href: '/faro' },
              { name: 'Albufeira', href: '/albufeira' },
              { name: 'Lagos', href: '/lagos' },
              { name: 'Portimão', href: '/portimao' },
              { name: 'Loulé', href: '/loule' },
              { name: 'Tavira', href: '/tavira' },
              { name: 'Olhão', href: '/olhao' },
              { name: 'Silves', href: '/silves' },
              { name: 'Lagoa', href: '/lagoa' }
            ].map((city) => (
              <a key={city.name} href={city.href} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                <MapPin className="w-4 h-4 text-accent" /> {city.name}
              </a>
            ))}
          </div>
          <div className="mt-12">
            <a href="/contact" className="inline-block">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-8">
                Get Your Free Quote Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
