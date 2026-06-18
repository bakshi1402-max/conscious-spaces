import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80svh] flex flex-col items-center justify-center text-center container-edge">
      <p className="eyebrow text-clay mb-6">Error 404</p>
      <h1 className="font-serif text-display-lg mb-8">Page not found</h1>
      <p className="text-bark max-w-md mb-10 leading-relaxed">
        The page you&apos;re looking for has moved or no longer exists. Let&apos;s
        get you back to familiar ground.
      </p>
      <Link href="/" className="btn-pill border-ink text-ink">
        <span>Return home</span>
      </Link>
    </section>
  );
}
