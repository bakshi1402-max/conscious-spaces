"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { projects } from "@/data/content";

const easing = [0.16, 1, 0.3, 1] as const;

export function ProjectShowcase() {
  const featured = projects.slice(0, 3);

  return (
    <section>
      {featured.map((project, i) => (
        <div
          key={project.slug}
          className="container-edge py-24 md:py-36 border-t border-bark/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Text column */}
            <Reveal className={`flex flex-col gap-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <h3 className="font-serif text-display-md text-ink uppercase tracking-tight">
                {project.category}
              </h3>
              <p className="eyebrow text-clay">{project.type}</p>
              <p className="text-bark leading-relaxed text-base md:text-lg max-w-md">
                {project.excerpt}
              </p>
              <Link
                href={`/works/${project.slug}`}
                className="btn-pill border-ink text-ink w-fit mt-3"
              >
                <span>View Works</span>
              </Link>
            </Reveal>

            {/* Single tall image with parallax + zoom */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: easing }}
              className={`relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-sand group ${
                i % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              <Image
                src={project.heroImage}
                alt={project.heroImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1100ms] ease-editorial group-hover:scale-[1.05]"
              />
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}
