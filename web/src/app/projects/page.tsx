import { Eclipse } from "@/components/eclipse";
import { ProjectsGrid } from "@/components/projects-grid";
import { projects } from "@/lib/data/projects";

export default function ProjectsPage() {
  return (
    <div className="w-screen min-h-screen bg-neutral-900 overflow-hidden">
      <Eclipse />

      <div className="w-screen h-32 md:h-48 lg:h-72" />

      <main>
        <section className="container mx-auto px-4 mb-16 md:mb-32">
          <div className="flex items-start justify-start gap-2 mb-8">
            <h2 className="text-5xl font-medium font-display text-white">
              Projects
            </h2>
            <p className="text-neutral-500 tabular-nums text-sm">
              {projects.length}
            </p>
          </div>
          <ProjectsGrid projects={projects} />
        </section>
      </main>
    </div>
  );
}
