import { Hero } from "@/components/Hero";
import { StatementSection } from "@/components/StatementSection";
import { WorksReveal } from "@/components/WorksReveal";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { FAQSection } from "@/components/FAQSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatementSection />
      <WorksReveal />
      <ProjectShowcase />
      <FAQSection />
    </>
  );
}
