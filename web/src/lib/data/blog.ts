export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string; // Format: "MMM DD" (e.g., "Nov 30")
  year: number; // Format: YYYY (e.g., 2024)
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  // {
  //   id: "1",
  //   title: "Building a Modern Web Portfolio",
  //   description: "How I built my portfolio using Next.js, TypeScript, and Tailwind CSS",
  //   date: "Jan 15",
  //   year: 2024,
  //   tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   slug: "building-modern-web-portfolio",
  // },
  // Add more blog posts here
];
