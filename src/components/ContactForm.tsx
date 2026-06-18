"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-bark/20 p-10 md:p-14">
        <h3 className="font-serif text-3xl mb-3">Thank you</h3>
        <p className="text-bark leading-relaxed">
          Your message has been received. We&apos;ll be in touch within a few
          working days to begin the conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Field id="name" label="Name" type="text" required />
        <Field id="email" label="Email" type="email" required />
      </div>
      <Field id="project" label="Project type" type="text" />
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="eyebrow text-stone">
          Tell us about your space
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="bg-transparent border-b border-bark/30 py-3 text-bark text-lg focus:outline-none focus:border-ink transition-colors duration-300 resize-none"
        />
      </div>
      <button type="submit" className="btn-pill border-ink text-ink w-fit mt-2">
        <span>Send message</span>
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  required,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="eyebrow text-stone">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="bg-transparent border-b border-bark/30 py-3 text-bark text-lg focus:outline-none focus:border-ink transition-colors duration-300"
      />
    </div>
  );
}
