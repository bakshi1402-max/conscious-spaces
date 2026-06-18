import { RevealText } from "./Reveal";

export function StatementSection() {
  return (
    <section className="py-32 md:py-48 bg-ivory">
      <div className="container-edge text-center">
        <RevealText className="mb-6 flex justify-center">
          <span className="eyebrow text-clay">We design for</span>
        </RevealText>
        <RevealText delay={0.1} className="flex justify-center">
          <h2 className="font-serif text-display-xl text-ink leading-[0.95]">
            Slow, Real Life
          </h2>
        </RevealText>
      </div>
    </section>
  );
}
