import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Lightbulb, Zap, Leaf, Sun, Wind } from "lucide-react";

export default function ResourcesGuides() {
  const guides = [
    {
      id: 1,
      title: "Complete Guide to Air Conditioning in the Algarve",
      description: "Everything you need to know about choosing, installing, and maintaining AC systems for your Algarve home.",
      category: "Air Conditioning",
      icon: Wind,
      topics: ["System types", "Energy efficiency", "Maintenance tips", "Cost estimates"]
    },
    {
      id: 2,
      title: "Solar Energy Buyer's Guide",
      description: "Learn how solar panels work, calculate your potential savings, and understand the installation process.",
      category: "Solar Energy",
      icon: Sun,
      topics: ["Solar basics", "ROI calculations", "Incentives & subsidies", "Battery storage"]
    },
    {
      id: 3,
      title: "Heat Pump Heating Systems Explained",
      description: "Discover how heat pumps provide efficient heating and cooling, and why they're perfect for Algarve homes.",
      category: "Heat Pumps",
      icon: Leaf,
      topics: ["How heat pumps work", "Air-to-water systems", "Efficiency ratings", "Cost savings"]
    },
    {
      id: 4,
      title: "Energy Efficiency Tips for Algarve Homes",
      description: "Practical tips to reduce your energy consumption and lower your utility bills year-round.",
      category: "General",
      icon: Lightbulb,
      topics: ["Insulation", "Smart thermostats", "Usage patterns", "Seasonal optimization"]
    },
    {
      id: 5,
      title: "Renewable Energy Incentives in Portugal",
      description: "Understand available government incentives, tax credits, and financing options for renewable energy systems.",
      category: "General",
      icon: Zap,
      topics: ["Government programs", "Tax benefits", "Financing options", "Application process"]
    },
    {
      id: 6,
      title: "Maintenance & Warranty Guide",
      description: "Keep your systems running smoothly with our comprehensive maintenance schedules and warranty information.",
      category: "Maintenance",
      icon: BookOpen,
      topics: ["Service schedules", "DIY maintenance", "Warranty coverage", "Emergency support"]
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Resources & Guides | Algarve Seasons</title>
        <meta name="description" content="Free guides and resources about air conditioning, solar energy, heat pumps, and energy efficiency for Algarve homes." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-display font-bold text-secondary">
            Resources & Guides
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Free educational content to help you make informed decisions about your home's climate and energy systems.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => {
              const IconComponent = guide.icon;
              return (
                <Card key={guide.id} className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="inline-block">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {guide.category}
                      </span>
                    </div>
                    <CardTitle className="mt-4">{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-slate-500 uppercase">Topics Covered:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {guide.topics.map((topic, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="w-full mt-6 py-2 px-4 bg-primary/10 hover:bg-primary/20 text-primary font-semibold rounded-lg transition-colors">
                      Read Guide →
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold text-secondary mb-12 text-center">
            Quick Answers
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "How much can I save with solar panels in the Algarve?",
                a: "Most Algarve homeowners save €800-1,500 per year on electricity with a typical 5-10kW solar system. Payback period is typically 5-7 years."
              },
              {
                q: "What's the best time to install AC in the Algarve?",
                a: "Spring (March-May) is ideal for AC installation, as it allows testing before summer heat arrives. However, we can install year-round."
              },
              {
                q: "Are heat pumps suitable for Algarve's climate?",
                a: "Yes! Heat pumps are perfect for the Algarve. They provide efficient cooling in summer and heating in winter, with minimal energy consumption."
              },
              {
                q: "What maintenance do my systems need?",
                a: "AC systems need annual servicing, solar panels need occasional cleaning, and heat pumps require annual maintenance. We offer maintenance packages."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-lg text-secondary mb-2">{item.q}</h3>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-display font-bold">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-white/90">
            Contact our experts for personalized advice about your specific situation.
          </p>
          <a href="/contact" className="inline-block bg-white text-primary hover:bg-white/90 font-bold py-3 px-8 rounded-lg transition-colors">
            Get Free Consultation
          </a>
        </div>
      </section>
    </Layout>
  );
}
