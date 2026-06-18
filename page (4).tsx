import { Hero } from "@/components/Hero";
import { StatementSection } from "@/components/StatementSection";
import { GalleryMarquee } from "@/components/GalleryMarquee";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { FAQSection } from "@/components/FAQSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatementSection />
      <GalleryMarquee />
      <ProjectShowcase />
      <FAQSection />
    </>
  );
}
