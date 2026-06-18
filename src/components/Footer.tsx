import Link from "next/link";
import { footerLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="container-edge pt-20 md:pt-28 pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 md:gap-0 border-b border-ivory/15 pb-16 md:pb-24">
          <nav className="flex flex-col gap-4 order-2 md:order-1">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="eyebrow text-ivory/70 hover:text-ivory transition-colors duration-300 w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="order-1 md:order-2 w-11 h-11 rounded-full border border-ivory/30 flex items-center justify-center hover:bg-ivory hover:text-ink transition-colors duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <div className="pt-10">
          <h2 className="font-serif text-[16vw] md:text-[10vw] leading-[0.85] tracking-tight">
            Conscious
            <br />
            Spaces
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-10 mt-6 border-t border-ivory/15">
          <p className="text-xs text-ivory/50 tracking-wide">
            ©2026 Conscious Spaces Design
          </p>
          <p className="text-xs text-ivory/30 tracking-wide">
            Interior design studio for slow, real life
          </p>
        </div>
      </div>
    </footer>
  );
}
