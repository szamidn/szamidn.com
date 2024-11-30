"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type Direction = "top" | "bottom" | "left" | "right";
type Ease = "in" | "out" | "inout";

interface AnimateProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  blur?: number;
  duration?: number;
  distance?: number;
  className?: string;
  ease?: Ease;
}

const getInitialPosition = (direction: Direction, distance: number) => {
  switch (direction) {
    case "top":
      return { y: -distance, opacity: 0 };
    case "bottom":
      return { y: distance, opacity: 0 };
    case "left":
      return { x: -distance, opacity: 0 };
    case "right":
      return { x: distance, opacity: 0 };
  }
};

export default function Animate({
  children,
  direction = "top",
  delay = 0,
  duration = 200,
  blur = 0,
  distance = 20,
  className,
  ease = "inout",
}: AnimateProps) {
  const getEaseFunction = (ease: Ease) => {
    switch (ease) {
      case "in":
        return "easeIn";
      case "out":
        return "easeOut";
      case "inout":
        return "easeInOut";
    }
  };

  return (
    <motion.div
      initial={{
        ...getInitialPosition(direction, distance),
        filter: `blur(${blur}px)`,
      }}
      whileInView={{ 
        x: 0, 
        y: 0, 
        opacity: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true }}
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: getEaseFunction(ease),
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
