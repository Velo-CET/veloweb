"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "zoomIn" | "textHighlight";
  delay?: number; // in ms
  duration?: number; // in ms
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  variant = "fadeInUp",
  delay = 0,
  duration = 800,
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it enters fully
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getVariantStyles = () => {
    switch (variant) {
      case "fadeIn":
        return {
          initial: "opacity-0",
          animate: "opacity-100",
        };
      case "fadeInUp":
        return {
          initial: "opacity-0 translate-y-8",
          animate: "opacity-100 translate-y-0",
        };
      case "fadeInDown":
        return {
          initial: "opacity-0 -translate-y-8",
          animate: "opacity-100 translate-y-0",
        };
      case "fadeInLeft":
        return {
          initial: "opacity-0 -translate-x-8",
          animate: "opacity-100 translate-x-0",
        };
      case "fadeInRight":
        return {
          initial: "opacity-0 translate-x-8",
          animate: "opacity-100 translate-x-0",
        };
      case "zoomIn":
        return {
          initial: "opacity-0 scale-95",
          animate: "opacity-100 scale-100",
        };
      case "textHighlight":
        return {
          initial: "text-highlight-initial",
          animate: "text-highlight-active",
        };
      default:
        return {
          initial: "opacity-0 translate-y-8",
          animate: "opacity-100 translate-y-0",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? styles.animate : styles.initial
        } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
