import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/feature";
import Process from "@/components/process";
import AgentSection from "@/components/agentSection";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import FeaturedProperties from "@/components/featuredProperties";



export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <AgentSection />
        <CTA />
        <FeaturedProperties />
      </main>
      <Footer />
    </>
  );
}