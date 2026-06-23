export default function SponsorshipsSection() {
  return (
    <section
      id="support"
      className="relative w-full min-h-[80vh] flex items-center justify-center p-4 md:p-8 overflow-hidden"
    >
      {/* Semi-transparent overlay to let the starry sky background show through while keeping text readable */}
      <div className="absolute inset-0 bg-slate-950/40 z-0" />

      <div className="absolute right-0 top-0 w-1/3 h-2/3 bg-slate-800/30 z-0 hidden md:block" />

      <div className="relative z-10 w-full max-w-4xl">
        <p className="font-heading text-white uppercase text-sm md:text-base mb-4 tracking-wider">
          SUPPORT US
        </p>

        <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
          <h2 className="font-heading text-3xl md:text-5xl text-white leading-tight">
            Fuel Our Journey To Spaceport America Cup 2027.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mt-4">
            Help us push the boundaries of student research and represent our
            college on a global stage by backing financially.
          </p>

          <div className="mt-6 text-gray-300 space-y-2 text-lg">
            <p>- Overcome financial barriers</p>
            <p>- Scale our payload research</p>
            <p>- Represent the college globally</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-block border border-violet-300/30 px-6 py-2 uppercase text-sm hover:bg-violet-500/20 transition-all text-center rounded-sm"
            >
              WATCH &amp; SUPPORT US
            </a>
            <a
              href="/sponsorships"
              className="inline-block bg-violet-900/50 text-violet-100 px-6 py-2 uppercase text-sm hover:bg-violet-800/50 transition-colors text-center rounded-sm"
            >
              SPONSORSHIP TIERS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
