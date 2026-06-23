export default function SponsorshipsSection() {
  return (
    <section
      id="support"
      className="relative w-full min-h-[80vh] flex items-center justify-center p-4 md:p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-slate-900 z-0" />

      <div className="absolute right-0 top-0 w-1/3 h-2/3 bg-slate-800/50 z-0 hidden md:block" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0510] to-transparent z-0" />

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
              className="inline-block border border-white/30 px-6 py-2 uppercase text-sm hover:bg-white/10 transition-colors text-center"
            >
              WATCH &amp; SUPPORT US
            </a>
            <a
              href="/sponsorships"
              className="inline-block bg-[#5c543b] text-white px-6 py-2 uppercase text-sm hover:opacity-90 transition-opacity text-center"
            >
              SPONSORSHIP TIERS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
