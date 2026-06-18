import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WorksGrid } from "@/components/WorksGrid";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Selected interior design projects by Conscious Spaces — residential, hospitality, and wellness spaces designed around light and material.",
};

export default function WorksPage() {
  return (
    <>
      <PageHeader title="Works" subtitle="Selected projects" />
      <section className="pb-28 md:pb-40">
        <WorksGrid projects={projects} />
      </section>
    </>
  );
}
