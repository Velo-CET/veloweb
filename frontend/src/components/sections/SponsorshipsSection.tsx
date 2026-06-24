export default function SponsorshipsSection() {
  return (
    <section
      id="support"
      className="relative w-full min-h-[80vh] flex items-center justify-center p-4 md:p-8 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-4xl px-4 md:px-0">
        <p className="font-heading text-white uppercase text-sm md:text-base mb-6 tracking-wider">
          SUPPORT US
        </p>

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
            className="inline-block border border-violet-300/30 px-6 py-2 uppercase text-sm hover:border-white transition-all text-center rounded-sm text-white"
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
    </section>
  );
}
