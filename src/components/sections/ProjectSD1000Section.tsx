export default function ProjectSD1000Section() {
  return (
    <section className="min-h-[80vh] grid md:grid-cols-2"
      style={{
        backgroundImage: "url('/SD1000.webp')",
        backgroundSize: 'cover',
        width: '100%'
      }}
    >
      <div className="flex items-center justify-center py-20 px-8 md:px-16">
        <div className="max-w-lg">
          <h2 className="font-heading text-6xl md:text-7xl text-white mb-6">
            SD1OOO
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Our first model rocket of 1kg payload capacity with a max altitude of
            1km.
          </p>
          <a
            href="/brochure.pdf"
            className="inline-block border border-white/30 px-6 py-2 uppercase text-sm hover:bg-white/10 transition-all rounded-sm"
          >
            DOWNLOAD BROCHURE
          </a>
        </div>
      </div>

    </section>
  );
}
