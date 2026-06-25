import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-emerald-500 mx-auto">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const CrossIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-rose-500/30 mx-auto">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
  </svg>
);

const comparisonFeatures = [
  { name: "Logo on website", bronze: true, silver: true, gold: true, platinum: true },
  { name: "Social media promo", bronze: true, silver: true, gold: true, platinum: true },
  { name: "Logo on rocket models", bronze: false, silver: false, gold: true, platinum: true },
  { name: "Exclusive event access", bronze: false, silver: false, gold: true, platinum: true },
  { name: "Naming rights on projects", bronze: false, silver: false, gold: false, platinum: true },
];

export default function SponsorshipPage() {
  return (
    <div className="relative pt-24 pb-20 px-4 min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Background starry sky */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/dark_sky.webp"
          alt="Starry Sky Background"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      {/* Top fade-in transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-1" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-1" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-20 relative">

          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-950/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Support & Sponsorship
          </div> */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-wider" style={spaceGrotesk.style}>
            Fuel Our Ambition
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Align your brand with the next generation of aerospace talent, or make an individual contribution to support our hands-on engineering research.
          </p>
        </div>

        {/* Section 1: Individual Support */}
        {/* <div className="relative overflow-hidden bg-slate-900/20 border border-slate-800/80 rounded-3xl p-8 sm:p-12 mb-20 shadow-xl">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-violet-500/5 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center sm:text-left mb-10">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider mb-4">Individual Contributions</h2>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base max-w-3xl">
                Every dollar goes directly toward materials, components, and launch operations. We are a student-run club with zero administrative overhead — 100% of donations fund our model rockets.
              </p>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {individualTiers.map((tier) => (
                <div
                  key={tier.label}
                  className="bg-slate-950/40 border border-slate-800/60 hover:border-violet-500/30 rounded-2xl p-6 text-center hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="text-3xl font-extrabold text-violet-400 mb-1 group-hover:scale-105 transition-transform">{tier.amount}</div>
                  <div className="text-xs font-bold text-white uppercase tracking-widest mb-3">{tier.label}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{tier.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="inline-block border border-violet-300/30 px-8 py-3 text-xs uppercase tracking-widest text-white hover:border-white hover:scale-105 transition-all duration-200 rounded-sm">
                Donate Now
              </button>
            </div>
          </div>
        </div> */}

        {/* Corporate Sponsorships */}
        <div className="mb-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider" style={spaceGrotesk.style}>Industry Partnerships</h2>

            </div>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Partnering with VeloCET provides your organization with unique branding exposure, CSR alignment, and direct recruitment access to top-tier STEM engineering students.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Through this collaboration, partners receive direct access to top aerospace, structures, software, and electronics talent, alongside prominent brand visibility at local and national launches and events. We offer logo placement on high-end models and team merchandise, creating a clear CSR alignment with pioneering student engineering projects.
            </p>
          </div>

          {/* Corporate Tiers Comparison Table */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-8 text-center uppercase tracking-wider" style={spaceGrotesk.style}>Sponsorship Tiers Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left bg-transparent">
                <thead>
                  <tr className="bg-transparent">
                    <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-widest text-slate-400">
                      Sponsorship Perks
                    </th>
                    <th className="p-4 sm:p-5 text-center text-xs font-bold uppercase tracking-widest text-white">
                      Bronze <span className="block text-[10px] text-slate-500 normal-case mt-0.5">₹5k - ₹10k</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-xs font-bold uppercase tracking-widest text-white">
                      Silver <span className="block text-[10px] text-slate-500 normal-case mt-0.5"> ₹10k -  ₹30k</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-xs font-bold uppercase tracking-widest text-white">
                      Gold <span className="block text-[10px] text-slate-500 normal-case mt-0.5"> ₹30k -  ₹50k</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-s font-bold uppercase tracking-widest text-white">
                      Platinum <span className="block text-[10px] text-slate-500 normal-case mt-0.5"> ₹50k+</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-transparent">
                  {comparisonFeatures.map((feature, i) => (
                    <tr key={i}>
                      <td className="p-4 sm:p-5 text-xs sm:text-sm font-medium text-slate-300">
                        {feature.name}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        {feature.bronze ? <CheckIcon /> : <CrossIcon />}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        {feature.silver ? <CheckIcon /> : <CrossIcon />}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        {feature.gold ? <CheckIcon /> : <CrossIcon />}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        {feature.platinum ? <CheckIcon /> : <CrossIcon />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-center mt-10 relative">
              <div className="relative group/btn inline-block">
                <button className="inline-block border border-violet-300/30 px-8 py-3 text-xs uppercase tracking-widest text-white hover:border-white hover:scale-115 transition-all duration-200 rounded-sm">
                  DONATE
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 md:top-1/2 md:-translate-y-1/2 md:left-full md:translate-x-0 md:ml-4 w-64 p-3 bg-slate-900 border border-slate-800 text-[11px] text-slate-300 rounded-lg opacity-0 pointer-events-none group-hover/btn:opacity-100 transition-opacity duration-300 shadow-xl z-30 text-center md:text-left leading-relaxed">
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-8 border-transparent border-b-slate-900 md:hidden" />
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-slate-900 hidden md:block" />
                  Tiers will be auto applied and we will contact you for the proceedings
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
