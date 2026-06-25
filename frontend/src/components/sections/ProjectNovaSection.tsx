import Image from "next/image";

export default function ProjectNovaSection() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] md:h-auto md:aspect-video overflow-hidden">
      {/* Background Image: Using Next.js Image component. Since container is aspect-video (16:9) and image is 1920x1080 (16:9), it fits perfectly with no cropping. */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/STFNova1.webp"
          alt="Nova-1 Motor"
          fill
          className="object-cover object-right scale-x-[-1]"
        />
      </div>

      {/* Top transition shade from preceding sections (fades from slate-950) */}
      <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-1" />

      {/* Bottom transition shade to next section (fades to slate-950) */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-1" />

      {/* Dark gradient overlay (dark on the right for text readability, normal brightness on the left) */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/50 to-transparent z-1 pointer-events-none" />

      <div className="absolute inset-0 z-10 flex items-center justify-end pl-6 pr-6 md:pr-16 lg:pr-24">
        <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl text-right">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-3 sm:mb-4 md:mb-6">
            NOVA-1
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8 max-w-sm sm:max-w-none">
            Our inhouse solid rocket motor.
            <br />
            Capable of producing 600N. Runs on KNSB.
          </p>
          <a
            href="/about"
            className="inline-block border border-violet-300/30 px-4 py-2 sm:px-6 sm:py-2.5 uppercase text-xs md:text-sm hover:border-white transition-all rounded-sm text-white"
          >
            READ MORE ABOUT US
          </a>
        </div>
      </div>
    </section>
  );
}
