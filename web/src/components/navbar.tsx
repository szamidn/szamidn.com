"use client";

import { Github, Menu, X } from "iconoir-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { mainNavItems, socialNavItems } from "@/lib/navigation";

export function Navbar() {
  const icons = {
    X: X,
    Github: Github,
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4 md:px-0 z-50">
      <div className="rounded-full border bg-neutral-900/50 hover:bg-neutral-900/70 backdrop-blur border-purple-500/50 flex items-center justify-between py-4 px-8 hover:shadow-lg transition-all z-30">
        <Link href="/" className="group">
          <h1 className="font-display font-bold text-2xl text-white transition-all group">
            <span className="group-hover:text-purple-400 transition-all">
              s
            </span>
            zami
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          {mainNavItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button variant="link">{item.label}</Button>
            </Link>
          ))}
          {socialNavItems.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Link key={item.href} href={item.href} target="_blank">
                <Button variant="link" className="flex items-center gap-2">
                  <Icon width={16} height={16} />
                </Button>
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="link" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Navigation</DrawerTitle>
              </DrawerHeader>
              <div className="px-4 pb-8 flex flex-col gap-2">
                {mainNavItems.map((item) => (
                  <DrawerClose key={item.href} asChild>
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-lg"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  </DrawerClose>
                ))}
                <div className="flex items-center gap-4 mt-4">
                  {socialNavItems.map((item) => {
                    const Icon = icons[item.icon as keyof typeof icons];
                    return (
                      <Link key={item.href} href={item.href} target="_blank">
                        <Button variant="outline" size="icon">
                          <Icon width={16} height={16} />
                        </Button>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
