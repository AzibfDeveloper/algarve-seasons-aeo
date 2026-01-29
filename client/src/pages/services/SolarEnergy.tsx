import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Sun, Battery, Coins, Zap, BarChart3, MapPin } from "lucide-react";
import SolarCalculator from "@/components/calculators/SolarCalculator";
import { Helmet } from "react-helmet-async";

export default function SolarEnergy() {
  return (
    <Layout>
      <Helmet>
        <title>Solar Energy Algarve | Solar Panels & Tesla Powerwall | Algarve Seasons</title>
        <meta name="description" content="Generate your own electricity with high-efficiency solar panels and battery storage in the Algarve. Tesla Powerwall Certified Installers offering ROI analysis." />
        <meta name="keywords" content="Solar Panels Algarve, Photovoltaic Systems Faro, Tesla Powerwall Portugal, Solar Battery Storage" />
        <link rel="canonical" href="https://algarveseasons.com/services/solar-energy" />
      </Helmet>
      {/* Hero Section - Sun Orange Theme */}
      <section className="relative min-h-[70vh] flex items-center bg-orange-50/50">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="solar-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="10" fill="currentColor" className="text-primary"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#solar-pattern)" />
          </svg>
        </div>

        <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
          <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              <Sun className="w-4 h-4" />
              Algarve Solar Specialists
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold leading-tight text-slate-900">
              Solar Energy <span className="text-primary">Systems & Battery Storage</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary pl-4">
              "Turn Algarve sunshine into free electricity. We design and install high-performance photovoltaic systems with Tesla Powerwall and Huawei battery storage for maximum energy independence and savings."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-primary/20">
                Get Free Solar Quote
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary font-bold h-14 px-8 text-lg hover:bg-primary/5">
                Calculate Savings
              </Button>
            </div>
          </div>

          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform rotate-3 scale-95 z-0"></div>
            <img 
              src="/images/service-solar-roof.jpg" 
              alt="Solar Panels on Algarve Villa Roof" 
              className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl z-10"
            />
            
            {/* Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-primary/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Battery className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Tesla Certified</p>
                  <p className="text-xs text-muted-foreground">Powerwall Installer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Solar & Calculator */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="max-w-2xl mb-12">
                <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Why Solar is a Smart Investment in the Algarve</h2>
                <p className="text-lg text-muted-foreground">
                  With over 300 days of sunshine per year, the Algarve is one of the best places in Europe for solar energy production.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                  <Coins className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-bold mb-2">Reduce Energy Bills</h3>
                  <p className="text-sm text-muted-foreground">
                    Cut your electricity costs by up to 70% by generating your own power for AC, pool heating, and appliances.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                  <Battery className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-bold mb-2">Energy Independence</h3>
                  <p className="text-sm text-muted-foreground">
                    Add a battery to store excess daytime energy for use at night, protecting you from rising grid prices.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                  <BarChart3 className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-bold mb-2">Government Incentives</h3>
                  <p className="text-sm text-muted-foreground">
                    Benefit from reduced VAT (6%) and potential Fundo Ambiental support (up to €7,500) for renewable upgrades.
                  </p>
                </div>
              </div>
            </div>

            {/* Calculator Widget */}
            <div className="lg:col-span-1 sticky top-24">
              <SolarCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-12 text-center">Our Solar Energy Solutions</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* PV Systems */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Sun className="w-6 h-6 text-primary" /> Photovoltaic Systems
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span><span className="font-bold">High-Efficiency Panels:</span> Tier-1 monocrystalline panels optimized for high heat performance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Smart Inverters:</span> Huawei and Fronius inverters with app monitoring.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Custom Design:</span> Roof-mounted, ground-mounted, or pergola integration options.</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">Request Solar Quote</Button>
            </div>

            {/* Battery Storage */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Battery className="w-6 h-6 text-primary" /> Battery Storage
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Tesla Powerwall:</span> 13.5kWh capacity, integrated backup, and sleek design.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Huawei Luna:</span> Modular battery system scalable from 5kWh to 30kWh.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span><span className="font-bold">Backup Power:</span> Keep essential lights and appliances running during grid outages.</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">Learn About Batteries</Button>
            </div>
          </div>
        </div>
      </section>

      {/* AEO FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Common Questions About Solar in Portugal</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold">What is the payback period for solar in the Algarve?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-orange-50 p-4 rounded-lg border-l-4 border-primary">
                  "Due to high electricity prices and excellent sun exposure, the typical payback period for a residential solar system in the Algarve is 3 to 5 years, offering an ROI of 15-20%."
                </p>
                <p>
                  This is significantly faster than in Northern Europe. After the payback period, the electricity you generate is essentially free for the remaining 20+ year lifespan of the panels.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold">Are there government incentives for solar panels in 2026?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-orange-50 p-4 rounded-lg border-l-4 border-primary">
                  "Yes. The Portuguese 'Fundo Ambiental' offers support up to €7,500 for renewable energy improvements, covering up to 85% of costs. Additionally, solar equipment is taxed at a reduced VAT rate of 6%."
                </p>
                <p>
                  Our team handles the paperwork guidance to help you maximize these benefits. Note that funds are limited and released in phases, so it's best to apply early.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-bold">Do I need a battery for my solar system?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4 font-medium text-slate-900 bg-orange-50 p-4 rounded-lg border-l-4 border-primary">
                  "While not mandatory, a battery is highly recommended for Algarve homes. It allows you to store excess daytime solar energy to power your AC and lights in the evening, increasing your self-consumption from ~30% to over 70%."
                </p>
                <p>
                  Without a battery, any excess energy you generate during the day is sent back to the grid (often for little to no payment). A battery ensures you use the power you produce.
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
                <MapPin className="w-4 h-4 text-primary" /> {city}
              </span>
            ))}
          </div>
          <div className="mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8">
              Get Your Free Quote Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
