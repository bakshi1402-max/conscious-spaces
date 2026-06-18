"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/content";

const easing = [0.16, 1, 0.3, 1] as const;

export function ProjectShowcase() {
  const featured = projects.slice(0, 3);

  return (
    <section>
      {featured.map((project, i) => {
        const imageRight = i % 2 === 0;
        return (
          <div
            key={project.slug}
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

            {/* Full-bleed image panel */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, ease: easing }}
              className={`relative min-h-[50vh] md:min-h-full overflow-hidden bg-sand group ${
                imageRight ? "md:order-2" : "md:order-1"
              }`}
            >
              <Image
                src={project.heroImage}
                alt={project.heroImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.05]"
              />
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
