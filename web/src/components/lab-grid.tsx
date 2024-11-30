import { LabProject } from "@/lib/data/lab";
import Link from "next/link";

interface LabGridProps {
  projects: LabProject[];
}

const LabCard = ({ project }: { project: LabProject }) => {
  const statusColors = {
    "in-progress": "bg-yellow-500/20 text-yellow-300",
    completed: "bg-green-500/20 text-green-300",
    archived: "bg-neutral-500/20 text-neutral-300",
  };

  return (
    <Link
      href={project.demoUrl || project.githubUrl || "#"}
      target="_blank"
      className="group relative overflow-hidden"
    >
      <div className="aspect-video bg-neutral-800" />
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-medium text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <span className={`${statusColors[project.status]} px-1 text-xs`}>
            {project.status}
          </span>
        </div>
        <p className="mt-2 text-neutral-300 font-light">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
            {project.category}
          </span>
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

export const LabGrid = ({ projects }: LabGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project) => (
        <LabCard key={project.id} project={project} />
      ))}
    </div>
  );
};
