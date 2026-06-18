"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/content";

const easing = [0.16, 1, 0.3, 1] as const;

export function WorksGrid({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => {
    const set = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...set];
  }, [projects]);

  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active, projects]
  );

  return (
    <div>
      {/* Filter bar */}
      <div className="container-edge flex flex-wrap gap-x-8 gap-y-3 border-b border-bark/15 pb-6 mb-12 md:mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`eyebrow transition-colors duration-300 ${
              active === cat ? "text-ink" : "text-stone hover:text-bark"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="container-edge">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14 md:gap-y-20"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.07, ease: easing }}
              >
                <Link href={`/works/${project.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                    <Image
                      src={project.heroImage}
                      alt={project.heroImageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1000ms] ease-editorial group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="eyebrow text-ivory border border-ivory/70 rounded-full px-5 py-2 backdrop-blur-sm">
                        See Detail
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl leading-tight pt-5 mb-4">
                    {project.title}
                  </h3>
                  <div className="border-t border-bark/20 pt-4 flex items-start justify-between">
                    <div className="flex gap-8">
                      <div>
                        <p className="text-[0.7rem] text-stone uppercase tracking-wide">Type</p>
                        <p className="text-sm text-bark mt-1">{project.type}</p>
                      </div>
                      <div>
                        <p className="text-[0.7rem] text-stone uppercase tracking-wide">Completion</p>
                        <p className="text-sm text-bark mt-1">{project.year}</p>
                      </div>
                    </div>
                    <span className="eyebrow text-bark pt-1">{project.category}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
