import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoverageSection from "@/components/CoverageSection";
import ProblemSection from "@/components/ProblemSection";
import FeatureSection from "@/components/FeatureSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "var(--header-height)" }}>
        <Hero />
        <CoverageSection />
        <ProblemSection />
        <FeatureSection />
        <CaseStudiesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
