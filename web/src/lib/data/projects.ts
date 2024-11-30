export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  // {
  //   id: "1",
  //   title: "Personal Portfolio",
  //   description: "A modern, interactive portfolio built with Next.js and TypeScript",
  //   technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  //   githubUrl: "https://github.com/szamidn",
  //   featured: true,
  // },
  // Add more projects here
];
