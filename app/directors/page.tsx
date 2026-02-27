import PageTransition from "@/components/PageTransition";
import DirectorCard from "@/components/DirectorCard";
import { directors } from "@/data/directors";

export const metadata = {
  title: "Directors | Backroads Pictures",
  description: "Meet our roster of award-winning directors.",
};

export default function DirectorsPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-wide mb-4">
            Directors
          </h1>
          <p className="text-[var(--color-muted)] text-lg font-light tracking-wide mb-16 max-w-2xl">
            A diverse roster of storytellers bringing unique perspectives to every project.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {directors.map((director, i) => (
              <DirectorCard key={director.slug} director={director} index={i} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
