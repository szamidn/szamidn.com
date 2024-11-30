export interface NavigationItem {
  label: string;
  href: string;
  icon?: "X" | "Github";
}

export const mainNavItems: NavigationItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Lab", href: "/lab" },
  { label: "Blog", href: "/blog" },
];

export const socialNavItems: NavigationItem[] = [
  { label: "X", href: "https://x.com/szamidn", icon: "X" },
  { label: "GitHub", href: "https://github.com/szamidn", icon: "Github" },
];
