"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["ABOUT US", "PROJECTS", "SUPPORT"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full px-4 md:px-8 py-4 md:py-8 z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="relative flex w-full items-center justify-between">
          <a href="#" className="flex items-center shrink-0">
            <img
              src="/VeloCET-white-logo.svg"
              alt="VeloCET"
              className="h-8 w-auto object-contain"
            />
          </a>

          <button
            className="md:hidden flex flex-col items-end gap-[5px] shrink-0"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-white rounded" />
            <span className="block w-[18px] h-[2px] bg-white rounded" />
          </button>

          <div className="hidden md:flex gap-8 justify-center absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs uppercase tracking-widest text-white hover:text-violet-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <button className="hidden md:block border border-violet-300/30 px-6 py-2 text-xs uppercase tracking-widest text-white hover:bg-violet-500/20 transition-all rounded-sm">
            CONTACT US
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute left-0 top-0 h-full w-64 bg-slate-900 p-8 flex flex-col gap-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-white/70 hover:text-violet-400 transition-all"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 4L16 16M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm uppercase tracking-widest text-white hover:text-violet-400 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}

            <button className="border border-violet-300/30 px-6 py-2 text-xs uppercase tracking-widest text-white hover:bg-violet-500/20 transition-all w-fit rounded-sm">
              CONTACT US
            </button>
          </div>
        </div>
      )}
    </>
  );
}
