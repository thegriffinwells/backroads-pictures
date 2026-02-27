import PageTransition from "@/components/PageTransition";
import VideoGrid from "@/components/VideoGrid";

export const metadata = {
  title: "Work | Backroads Pictures",
  description: "Explore our portfolio of branded content, documentaries, and original productions.",
};

export default function WorkPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-wide mb-4">Work</h1>
          <p className="text-[var(--color-muted)] text-lg font-light tracking-wide mb-16 max-w-2xl">
            Stories that move. From branded content to original documentaries, our work spans the
            globe and crosses every medium.
          </p>
          <VideoGrid />
        </div>
      </div>
    </PageTransition>
  );
}
