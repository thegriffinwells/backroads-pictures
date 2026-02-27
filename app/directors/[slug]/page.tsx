import { notFound } from "next/navigation";
import Image from "next/image";
import { directors } from "@/data/directors";
import { projects } from "@/data/projects";
import PageTransition from "@/components/PageTransition";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";

export function generateStaticParams() {
  return directors.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const director = directors.find((d) => d.slug === slug);
    if (!director) return { title: "Director Not Found" };
    return {
      title: `${director.name} | Backroads Pictures`,
      description: director.bio,
    };
  });
}

export default async function DirectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const director = directors.find((d) => d.slug === slug);
  if (!director) notFound();

  const relatedProject = projects.find(
    (p) =>
      p.title.toLowerCase().includes(director.name.split(" ")[1]?.toLowerCase() ?? "") ||
      p.category === "featured"
  );

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/directors"
            className="text-sm text-[var(--color-muted)] hover:text-white transition-colors tracking-[0.15em] uppercase mb-12 inline-block"
          >
            &larr; All Directors
          </Link>

          <div className="grid md:grid-cols-[300px_1fr] gap-12 mt-8">
            <div className="aspect-[3/4] bg-[var(--color-surface)] overflow-hidden relative">
              <Image
                src={director.image}
                alt={director.name}
                fill
                className="object-cover"
                sizes="300px"
                priority
              />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-light text-white tracking-wide mb-2">
                {director.name}
              </h1>
              <p className="text-[var(--color-muted)] text-sm tracking-[0.2em] uppercase mb-8">
                {director.role}
              </p>
              <p className="text-lg font-light text-[var(--color-foreground)] leading-relaxed max-w-xl">
                {director.bio}
              </p>
            </div>
          </div>

          {relatedProject && (
            <div className="mt-20">
              <h2 className="text-sm tracking-[0.3em] uppercase text-[var(--color-muted)] mb-8">
                Selected Work
              </h2>
              <VideoPlayer vimeoId={relatedProject.vimeoId} />
              <p className="text-white text-sm tracking-wide mt-4 font-light">
                {relatedProject.title}
              </p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
