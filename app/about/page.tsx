import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { team } from "@/data/team";

export const metadata = {
  title: "About | Backroads Pictures",
  description:
    "An award-winning, global production studio giving voice to narratives focused on community and environmental impact.",
};

const laurels = [
  "/images/laurels/laurel1.webp",
  "/images/laurels/laurel2.webp",
  "/images/laurels/laurel3.webp",
  "/images/laurels/laurel4.webp",
  "/images/laurels/laurel5.webp",
  "/images/laurels/laurel6.webp",
  "/images/laurels/cff-winner.webp",
];

export default function AboutPage() {
  const founders = team.filter((m) => m.group === "founders");
  const members = team.filter((m) => m.group === "team");

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Hero text */}
          <div className="max-w-4xl mb-24">
            <h1 className="text-4xl md:text-6xl font-light text-white tracking-wide mb-8">
              About
            </h1>
            <p className="text-xl md:text-2xl font-light text-[var(--color-foreground)] leading-relaxed tracking-wide">
              Backroads Pictures is an award-winning, global production studio that gives voice to
              narratives focused on community and environmental impact. We believe storytelling can
              create meaningful change.
            </p>
          </div>

          {/* Hero image */}
          <ScrollReveal>
            <div className="relative aspect-[21/9] mb-24 overflow-hidden">
              <Image
                src="/images/hero/searching-for-amani.webp"
                alt="Searching For Amani - Backroads Pictures"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal>
            <div className="border-t border-[var(--color-border)] py-16 grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-sm tracking-[0.3em] uppercase text-[var(--color-muted)] mb-6">
                  Our Mission
                </h2>
                <p className="text-2xl md:text-3xl font-light text-white leading-relaxed tracking-wide">
                  We seek meaningful narratives that connect, empower, and impact our world.
                </p>
              </div>
              <div>
                <h2 className="text-sm tracking-[0.3em] uppercase text-[var(--color-muted)] mb-6">
                  What We Do
                </h2>
                <p className="text-lg font-light text-[var(--color-foreground)] leading-relaxed">
                  From branded content and commercials to feature documentaries and original series,
                  we craft stories that resonate across every platform. Our global network of
                  directors and creatives brings authentic perspectives to every project.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Award Laurels */}
          <ScrollReveal>
            <div className="border-t border-[var(--color-border)] py-16">
              <h2 className="text-sm tracking-[0.3em] uppercase text-[var(--color-muted)] mb-8">
                Recognition
              </h2>
              <div className="flex flex-wrap gap-6 items-center">
                {laurels.map((laurel, i) => (
                  <div key={i} className="relative h-20 w-32">
                    <Image
                      src={laurel}
                      alt="Award laurel"
                      fill
                      className="object-contain brightness-0 invert opacity-70"
                      sizes="128px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Founders */}
          <ScrollReveal>
            <div className="border-t border-[var(--color-border)] py-16">
              <h2 className="text-sm tracking-[0.3em] uppercase text-[var(--color-muted)] mb-12">
                Founders
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {founders.map((member) => (
                  <div key={member.name} className="flex gap-6 items-start">
                    <div className="w-20 h-20 flex-shrink-0 bg-[var(--color-surface)] overflow-hidden relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-light tracking-wide">
                        {member.name}
                      </h3>
                      <p className="text-[var(--color-muted)] text-sm tracking-wider mt-1">
                        {member.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Team Grid */}
          <ScrollReveal>
            <div className="border-t border-[var(--color-border)] py-16">
              <h2 className="text-sm tracking-[0.3em] uppercase text-[var(--color-muted)] mb-12">
                The Team
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {members.map((member) => (
                  <div key={member.name}>
                    <div className="aspect-square bg-[var(--color-surface)] overflow-hidden relative mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                    <h3 className="text-white text-sm font-light tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-[var(--color-muted)] text-xs tracking-wider mt-1">
                      {member.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}
