import { Project } from "@/lib/data/projects";
import Image from "next/image";
import Link from "next/link";

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      href={project.liveUrl || project.githubUrl || "#"}
      target="_blank"
      className="group relative overflow-hidden"
    >
      {project.imageUrl ? (
        <div className="aspect-[4/5] relative">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="aspect-[4/5] bg-neutral-800" />
      )}
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-medium text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
              Featured
            </span>
          )}
        </div>
        <p className="mt-2 text-neutral-300 font-light">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
