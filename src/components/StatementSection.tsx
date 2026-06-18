import { RevealText } from "./Reveal";

export function StatementSection() {
  return (
    <section className="py-32 md:py-48 bg-ivory">
      <div className="container-edge flex justify-end">
        <div className="text-right">
          <RevealText className="mb-5 flex justify-end">
            <span className="eyebrow text-clay">We design for</span>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="font-serif text-display-xl text-ink leading-[0.92] uppercase">
              Slow,
            </h2>
          </RevealText>
          <RevealText delay={0.18}>
            <h2 className="font-serif text-display-xl text-ink leading-[0.92] uppercase">
              Real Life
            </h2>
          </RevealText>
        </div>
      </div>
    </section>
  );
}
