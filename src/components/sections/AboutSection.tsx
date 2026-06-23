import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-[#0a0510] overflow-hidden">
      <div className="absolute left-0 top-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 pl-8 md:pl-16 w-full py-20">
        <div className="max-w-4xl">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-[0.15em] text-white leading-tight mb-8">
            CET&apos;S OFFICIAL
            <br />
            MODEL ROCKETRY CLUB
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
            We are on a mission to launch India&apos;s aerospace future through
            competitive rocketry and advanced technology research.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="inline-block border border-white/30 px-6 py-2 uppercase text-sm hover:bg-white/10 transition-colors"
            >
              ABOUT US
            </Link>
            <a
              href="/brochure.pdf"
              className="inline-block border border-white/30 px-6 py-2 uppercase text-sm hover:bg-white/10 transition-colors"
            >
              DOWNLOAD THE BROCHURE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
