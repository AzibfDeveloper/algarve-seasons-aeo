import { Star, Shield, MapPin, Zap } from "lucide-react";

/**
 * TrustBadges Component
 * 
 * Displays trust indicators including:
 * - Daikin D1+ Premium Partner certification
 * - 200+ installations since 2016
 * - 5-star Google reviews rating
 * - Serving 16 Algarve municipalities
 * 
 * Positioned to build credibility and encourage conversions.
 */
export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      label: "Daikin D1+ Partner",
      value: "Premium Certified",
      color: "from-blue-50 to-blue-100",
      textColor: "text-blue-700",
      iconColor: "text-blue-600",
    },
    {
      icon: Zap,
      label: "Installations",
      value: "200+ Since 2016",
      color: "from-orange-50 to-orange-100",
      textColor: "text-orange-700",
      iconColor: "text-orange-600",
    },
    {
      icon: Star,
      label: "Google Reviews",
      value: "5-Star Rated",
      color: "from-yellow-50 to-yellow-100",
      textColor: "text-yellow-700",
      iconColor: "text-yellow-600",
    },
    {
      icon: MapPin,
      label: "Service Coverage",
      value: "16 Municipalities",
      color: "from-green-50 to-green-100",
      textColor: "text-green-700",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-slate-50 to-slate-100">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Trusted by Algarve Homeowners
          </h2>
          <p className="text-lg text-slate-600">
            Industry-leading certifications and proven track record
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {badges.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${badge.color} rounded-xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-all`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center ${badge.iconColor}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${badge.textColor}`}>
                      {badge.label}
                    </p>
                    <p className="text-lg font-bold text-slate-900 mt-1">
                      {badge.value}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Daikin Certification Banner */}
        <div className="mt-12 bg-white rounded-xl p-8 border-2 border-blue-200 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Official Daikin D1+ Premium Partner
                </h3>
              </div>
              <p className="text-slate-600 max-w-2xl">
                We are certified by Daikin, the world's leading HVAC manufacturer, to provide premium installation, maintenance, and support services. This certification ensures you receive the highest quality air conditioning solutions with full warranty coverage.
              </p>
            </div>
            <div className="flex-shrink-0 bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <div className="text-center">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                  Certified Partner
                </p>
                <p className="text-2xl font-bold text-blue-900">Daikin</p>
                <p className="text-xs text-blue-600 mt-1">D1+ Premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
