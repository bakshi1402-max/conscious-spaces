import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual gallery of interiors, materials, and details from the Conscious Spaces portfolio.",
};

const images = projects.flatMap((p) => p.galleryImages);

// Staggered editorial layout: each image gets a column span, aspect, and vertical offset
const layout = [
  { col: "md:col-span-5", aspect: "aspect-[3/4]", offset: "md:mt-0" },
  { col: "md:col-span-4 md:col-start-8", aspect: "aspect-square", offset: "md:mt-24" },
  { col: "md:col-span-4 md:col-start-2", aspect: "aspect-[4/5]", offset: "md:mt-12" },
  { col: "md:col-span-5 md:col-start-7", aspect: "aspect-[4/3]", offset: "md:-mt-10" },
  { col: "md:col-span-4", aspect: "aspect-[4/5]", offset: "md:mt-16" },
  { col: "md:col-span-5 md:col-start-7", aspect: "aspect-[3/4]", offset: "md:mt-8" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" subtitle="Materials & details" />
      <section className="pb-28 md:pb-40">
        <div className="container-edge grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-6">
          {images.map((img, i) => {
            const l = layout[i % layout.length];
            return (
              <Reveal
                key={i}
                delay={(i % 3) * 0.05}
                className={`${l.col} ${l.offset}`}
              >
                <div className={`relative ${l.aspect} overflow-hidden bg-sand group`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover transition-transform duration-[1000ms] ease-editorial group-hover:scale-105"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
