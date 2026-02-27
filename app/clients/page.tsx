import PageTransition from "@/components/PageTransition";
import ClientLogo from "@/components/ClientLogo";
import { clients } from "@/data/clients";

export const metadata = {
  title: "Clients | Backroads Pictures",
  description: "Proud to partner with world-class brands and organizations.",
};

export default function ClientsPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-wide mb-4">
            Clients
          </h1>
          <p className="text-[var(--color-muted)] text-lg font-light tracking-wide mb-16 max-w-2xl">
            Proud to partner with world-class brands and organizations committed to impactful
            storytelling.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {clients.map((client, i) => (
              <ClientLogo key={client.id} client={client} index={i} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
