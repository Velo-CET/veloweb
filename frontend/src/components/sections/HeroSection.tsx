import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/landing page.jpeg"
          alt="Landing Page Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-slate-950/50" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-transparent to-black/40" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full px-4">
        <h1 className="text-2xl md:text-6xl lg:text-6xl uppercase font-bold text-white tracking-[0.05em] sm:tracking-[0.15em] animate-glow-breathing leading-tight">
          <span className="block -translate-x-2 md:-translate-x-10">
            DEFYING GRAVITY,
          </span>
          <span className="block translate-x-2 md:translate-x-10 mt-2 md:mt-4">
            DEFINING INNOVATION
          </span>
        </h1>
      </div>

      <div className="absolute bottom-8 left-8 z-10 hidden md:flex gap-5 items-center">
        <ScrollReveal variant="fadeIn" delay={500} duration={800} className="flex gap-5 items-center">
          <a
            href="https://www.instagram.com/velo_cet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 transition-transform"
          >
            <svg
              className="w-6 h-6 text-white/70 hover:text-pink-500 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/velo-cet/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform"
          >
            <svg
              className="w-6 h-6 text-white/70 hover:text-blue-400 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@Velo_CET"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:scale-110 transition-transform"
          >
            <svg
              className="w-6 h-6 text-white/70 hover:text-red-500 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </ScrollReveal>
      </div>

      <ScrollReveal variant="fadeInRight" delay={700} duration={800} className="absolute bottom-8 right-8 z-10 max-md:bottom-8 max-md:left-1/2 max-md:-translate-x-1/2 block">
        <Link
          href="/scout"
          className="block transition-transform duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-lg py-4 px-8 border border-white/10 flex items-center gap-6 max-md:justify-center hover:bg-white/15 transition-colors">
            <div className="flex flex-col items-center">
              <span className="text-[10px] max-md:text-[8px] uppercase tracking-widest text-white/70">WEEK</span>
              <span className="text-4xl max-md:text-2xl font-bold text-white leading-none">1</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-sm max-md:text-[10px] text-white leading-tight font-medium md:font-normal">
              SCOUT
              <br />
              Recruitment
            </div>
          </div>
        </Link>
      </ScrollReveal>
    </section>
  );
}
