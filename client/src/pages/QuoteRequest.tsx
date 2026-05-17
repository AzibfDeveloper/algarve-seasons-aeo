import QuoteRequestForm from "@/components/QuoteRequestForm";
import Layout from "@/components/Layout";

export default function QuoteRequest() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Your Free Quote</h1>
          <p className="text-lg text-gray-600">
            Tell us about your property and we'll provide a detailed, no-obligation quote for your HVAC, solar, or heat pump needs.
          </p>
        </div>

        <QuoteRequestForm />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">24h</div>
            <p className="text-gray-600">Response Time</p>
            <p className="text-sm text-gray-500 mt-1">We'll contact you within 24 hours</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">Free</div>
            <p className="text-gray-600">No Obligation</p>
            <p className="text-sm text-gray-500 mt-1">Completely free, no hidden charges</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">Expert</div>
            <p className="text-gray-600">Professional Team</p>
            <p className="text-sm text-gray-500 mt-1">Certified Daikin & Tesla partners</p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
