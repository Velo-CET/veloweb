export default function ProjectNovaSection() {
  return (
    <section className="min-h-[80vh] grid md:grid-cols-2 bg-black">
      <div className="flex items-center justify-center py-20 px-8 md:px-16">
        <div className="max-w-lg">
          <h2 className="font-heading text-6xl md:text-7xl text-white mb-6">
            NOVA-1
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Our inhouse solid rocket motor.
            <br />
            Capable of producing 600N. Runs on KNSB.
          </p>
          <a
            href="/about"
            className="inline-block border border-white/30 px-6 py-2 uppercase text-sm hover:bg-white/10 transition-colors"
          >
            READ MORE ABOUT US
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center py-20 px-8">
        <div className="w-full aspect-[4/3] bg-slate-800 rounded-lg" />
      </div>
    </section>
  );
}
