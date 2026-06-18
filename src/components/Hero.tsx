"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "@/data/content";

const categories = ["Wellness", "Hospitality", "Residential"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-charcoal">
      {/* Full-bleed crossfading image */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.src}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
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
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Vertical category word on the left */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <AnimatePresence mode="wait">
          <motion.span
            key={categories[index % categories.length]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.5, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-ivory text-2xl tracking-[0.5em] uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            {categories[index % categories.length]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Persistent centerline with counter / title / link */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          <div className="h-px w-full bg-ivory/40" />
          <div className="container-edge absolute inset-x-0 -top-7 flex items-center justify-between">
            <div className="flex items-center gap-6 md:gap-10">
              <span className="eyebrow text-ivory">
                {index + 1} / {heroSlides.length}
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={slide.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.5 }}
                  className="text-ivory text-base md:text-lg tracking-wide"
                >
                  {slide.title}
                </motion.span>
              </AnimatePresence>
            </div>
            <Link
              href={slide.href}
              className="eyebrow text-ivory link-underline hidden sm:inline-block"
            >
              See Work Detail
            </Link>
          </div>
        </div>
      </div>

      {/* Slide selector dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show project ${i + 1}`}
            className={`h-[2px] transition-all duration-500 ${
              i === index ? "bg-ivory w-10" : "bg-ivory/40 w-5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
