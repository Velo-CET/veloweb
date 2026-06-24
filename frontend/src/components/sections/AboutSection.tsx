import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-[#0a0510] overflow-hidden">
      {/* Top transition shade from HeroSection (ends in slate-900) */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none z-0" />

      <div className="absolute left-0 top-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full py-20 px-4 md:px-8 flex justify-center">
        <div className="max-w-4xl text-center flex flex-col items-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-5xl uppercase tracking-[0.15em] text-white leading-tight mb-8">
            CET&apos;S OFFICIAL
            <br />
            MODEL ROCKETRY CLUB
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            We are on a mission to launch India&apos;s aerospace future through
            competitive rocketry and advanced technology research.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm uppercase font-semibold text-white/85 hover:text-white transition-colors tracking-wider mr-2"
            >
              <span>ABOUT US</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <a
              href="/brochure.pdf"
              className="inline-block border border-violet-300/30 px-6 py-2 uppercase text-sm hover:border-white transition-all rounded-sm"
            >
              DOWNLOAD BROCHURE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
