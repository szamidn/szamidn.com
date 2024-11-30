"use client";

import { motion, useAnimationControls } from "motion/react";
import { useEffect, useState } from "react";

interface MatrixTextProps {
  children: string;
  className?: string;
  duration?: number;
  scrambleSpeed?: number;
}

const characters = "abceimnorsuvwxz.-+=~";

export default function MatrixText({
  children,
  className = "",
  duration = 2000,
  scrambleSpeed = 50,
}: MatrixTextProps) {
  const [displayText, setDisplayText] = useState(children);
  const [isInView, setIsInView] = useState(false);
  const [isScrambled, setIsScrambled] = useState(true);
  const controls = useAnimationControls();

  const scrambleText = (finalText: string, progress: number): string => {
    return finalText
      .split("")
      .map((char, index) => {
        // If the character is a space, preserve it
        if (char === " ") return " ";

        // If we've passed the progress threshold for this character, show the final char
        if (index < finalText.length * progress) return char;

        // Otherwise show a random character
        return characters.charAt(Math.floor(Math.random() * characters.length));
      })
      .join("");
  };

  useEffect(() => {
    if (!isInView) return;

    let startTime = Date.now();
    let animationFrame: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress < 1) {
        setDisplayText(scrambleText(children, progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayText(children);
        setIsScrambled(false);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [children, duration, isInView]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
      className={className}
      style={{ whiteSpace: "pre-wrap" }}
    >
      {displayText}
    </motion.div>
  );
}
