import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { MapPin, ChevronRight } from "lucide-react";
import { getAllMunicipalities, getMunicipalitiesByRegion } from "@/lib/municipalityAdjacency";

/**
 * Service Areas Directory Page
 * 
 * Showcases all 16 Algarve municipalities with organized sections
 * by geographic region. Encourages users to explore geo-targeted pages.
 * 
 * SEO Benefits:
 * - Comprehensive hub page for local search
 * - Internal linking to all geo pages
 * - Region-based organization improves topical relevance
 */

export default function ServiceAreas() {
  const allMunicipalities = getAllMunicipalities();
  const westernRegion = getMunicipalitiesByRegion("western");
  const centralWestRegion = getMunicipalitiesByRegion("central-west");
  const centralRegion = getMunicipalitiesByRegion("central");
  const centralEastRegion = getMunicipalitiesByRegion("central-east");
  const easternRegion = getMunicipalitiesByRegion("eastern");

  const regions = [
    { name: "Western Algarve", municipalities: westernRegion, color: "from-purple-50 to-purple-100" },
    { name: "Central-West Algarve", municipalities: centralWestRegion, color: "from-blue-50 to-blue-100" },
    { name: "Central Algarve", municipalities: centralRegion, color: "from-green-50 to-green-100" },
    { name: "Central-East Algarve", municipalities: centralEastRegion, color: "from-yellow-50 to-yellow-100" },
    { name: "Eastern Algarve", municipalities: easternRegion, color: "from-orange-50 to-orange-100" },
  ];

  return (
    <>
      <Helmet>
        <title>Service Areas | Algarve Seasons - All 16 Municipalities</title>
        <meta
          name="description"
          content="Explore all 16 Algarve municipalities served by Algarve Seasons. Premium HVAC, solar energy, and heat pump solutions across Faro, Lagos, Albufeira, and more."
        />
        <meta name="keywords" content="Algarve service areas, municipalities, HVAC Algarve, solar energy Algarve, heat pumps" />
      </Helmet>
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
            <div className="container max-w-6xl">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                  <MapPin className="w-4 h-4" />
                  Complete Coverage
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                  Serving All 16 Algarve Municipalities
                </h1>
                <p className="text-lg text-slate-700 max-w-2xl">
                  Algarve Seasons provides premium HVAC, solar energy, and heat pump solutions across the entire Algarve region. 
                  Find your municipality below and discover our services in your area.
                </p>
              </div>
            </div>
          </section>

          {/* Regions Overview */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container max-w-6xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-12">Explore by Region</h2>

              {regions.map((region, idx) => (
                <div key={idx} className="mb-16">
                  <div className={`bg-gradient-to-r ${region.color} rounded-lg p-8 mb-6`}>
                    <h3 className="text-2xl font-bold text-slate-900">{region.name}</h3>
                    <p className="text-slate-600 mt-2">
                      {region.municipalities.length} municipalities with dedicated HVAC and solar solutions
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {region.municipalities.map((municipality) => (
                      <Link key={municipality.slug} href={`/${municipality.slug}`}>
                        <div className="group p-6 bg-white rounded-lg border border-slate-200 hover:border-primary hover:shadow-lg transition-all cursor-pointer">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">
                                {municipality.name}
                              </h4>
                              <p className="text-sm text-slate-500 mt-2">
                                HVAC • Solar • Heat Pumps
                              </p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors transform group-hover:translate-x-1 flex-shrink-0" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* All Municipalities Grid */}
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="container max-w-6xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-12">All Municipalities</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {allMunicipalities.map((municipality) => (
                  <Link key={municipality.slug} href={`/${municipality.slug}`}>
                    <div className="group p-4 bg-white rounded-lg border border-slate-200 hover:border-primary hover:shadow-md transition-all cursor-pointer text-center">
                      <h4 className="font-semibold text-slate-900 group-hover:text-primary transition-colors">
                        {municipality.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2">View Services →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Algarve Seasons */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container max-w-6xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-12">Why Algarve Seasons?</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">Complete Coverage</h3>
                  <p className="text-slate-600">
                    Serving all 16 Algarve municipalities with consistent, premium service quality.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">✓</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">Certified Partners</h3>
                  <p className="text-slate-600">
                    Official Daikin D1+ Partner, Tesla Powerwall certified, and Huawei authorized installer.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">★</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">5-Star Rated</h3>
                  <p className="text-slate-600">
                    200+ installations since 2016 with consistent 5-star reviews from satisfied customers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
            <div className="container max-w-6xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Upgrade Your Climate?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free, no-obligation quote for air conditioning, solar, heat pumps, or battery storage in your municipality.
              </p>
              <Link href="/contact">
                <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-slate-100 transition-colors">
                  Request Free Quote
                </button>
              </Link>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
