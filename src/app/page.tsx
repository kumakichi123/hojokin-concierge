import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FeatureSection from "@/components/FeatureSection";
import DemoPreviewSection from "@/components/DemoPreviewSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="landing-page">
        <Hero />
        <Reveal delayMs={40} variant="up">
          <ProblemSection />
        </Reveal>
        <Reveal delayMs={60} variant="right">
          <FeatureSection />
        </Reveal>
        <Reveal delayMs={60} variant="up">
          <DemoPreviewSection />
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
