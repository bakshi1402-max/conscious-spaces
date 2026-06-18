"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { heroSlides } from "@/data/content";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  // Scroll progress across a tall (200vh) container drives the card expansion.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Card grows from a centered ~38vw/60vh card to full-bleed.
  const width = useTransform(scrollYProgress, [0, 0.85], ["38vw", "100vw"]);
  const height = useTransform(scrollYProgress, [0, 0.85], ["60vh", "100vh"]);
  const radius = useTransform(scrollYProgress, [0, 0.85], [2, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.35]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const labelOpacity = useTransform(scrollYProgress, [0.55, 0.8], [0, 1]);

  const slide = heroSlides[index];

  return (
    <section ref={containerRef} className="relative h-[260vh] bg-charcoal">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background label that fades in as card fills */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center">
            <p className="eyebrow text-ivory/60 mb-6">Interior Design Studio</p>
            <h1 className="font-serif text-ivory text-[12vw] leading-[0.9] tracking-tight">
              Conscious
            </h1>
          </div>
        </motion.div>

        {/* Expanding card */}
        <motion.div
          style={{ width, height, borderRadius: radius }}
          className="relative overflow-hidden will-change-[width,height]"
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={slide.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-black"
          />

          {/* Slide counter + See Details (visible while card is small) */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="absolute inset-0 flex flex-col justify-between p-5 md:p-7"
          >
            <span className="eyebrow text-ivory/90">
              {String(index + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </span>
            <div className="self-center">
              <Link
                href={slide.href}
                className="eyebrow text-ivory border border-ivory/60 rounded-full px-5 py-2 backdrop-blur-sm hover:bg-ivory hover:text-ink transition-colors duration-300"
              >
                See Details
              </Link>
            </div>
            <span className="eyebrow text-ivory/90 self-end">{slide.title}</span>
          </motion.div>

          {/* Full-bleed title + CTA (fades in once expanded) */}
          <motion.div
            style={{ opacity: labelOpacity }}
            className="absolute inset-0 flex flex-col justify-end p-6 md:p-12"
          >
            <div className="container-edge w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="font-serif text-ivory text-display-md md:text-display-lg">
                {slide.title}
              </h2>
              <Link href={slide.href} className="btn-pill border-ivory text-ivory w-fit">
                <span>See Project Detail</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Slide selector dots */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10"
        >
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show project ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-ivory w-6" : "bg-ivory/40"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
