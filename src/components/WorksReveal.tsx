"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { galleryStrip } from "@/data/content";

// On a dark canvas, project images drift in scattered at different depths
// (parallax) while a giant serif "WORKS" wordmark rises from below.
const positions = [
  { top: "10%", left: "8%", w: "17vw", aspect: "aspect-[3/4]", depth: 0.4 },
  { top: "26%", left: "34%", w: "28vw", aspect: "aspect-[4/3]", depth: 1.1 },
  { top: "14%", left: "70%", w: "20vw", aspect: "aspect-[3/4]", depth: 0.65 },
  { top: "58%", left: "16%", w: "22vw", aspect: "aspect-[4/5]", depth: 1.4 },
  { top: "60%", left: "64%", w: "24vw", aspect: "aspect-[4/3]", depth: 0.85 },
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
    [`${pos.depth * 60}%`, `${pos.depth * -60}%`]
  );
  const opacity = useTransform(progress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const img = galleryStrip[index % galleryStrip.length];
  return (
    <motion.div
      style={{ top: pos.top, left: pos.left, width: pos.w, y, opacity }}
      className="absolute"
    >
      <div className={`relative ${pos.aspect} overflow-hidden shadow-2xl`}>
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

  // Giant wordmark rises from the bottom as the section scrolls through.
  const titleY = useTransform(scrollYProgress, [0, 1], ["80%", "-60%"]);

  return (
    <section ref={ref} className="relative bg-charcoal overflow-hidden h-[220vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Scattered parallax images */}
        {positions.map((pos, i) => (
          <ScatterImage key={i} progress={scrollYProgress} pos={pos} index={i} />
        ))}

        {/* Giant WORKS wordmark rising from below */}
        <motion.h2
          style={{ y: titleY }}
          className="absolute inset-x-0 bottom-0 text-center font-serif text-ivory/90 text-[24vw] leading-none tracking-tight pointer-events-none select-none"
        >
          Works
        </motion.h2>
      </div>
    </section>
  );
}
