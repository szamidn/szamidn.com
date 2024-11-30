export interface LabProject {
  id: string;
  title: string;
  description: string;
  category: "ui" | "ux" | "ai" | "3d" | "other";
  status: "in-progress" | "completed" | "archived";
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const labProjects: LabProject[] = [
  // {
  //   id: "1",
  //   title: "Matrix Text Effect",
  //   description: "An interactive text scramble effect inspired by The Matrix",
  //   category: "ui",
  //   status: "completed",
  //   technologies: ["React", "TypeScript", "Framer Motion"],
  //   demoUrl: "/lab/matrix-text",
  // },
  // Add more lab projects here
];
