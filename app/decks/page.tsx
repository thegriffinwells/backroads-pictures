import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import { decks } from "@/data/decks";

export const metadata = {
  title: "Decks | Backroads Pictures",
  description: "Project pitch decks and presentations.",
};

export default function DecksIndexPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-wide mb-4">Decks</h1>
          <p className="text-[var(--color-muted)] text-lg font-light tracking-wide mb-16 max-w-2xl">
            Explore our project presentations and pitch decks.
          </p>
          <div className="grid gap-6">
            {decks.map((deck) => (
              <Link
                key={deck.slug}
                href={`/decks/${deck.slug}`}
                className="group block border border-[var(--color-border)] hover:border-white/20 transition-colors p-8"
              >
                <h2 className="text-2xl md:text-3xl font-light text-white tracking-wide group-hover:opacity-80 transition-opacity">
                  {deck.title}
                </h2>
                <p className="text-[var(--color-muted)] text-sm tracking-wider mt-2">
                  {deck.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
