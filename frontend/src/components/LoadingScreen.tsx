"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Disable body scrolling during loading
    document.body.style.overflow = "hidden";

    let currentProgress = 0;
    const interval = setInterval(() => {
      // Simulate non-linear progress bar loading
      if (currentProgress < 30) {
        currentProgress += Math.random() * 8 + 4;
      } else if (currentProgress < 75) {
        currentProgress += Math.random() * 4 + 1;
      } else {
        currentProgress += Math.random() * 2 + 0.5;
      }

      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
      }

      setProgress(Math.min(Math.floor(currentProgress), 100));
    }, 40);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const fadeTimeout = setTimeout(() => {
        setIsFadingOut(true);

        // Notify other elements (like ScrollReveal) that the page is loaded
        if (typeof window !== "undefined") {
          (window as any).__loaded = true;
          document.documentElement.classList.add("loaded");
          document.dispatchEvent(new CustomEvent("site-loaded"));
        }
      }, 500); // Hold at 100% for 500ms for visual satisfaction

      const removeTimeout = setTimeout(() => {
        setIsMounted(false);
        document.body.style.overflow = "";
      }, 1000); // 500ms hold + 500ms fade transition

      return () => {
        clearTimeout(fadeTimeout);
        clearTimeout(removeTimeout);
      };
    }
  }, [progress]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 transition-opacity duration-500 ease-out select-none ${isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      {/* Decorative Star Background */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-6 text-center">
        {/* Glowing Logo */}
        <div className="relative mb-8 animate-pulse">
          <img
            src="/VeloCET-white-logo.svg"
            alt="VeloCET"
            className="h-8 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
          />
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden mb-3 relative">
          <div
            className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-white rounded-full transition-all duration-100 ease-out shadow-[0_0_8px_rgba(139,92,246,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="flex justify-between items-center w-full font-mono text-[10px] tracking-[0.2em] text-slate-400">
          <span className="uppercase font-semibold text-[8px] text-slate-500">Content Loading ...</span>
          <span className="font-bold text-white">
            {progress.toString().padStart(3, "0")}%
          </span>
        </div>
      </div>
    </div>
  );
}
