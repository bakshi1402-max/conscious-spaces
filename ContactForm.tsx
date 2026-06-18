"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/content";

const easing = [0.65, 0, 0.35, 1] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const overHero = pathname === "/";
  const textLight = overHero && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-ivory/90 backdrop-blur-md border-b border-bark/10"
            : "bg-transparent"
        }`}
      >
        <div className="container-edge grid grid-cols-2 md:grid-cols-3 items-center h-20 md:h-24">
          <Link
            href="/"
            className={`font-serif text-xl md:text-2xl tracking-[0.18em] uppercase justify-self-start transition-colors duration-500 ${
              textLight ? "text-ivory" : "text-ink"
            }`}
            aria-label="Conscious Spaces home"
          >
            Conscious&nbsp;Spaces
          </Link>

          <nav className="hidden md:flex items-center justify-center gap-9">
            {navLinks
              .filter((l) => l.label !== "Contact")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`eyebrow link-underline transition-colors duration-500 ${
                    textLight ? "text-ivory/90" : "text-ink/80 hover:text-ink"
                  } ${pathname === link.href ? "opacity-100" : "opacity-90"}`}
                >
                  {link.label}
                </Link>
              ))}
          </nav>

          <Link
            href="/contact"
            className={`hidden md:inline-flex eyebrow link-underline justify-self-end transition-colors duration-500 ${
              textLight ? "text-ivory/90" : "text-ink/80 hover:text-ink"
            }`}
          >
            Contact
          </Link>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden relative z-50 w-9 h-9 flex flex-col items-center justify-center gap-[6px]"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: easing }}
              className={`w-7 h-[1.5px] block origin-center transition-colors duration-500 ${
                textLight ? "bg-ivory" : "bg-ink"
              }`}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: easing }}
              className={`w-7 h-[1.5px] block origin-center transition-colors duration-500 ${
                textLight ? "bg-ivory" : "bg-ink"
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-ivory md:hidden"
          >
            <nav className="h-full flex flex-col items-start justify-center gap-2 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.5, delay: 0.06 * i, ease: easing }}
                  className="overflow-hidden"
                >
                  <Link
                    href={link.href}
                    className="font-serif text-5xl leading-tight tracking-tight"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
