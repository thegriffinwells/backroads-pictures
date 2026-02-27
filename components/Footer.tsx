import Link from "next/link";

const socials = [
  { label: "Instagram", href: "https://instagram.com/backroadspictures" },
  { label: "LinkedIn", href: "https://linkedin.com/company/backroads-pictures" },
  { label: "YouTube", href: "https://youtube.com/@backroadspictures" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-[var(--color-muted)] tracking-wide">
          &copy; {new Date().getFullYear()} Backroads Pictures. All rights reserved.
        </p>
        <div className="flex gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-muted)] hover:text-white transition-colors tracking-wide"
            >
              {s.label}
            </a>
          ))}
        </div>
        <Link
          href="/decks"
          className="text-sm text-[var(--color-muted)] hover:text-white transition-colors tracking-wide"
        >
          Decks
        </Link>
      </div>
    </footer>
  );
}
