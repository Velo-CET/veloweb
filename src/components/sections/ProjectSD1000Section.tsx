export default function ProjectSD1000Section() {
  return (
    <section className="relative min-h-[80vh] flex items-center w-full overflow-hidden">
      <div className="absolute inset-0 bg-slate-700" />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-[500px] bg-slate-600/50 hidden lg:block" />

      <div className="relative z-10 max-w-2xl pl-8 md:pl-16 py-20">
        <h2 className="font-heading text-6xl md:text-8xl text-white mb-6">
          SD1000
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          Our first model rocket of 1kg payload capacity with a max altitude of
          1km.
        </p>
        <a
          href="/brochure.pdf"
          className="inline-block border border-white/30 px-6 py-2 uppercase text-sm hover:bg-white/10 transition-colors"
        >
          DOWNLOAD THE BROCHURE
        </a>
      </div>
    </section>
  );
}
