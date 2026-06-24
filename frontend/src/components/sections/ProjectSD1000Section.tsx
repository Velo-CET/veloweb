import Image from "next/image";

export default function ProjectSD1000Section() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] md:h-auto md:aspect-video overflow-hidden">
      {/* Background Image: Using Next.js Image component. Since container is aspect-video (16:9) and image is 2560x1440 (16:9), it fits perfectly with no cropping. */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/SD1000.webp"
          alt="SD1000 Rocket"
          fill
          priority
          className="object-cover object-right"
        />
      </div>

      {/* Top transition shade from AboutSection (bg-[#0a0510]) */}
      <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-[#0a0510] to-transparent pointer-events-none z-1" />

      {/* Bottom transition shade to next section (fades to slate-950) */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-1" />

      {/* Dark gradient overlay (dark on the left for text readability, normal brightness on the right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-1 pointer-events-none" />

      <div className="absolute inset-0 z-10 flex items-center justify-start pl-6 pr-6 md:pl-16 lg:pl-24">
        <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-3 sm:mb-4 md:mb-6">
            SD1OOO
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8 max-w-sm sm:max-w-none">
            Our first model rocket of 1kg payload capacity with a max altitude of
            1km.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/brochure.pdf"
              className="inline-block border border-white/30 px-4 py-2 sm:px-6 sm:py-2.5 uppercase text-xs md:text-sm hover:border-white transition-all rounded-sm text-white"
            >
              DOWNLOAD BROCHURE
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs md:text-sm uppercase font-semibold text-white/85 hover:text-white transition-colors tracking-wider ml-2"
            >
              <span>VIEW IN 3D</span>
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
