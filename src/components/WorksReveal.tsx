"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { galleryStrip } from "@/data/content";

// Scattered project images animate across a dark canvas while a giant
// "WORKS" wordmark scrolls up from the bottom.
const positions = [
  { top: "8%", left: "6%", w: "20vw", aspect: "aspect-[3/4]", depth: 0.5 },
  { top: "30%", left: "38%", w: "30vw", aspect: "aspect-[4/3]", depth: 1 },
  { top: "18%", left: "72%", w: "22vw", aspect: "aspect-[3/4]", depth: 0.7 },
  { top: "58%", left: "14%", w: "24vw", aspect: "aspect-[4/5]", depth: 1.3 },
  { top: "62%", left: "60%", w: "26vw", aspect: "aspect-[4/3]", depth: 0.9 },
];

function ScatterImage({
  progress,
  pos,
  index,
}: {
  progress: MotionValue<number>;
  pos: (typeof positions)[number];
  index: number;
}) {
  const y = useTransform(
    progress,
    [0, 1],
    [`${pos.depth * 40}%`, `${pos.depth * -40}%`]
  );
  const img = galleryStrip[index % galleryStrip.length];
  return (
    <motion.div
      style={{ top: pos.top, left: pos.left, width: pos.w, y }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1, delay: index * 0.08 }}
      className="absolute"
    >
      <div className={`relative ${pos.aspect} overflow-hidden`}>
        <Image src={img.src} alt={img.alt} fill sizes="30vw" className="object-cover" />
      </div>
    </motion.div>
  );
}

export function WorksReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["60%", "-40%"]);

  return (
    <section ref={ref} className="relative bg-charcoal overflow-hidden h-[180vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {positions.map((pos, i) => (
          <ScatterImage key={i} progress={scrollYProgress} pos={pos} index={i} />
        ))}

        <motion.h2
          style={{ y: titleY }}
          className="absolute inset-x-0 bottom-0 text-center font-serif text-ivory/90 text-[26vw] leading-none tracking-tight pointer-events-none select-none"
        >
          Works
        </motion.h2>
      </div>
    </section>
  );
}
