import { Github, X } from "iconoir-react";
import Link from "next/link";

const FooterSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-white font-medium">{title}</h3>
    <div className="flex flex-col gap-2 text-neutral-400">{children}</div>
  </div>
);

const FooterLink = ({
  href,
  children,
  blank,
}: {
  href: string;
  children: string;
  blank?: boolean;
}) => (
  <Link
    href={href}
    className="hover:text-purple-500 transition-colors"
    target={blank ? "_blank" : "_self"}
  >
    {children}
  </Link>
);

export const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 py-16 bg-gradient-to-b from-neutral-900 to-purple-950 via-neutral-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-display font-medium text-white">
              szami
            </h2>
            <p className="text-neutral-400">
              Full time developer making the web better
            </p>
            <div className="flex gap-4 text-neutral-400">
              <Link
                href="https://x.com/szamidn"
                className="hover:text-purple-500 transition-colors"
                target="_blank"
              >
                <X />
              </Link>
              <Link
                href="https://github.com/szamidn"
                className="hover:text-purple-500 transition-colors"
                target="_blank"
              >
                <Github />
              </Link>
            </div>
          </div>

          <FooterSection title="Contact">
            <FooterLink href="mailto:hi@szamidn.com">Email Szami</FooterLink>
            <FooterLink href="https://x.com/szamidn" blank>
              Szami on X
            </FooterLink>
            <FooterLink href="https://github.com/szamidn" blank>
              Szami on Github
            </FooterLink>
          </FooterSection>

          <FooterSection title="Sitemap">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/lab">Lab</FooterLink>
          </FooterSection>

          <FooterSection title="Link">
            <FooterLink href="/projects">Projects</FooterLink>
            <FooterLink href="/sitemap.xml" blank>
              sitemap.xml
            </FooterLink>
          </FooterSection>
        </div>

        <div className="mt-16 pt-8 border-t border-white/50 text-white flex items-center justify-between">
          <p className="text-sm">
            All rights reserved © Szami {new Date().getFullYear()}
          </p>
          <Link
            href="/sitemap.xml"
            className="text-sm hover:text-purple-500 transition-colors"
            target="_blank"
          >
            Sitemap.xml
          </Link>
        </div>
      </div>
    </footer>
  );
};
