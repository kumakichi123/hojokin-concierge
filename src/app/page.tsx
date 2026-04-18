import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FeatureSection from "@/components/FeatureSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "var(--header-height)" }}>
        <Hero />
        <Reveal delayMs={50} variant="left">
          <ProblemSection />
        </Reveal>
        <Reveal delayMs={60} variant="right">
          <FeatureSection />
        </Reveal>
        <Reveal delayMs={70} variant="up">
          <CaseStudiesSection />
        </Reveal>
        <Reveal delayMs={50} variant="scale">
          <CtaSection />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
