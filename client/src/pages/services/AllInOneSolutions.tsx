import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Sun, Wind, Leaf } from "lucide-react";
import { useLocation } from "wouter";

export default function AllInOneSolutions() {
  const [, setLocation] = useLocation();

  const bundles = [
    {
      id: 1,
      name: "Cool & Comfortable",
      description: "Premium air conditioning for year-round comfort",
      price: "From €2,500",
      features: [
        "Daikin premium wall-mounted AC unit",
        "Professional installation",
        "5-year warranty",
        "24/7 emergency support",
        "Annual maintenance included"
      ],
      icon: Wind,
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: 2,
      name: "Solar Power",
      description: "Harness the Algarve sun for free electricity",
      price: "From €4,500",
      features: [
        "5-10kW solar panel system",
        "Huawei inverter",
        "Professional installation",
        "25-year panel warranty",
        "Monitoring app included"
      ],
      icon: Sun,
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      id: 3,
      name: "Heat Pump Heating",
      description: "Efficient heating and cooling in one system",
      price: "From €3,500",
      features: [
        "Air-to-water heat pump",
        "Replaces gas boiler",
        "Heating & cooling",
        "Energy-efficient operation",
        "Smart thermostat included"
      ],
      icon: Leaf,
      color: "bg-green-50 border-green-200"
    },
    {
      id: 4,
      name: "Complete Energy Solution",
      description: "AC + Solar + Heat Pump + Battery Storage",
      price: "From €12,500",
      features: [
        "Daikin AC system",
        "10kW solar array",
        "Heat pump heating",
        "Tesla Powerwall battery",
        "Smart home integration",
        "Lifetime support"
      ],
      icon: Zap,
      color: "bg-purple-50 border-purple-200",
      featured: true
    }
  ];

  const handleQuoteClick = () => {
    setLocation('/contact');
  };

  return (
    <Layout>
      <Helmet>
        <title>All-In-One Solutions | Bundle Packages | Algarve Seasons</title>
        <meta name="description" content="Discover our all-in-one HVAC and renewable energy bundle packages. AC + Solar + Heat Pumps + Battery storage for complete climate control." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-display font-bold text-secondary">
            All-In-One Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete climate control and renewable energy packages designed for Algarve homes. From cooling and heating to solar power and battery storage.
          </p>
        </div>
      </section>

      {/* Bundle Packages */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {bundles.map((bundle) => {
              const IconComponent = bundle.icon;
              return (
                <Card 
                  key={bundle.id} 
                  className={`relative overflow-hidden transition-all hover:shadow-xl ${bundle.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-primary' : ''} ${bundle.color}`}
                >
                  {bundle.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{bundle.name}</CardTitle>
                    <CardDescription className="text-base">{bundle.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-3xl font-bold text-primary">{bundle.price}</div>
                    
                    <ul className="space-y-3">
                      {bundle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      onClick={handleQuoteClick}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12"
                    >
                      Get Free Quote
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Bundles */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold text-secondary mb-12 text-center">
            Why Choose Our Bundle Packages?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Integrated System Design",
                description: "All components work together seamlessly for maximum efficiency and savings."
              },
              {
                title: "Better Pricing",
                description: "Bundle packages offer 15-20% savings compared to purchasing systems separately."
              },
              {
                title: "Single Point of Support",
                description: "One company handles installation, maintenance, and support for all systems."
              },
              {
                title: "Optimized Performance",
                description: "Our experts design systems that complement each other for peak efficiency."
              },
              {
                title: "Flexible Financing",
                description: "Spread costs over time with our flexible payment plans and financing options."
              },
              {
                title: "Future-Proof Investment",
                description: "Scalable systems that grow with your needs. Add solar or storage later."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="font-bold text-lg text-secondary">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-display font-bold">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-white/90">
            Get a free, no-obligation quote for your custom all-in-one solution. Our experts will assess your property and recommend the perfect package.
          </p>
          <Button 
            onClick={handleQuoteClick}
            className="bg-white text-primary hover:bg-white/90 font-bold h-12 px-8 text-lg"
          >
            Get Free Quote Today
          </Button>
        </div>
      </section>
    </Layout>
  );
}
