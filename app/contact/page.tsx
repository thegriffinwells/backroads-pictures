"use client";

import { useState, type FormEvent } from "react";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire up to Formspree or similar
    setSubmitted(true);
  }

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-wide mb-4">
            Contact
          </h1>
          <p className="text-[var(--color-muted)] text-lg font-light tracking-wide mb-16">
            Have a project in mind? We&apos;d love to hear from you.
          </p>

          {submitted ? (
            <ScrollReveal>
              <div className="py-20 text-center">
                <p className="text-2xl font-light text-white tracking-wide mb-4">
                  Thank you for reaching out.
                </p>
                <p className="text-[var(--color-muted)]">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm tracking-[0.15em] uppercase text-[var(--color-muted)] mb-3"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-[var(--color-border)] pb-3 text-white text-lg font-light focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm tracking-[0.15em] uppercase text-[var(--color-muted)] mb-3"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-[var(--color-border)] pb-3 text-white text-lg font-light focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm tracking-[0.15em] uppercase text-[var(--color-muted)] mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-[var(--color-border)] pb-3 text-white text-lg font-light focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="text-sm tracking-[0.2em] uppercase text-white border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition-all duration-500"
              >
                Send Message
              </button>
            </form>
          )}

          {/* Social links */}
          <div className="mt-24 border-t border-[var(--color-border)] pt-12">
            <h2 className="text-sm tracking-[0.3em] uppercase text-[var(--color-muted)] mb-6">
              Follow Us
            </h2>
            <div className="flex gap-8">
              {[
                { label: "Instagram", href: "https://instagram.com/backroadspictures" },
                { label: "LinkedIn", href: "https://linkedin.com/company/backroads-pictures" },
                { label: "YouTube", href: "https://youtube.com/@backroadspictures" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm tracking-[0.15em] uppercase hover:opacity-60 transition-opacity"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
