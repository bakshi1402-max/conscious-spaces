"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/content";

const easing = [0.16, 1, 0.3, 1] as const;

function ShowcaseRow({
  project,
  imageRight,
}: {
  project: (typeof projects)[number];
  imageRight: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // The image is taller than its frame; it scrolls vertically through the
  // frame as the section passes — a parallax reveal of the photo.
  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 md:grid-cols-2 min-h-[90vh] border-t border-bark/10"
    >
      {/* Text panel */}
      <div
        className={`relative flex flex-col justify-between py-16 md:py-20 px-6 md:px-16 ${
          imageRight ? "md:order-1" : "md:order-2"
        }`}
      >
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: easing }}
          className="font-serif text-[14vw] md:text-[5.5vw] leading-[0.95] text-ink uppercase tracking-tight"
        >
          {project.category}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.1, ease: easing }}
          className="flex flex-col gap-5 max-w-md mt-12 md:mt-0"
        >
          <p className="eyebrow text-clay">{project.type}</p>
          <p className="text-bark leading-relaxed text-sm md:text-base">
            {project.excerpt}
          </p>
          <Link
            href={`/works/${project.slug}`}
            className="btn-pill border-ink text-ink w-fit mt-2"
          >
            <span>View Works</span>
          </Link>
        </motion.div>
      </div>

      {/* Image panel with vertical parallax */}
      <div
        className={`relative min-h-[50vh] md:min-h-full overflow-hidden bg-sand ${
          imageRight ? "md:order-2" : "md:order-1"
        }`}
      >
        <motion.div style={{ y: imageY }} className="absolute inset-x-0 -inset-y-[12%]">
          <div className="relative w-full h-full">
            <Image
              src={project.heroImage}
              alt={project.heroImageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ProjectShowcase() {
  const featured = projects.slice(0, 3);
  return (
    <section>
      {featured.map((project, i) => (
        <ShowcaseRow key={project.slug} project={project} imageRight={i % 2 === 0} />
      ))}
    </section>
  );
}
