import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GeoLandingTemplate from "@/components/GeoLandingTemplate";

export default function AljeZurLanding() {
  const serviceAreas = [
    "Aljezur City Center",
    "Praia da Arrifana",
    "Praia de Monte Clérigo",
    "Bordeira",
    "Carrapateira",
    "Rogil",
  ];

  return (
    <>
      <Helmet>
        <title>Air Conditioning & Solar in Aljezur | Algarve Seasons</title>
        <meta
          name="description"
          content="Premium HVAC and solar solutions in Aljezur, Algarve. Daikin installations, solar panels, heat pumps, and Tesla Powerwall. Serving Aljezur since 2016."
        />
        <meta name="keywords" content="air conditioning Aljezur, solar energy Aljezur, heat pumps Aljezur, HVAC Aljezur" />
      </Helmet>
      <Layout>
        <GeoLandingTemplate
          municipality="Aljezur"
          description="Algarve Seasons is the leading HVAC and renewable energy provider in Aljezur. We specialize in Daikin air conditioning installations, solar energy systems, heat pumps, and Tesla Powerwall battery storage. Serving Aljezur and surrounding areas since 2016."
          serviceAreas={serviceAreas}
        />
      </Layout>
    </>
  );
}
