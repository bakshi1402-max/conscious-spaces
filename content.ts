import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Conscious Spaces about your residential, hospitality, or wellness interior project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Let's begin a conversation" subtitle="Contact" />

      <section className="pb-28 md:pb-40">
        <div className="container-edge grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-5 flex flex-col gap-10">
            <Reveal>
              <div className="border-t border-bark/15 pt-5">
                <p className="eyebrow text-stone mb-2">Enquiries</p>
                <a
                  href="mailto:studio@consciousspaces.example.com"
                  className="text-bark text-lg link-underline"
                >
                  studio@consciousspaces.example.com
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="border-t border-bark/15 pt-5">
                <p className="eyebrow text-stone mb-2">Studio</p>
                <p className="text-bark text-lg leading-relaxed">
                  18 Aldermere Lane
                  <br />
                  Studio 4, North Quarter
                  <br />
                  Open by appointment
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="border-t border-bark/15 pt-5">
                <p className="eyebrow text-stone mb-2">Social</p>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bark text-lg link-underline"
                >
                  Instagram
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
