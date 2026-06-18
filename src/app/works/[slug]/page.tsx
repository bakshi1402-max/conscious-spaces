import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/content";
import { Reveal, RevealText } from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.excerpt,
    openGraph: { images: [project.heroImage] },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article>
      <section className="pt-40 md:pt-52 pb-12 md:pb-16">
        <div className="container-edge">
          <RevealText className="mb-5">
            <span className="eyebrow text-clay">
              {project.category} — {project.year}
            </span>
          </RevealText>
          <RevealText delay={0.08}>
            <h1 className="font-serif text-display-lg text-ink max-w-4xl">
              {project.title}
            </h1>
          </RevealText>
        </div>
      </section>

      <Reveal className="container-edge">
        <div className="relative aspect-[16/10] md:aspect-[16/8] overflow-hidden bg-sand">
          <Image
            src={project.heroImage}
            alt={project.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <section className="py-20 md:py-32">
        <div className="container-edge grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Reveal>
              <dl className="flex flex-col gap-6">
                <div className="flex flex-col gap-1 border-t border-bark/15 pt-4">
                  <dt className="eyebrow text-stone">Type</dt>
                  <dd className="text-bark">{project.type}</dd>
                </div>
                <div className="flex flex-col gap-1 border-t border-bark/15 pt-4">
                  <dt className="eyebrow text-stone">Category</dt>
                  <dd className="text-bark">{project.category}</dd>
                </div>
                <div className="flex flex-col gap-1 border-t border-bark/15 pt-4">
                  <dt className="eyebrow text-stone">Year</dt>
                  <dd className="text-bark">{project.year}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.1}>
              <p className="font-serif text-2xl md:text-display-md leading-snug text-ink">
                {project.description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="container-edge flex flex-col gap-4 md:gap-8">
          {project.galleryImages.map((img, i) => (
            <Reveal
              key={i}
              delay={i * 0.05}
              className={i % 3 === 1 ? "md:w-2/3 md:self-end" : "w-full"}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 75vw"
                  className="object-cover transition-transform duration-700 ease-editorial hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-bark/15 py-16 md:py-24">
        <div className="container-edge flex items-center justify-between">
          <span className="eyebrow text-stone">Next project</span>
          <Link
            href={`/works/${next.slug}`}
            className="font-serif text-3xl md:text-5xl link-underline"
          >
            {next.title}
          </Link>
        </div>
      </section>
    </article>
  );
}
