"use client";

import { motion } from "motion/react";
import { cloneElement, isValidElement, useEffect, useState } from "react";

interface HoverMatrixTextProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

const characters = "abcdefghijklmnopqrstuvwxyz";

const extractTextFromElement = (element: React.ReactNode): string => {
  if (typeof element === "string") return element;
  if (!isValidElement(element)) return "";

  // If it's a React element with children, recursively extract text
  if (element.props.children) {
    if (typeof element.props.children === "string")
      return element.props.children;
    if (Array.isArray(element.props.children)) {
      return element.props.children.map(extractTextFromElement).join("");
    }
    return extractTextFromElement(element.props.children);
  }

  return "";
};

export default function HoverMatrixText({
  children,
  className = "",
  duration = 800,
}: HoverMatrixTextProps) {
  const originalText = extractTextFromElement(children);
  const [displayText, setDisplayText] = useState(originalText);
  const [isHovering, setIsHovering] = useState(false);

  const scrambleText = (finalText: string, progress: number): string => {
    return finalText
      .split("")
      .map((char, index) => {
        if (char === " ") return " ";
        if (index < finalText.length * progress) return char;
        return characters.charAt(Math.floor(Math.random() * characters.length));
      })
      .join("");
  };

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(originalText);
      return;
    }

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setDisplayText(scrambleText(originalText, progress));

      if (progress === 1) {
        clearInterval(interval);
      }
    }, 1000 / 60); // 60fps update

    return () => clearInterval(interval);
  }, [originalText, duration, isHovering]);

  if (!isValidElement(children)) {
    return (
      <motion.span
        className={className}
        style={{ whiteSpace: "pre-wrap", display: "inline-block" }}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        {displayText}
      </motion.span>
    );
  }

  // Clone the element and add our hover handlers
  return cloneElement(children as React.ReactElement, {
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false),
    children: displayText,
  });
}
