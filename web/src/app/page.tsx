import BlogList from "@/components/blog-list";
import { Eclipse } from "@/components/eclipse";
import { Hero } from "@/components/hero";
import { LabGrid } from "@/components/lab-grid";
import { ProjectsGrid } from "@/components/projects-grid";
import { blogPosts } from "@/lib/data/blog";
import { labProjects } from "@/lib/data/lab";
import { projects } from "@/lib/data/projects";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-neutral-900 overflow-hidden">
      <Eclipse />

      <div className="w-screen h-32 lg:h-48" />

      <main>
        <section className="mb-16 md:mb-32">
          <Hero />
        </section>
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
        <section className="container mx-auto px-4 mb-16 md:mb-32">
          <div className="flex items-start justify-start gap-2 mb-8">
            <h2 className="text-5xl font-medium font-display text-white">
              Lab (trying small things)
            </h2>
            <p className="text-neutral-500 tabular-nums text-sm">
              {labProjects.length}
            </p>
          </div>
          <LabGrid projects={labProjects} />
        </section>
        <section className="container mx-auto px-4 mb-16 md:mb-32">
          <BlogList posts={blogPosts} />
        </section>
      </main>
    </div>
  );
}
