"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/data/content";
import { Reveal } from "./Reveal";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-36">
      <div className="container-edge">
        <Reveal className="mb-14 md:mb-20">
          <span className="eyebrow text-clay">faq</span>
        </Reveal>

        <div className="border-t border-bark/15">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question} className="border-b border-bark/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start md:items-center gap-6 md:gap-10 py-7 md:py-9 text-left group"
                >
                  <span className="eyebrow text-stone w-8 shrink-0 pt-1 md:pt-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base md:text-lg flex-1 uppercase tracking-wide font-medium text-bark group-hover:text-ink transition-colors duration-300">
                    {faq.question}
                  </span>
                  <span className="relative w-6 h-6 shrink-0 mt-1 md:mt-0">
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 2V18" stroke="currentColor" strokeWidth="1" />
                        <path d="M2 10H18" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    </motion.span>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 md:pb-9 pl-14 md:pl-20 pr-8 text-bark leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
