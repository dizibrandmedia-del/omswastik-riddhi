import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutDholera from "@/components/AboutDholera";
import WhyDholera from "@/components/WhyDholera";
import RiddhiProject from "@/components/RiddhiProject";
import GrowthDrivers from "@/components/GrowthDrivers";
import GlobalLeaders from "@/components/GlobalLeaders";
import LocationAdvantages from "@/components/LocationAdvantages";
import InternationalBenchmark from "@/components/InternationalBenchmark";
import DholeraSIR from "@/components/DholeraSIR";
import InvestmentSection from "@/components/InvestmentSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <AboutDholera />
        <WhyDholera />
        <RiddhiProject />
        <GrowthDrivers />
        <GlobalLeaders />
        <LocationAdvantages />
        <InternationalBenchmark />
        <DholeraSIR />
        <InvestmentSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
