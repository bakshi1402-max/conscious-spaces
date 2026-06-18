"use client";

import Image from "next/image";
import Link from "next/link";
import { galleryStrip } from "@/data/content";

export function GalleryMarquee() {
  const items = [...galleryStrip, ...galleryStrip];

  return (
    <section className="py-10 overflow-hidden">
      <div className="fade-mask-x">
        <div className="flex w-max gap-4 md:gap-6 animate-marquee hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="relative shrink-0 w-[280px] md:w-[400px] h-[360px] md:h-[500px] overflow-hidden group block"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 280px, 400px"
                className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
