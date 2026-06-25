import Link from "next/link";

export default function SponsorshipsSection() {
  return (
    <section
      id="support"
      className="relative w-full min-h-[80vh] flex items-center justify-center p-4 md:p-8 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-4xl border border-transparent hover:border-pink-500/80 p-6 sm:p-10 md:p-12 rounded-2xl transition-all duration-500 group cursor-pointer">
        <p className="font-heading text-white group-hover:text-pink-500 transition-colors duration-500 uppercase text-xs sm:text-sm mb-4 sm:mb-6 tracking-wider">
          SUPPORT US
        </p>

        <h2 className="font-heading text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
          Fuel Our Journey To Spaceport America Cup 2027.
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mt-4 leading-relaxed">
          We are a student body. Our till now projects are self funded. We need your help and financial backing to represent India on the global stage.
        </p>

        {/* <div className="mt-6 text-gray-300 space-y-2 text-lg">
          <p>- Overcome financial barriers</p>
          <p>- Scale our payload research</p>
          <p>- Represent the college globally</p>
        </div> */}

        <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-stretch gap-4">
          <a
            href="#"
            className="w-full sm:w-auto inline-block border border-violet-300/30 px-5 py-2 uppercase text-xs hover:border-white transition-all text-center rounded-sm text-white"
          >
            WATCH &amp; SUPPORT US
          </a>
          <Link
            href="/sponsorship"
            className="flex items-center justify-center sm:justify-start gap-1.5 text-xs uppercase font-semibold text-white/85 hover:text-pink-500 transition-colors tracking-wider sm:ml-2"
          >
            <span>SPONSORSHIP TIERS</span>
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
        </div>
      </div>
    </section>
  );
}
