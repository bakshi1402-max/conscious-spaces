import { RevealText } from "./Reveal";

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pt-40 md:pt-52 pb-16 md:pb-24">
      <div className="container-edge">
        {subtitle && (
          <RevealText className="mb-5">
            <span className="eyebrow text-clay">{subtitle}</span>
          </RevealText>
        )}
        <RevealText delay={0.08}>
          <h1 className="font-serif text-display-lg text-ink">{title}</h1>
        </RevealText>
      </div>
    </section>
  );
}
