import { Eclipse } from "@/components/eclipse";
import { LabGrid } from "@/components/lab-grid";
import { labProjects } from "@/lib/data/lab";

export default function Lab() {
  return (
    <div className="w-screen min-h-screen bg-neutral-900 overflow-hidden">
      <Eclipse />

      <div className="w-screen h-32 lg:h-48" />

      <main>
        <section className="container mx-auto px-4 mb-16 md:mb-32">
          <div className="flex items-start justify-start gap-2 mb-8">
            <h2 className="text-5xl font-medium font-display text-white">
              Lab Experiments
            </h2>
            <p className="text-neutral-500 tabular-nums text-sm">
              {labProjects.length}
            </p>
          </div>
          <LabGrid projects={labProjects} />
        </section>
      </main>
    </div>
  );
}
