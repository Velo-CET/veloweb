"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = ["ABOUT US", "PROJECTS", "BROCHURE"];

  return (
    <>
      <nav
        className={`fixed top-0 w-full p-8 z-50 flex items-center justify-between transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center gap-3">
          <button
            className="md:hidden flex flex-col items-start gap-[5px]"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-white rounded" />
            <span className="block w-[18px] h-[2px] bg-white rounded" />
          </button>

          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-white/20 rounded" />
            <span className="text-sm font-semibold tracking-wider font-heading">Logo</span>
          </div>
        </div>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs uppercase tracking-widest text-white hover:text-white/70 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <button className="hidden md:block border border-white/30 rounded px-6 py-2 text-xs uppercase tracking-widest text-white hover:bg-white/10 transition-colors">
          CONTACT US
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute left-0 top-0 h-full w-64 bg-slate-900 p-8 flex flex-col gap-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-white/70 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm uppercase tracking-widest text-white hover:text-white/70 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            <button className="border border-white/30 rounded px-6 py-2 text-xs uppercase tracking-widest text-white hover:bg-white/10 transition-colors w-fit">
              CONTACT US
            </button>
          </div>
        </div>
      )}
    </>
  );
}
