import PageTransition from "@/components/PageTransition";
import InteractiveGlobe from "@/components/InteractiveGlobe";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Global Reach | Backroads Pictures",
  description:
    "Backroads Pictures has filmed across the globe — explore the locations where we've told stories that matter.",
};

const regions = [
  {
    label: "Americas",
    places: [
      "Peru",
      "Brazil",
      "Mexico",
      "Colombia",
      "Bolivia",
      "Alaska",
      "Florida",
      "Tennessee",
      "California",
      "New York",
    ],
  },
  {
    label: "Europe",
    places: ["Portugal", "Denmark", "UK", "France", "Italy"],
  },
  {
    label: "Africa",
    places: ["Kenya", "Senegal", "South Africa"],
  },
  {
    label: "Asia & Oceania",
    places: ["Indonesia", "Nepal", "Bhutan", "Cambodia"],
  },
];

export default function GlobePage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-white tracking-wide mb-8">
              Global Reach
            </h1>
            <p className="text-xl md:text-2xl font-light text-[var(--color-foreground)] leading-relaxed tracking-wide">
              Stories without borders. We&apos;ve filmed in over 20 countries and
              states across six continents, bringing authentic local narratives
              to a global audience.
            </p>
          </div>

          {/* Globe */}
          <div className="mb-24">
            <InteractiveGlobe />
            <p className="text-center text-[var(--color-muted)] text-sm tracking-wider mt-6">
              Drag to rotate &middot; Hover to explore
            </p>
          </div>

          {/* Location list by region */}
          <ScrollReveal>
            <div className="border-t border-[var(--color-border)] pt-16">
              <h2 className="text-sm tracking-[0.3em] uppercase text-[var(--color-muted)] mb-12">
                Locations
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                {regions.map((region) => (
                  <div key={region.label}>
                    <h3 className="text-white text-lg font-light tracking-wide mb-4">
                      {region.label}
                    </h3>
                    <ul className="space-y-2">
                      {region.places.map((place) => (
                        <li
                          key={place}
                          className="text-[var(--color-muted)] text-sm tracking-wider"
                        >
                          {place}
                        </li>
                      ))}
                    </ul>
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
