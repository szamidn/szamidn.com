"use client";

import EclipseImage from "@/media/eclipse.webp";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Animate from "./animate";

export function Eclipse() {
  const pathname = usePathname();

  return (
    <div
      key={pathname}
      className="absolute w-screen top-0 left-0 right-0 z-10 pointer-events-none"
      style={{ height: "100dvh" }}
    >
      <Animate blur={8} duration={800} ease="out">
        <Image
          src={EclipseImage}
          alt="Eclipse line from above, graphic art, purple gradient"
          height={0}
          width={0}
          sizes="100vw"
          priority
          className="w-full h-auto object-cover pointer-events-none select-none user-select-none"
        />
      </Animate>
    </div>
  );
}
