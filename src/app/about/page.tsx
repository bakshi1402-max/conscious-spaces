import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Conscious Spaces is an interior design studio that begins every project by listening — to light, to habit, and to how a space will truly be lived in.",
};

const values = [
  {
    title: "Listen first",
    body: "Before a single line is drawn, we spend time understanding how a space will be used, who will use it, and the quiet rhythms of daily life it needs to hold.",
  },
  {
    title: "Restraint over excess",
    body: "We add nothing that doesn't earn its place. A restrained palette of materials, allowed to age well, outlasts any trend.",
  },
  {
    title: "Light as material",
    body: "Natural light is the most generous material a space can have. We design around it — how it enters, moves, and softens through the day.",
  },
  {
    title: "Built to last",
    body: "Honest materials, careful detailing, and craft that ages gracefully. We design interiors meant to be lived in for decades, not seasons.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="A studio for slow living" subtitle="About" />

      <section className="pb-20 md:pb-28">
        <div className="container-edge grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-serif text-2xl md:text-display-md leading-snug text-ink">
                We design interiors by listening first — to rhythm, to habit, and
                to the quiet emotional life of a space. Then we translate that into
                material, light, and detail.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:pt-3">
            <Reveal delay={0.12}>
              <p className="text-bark leading-relaxed">
                Conscious Spaces is a multidisciplinary interior design studio
                working across residential, hospitality, and wellness projects.
                Our work is unified not by a single look, but by a way of working:
                slow, considered, and rooted in how people actually live.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal className="container-edge">
        <div className="relative aspect-[16/9] overflow-hidden bg-sand">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop"
            alt="Studio interior with natural materials and soft light"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <section className="py-24 md:py-36">
        <div className="container-edge">
          <Reveal className="mb-14 md:mb-20">
            <span className="eyebrow text-clay">How we work</span>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 2) * 0.1}>
                <div className="border-t border-bark/15 pt-6">
                  <h3 className="font-serif text-2xl md:text-3xl mb-4">
                    {value.title}
                  </h3>
                  <p className="text-bark leading-relaxed max-w-md">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
