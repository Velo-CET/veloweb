import Link from "next/link";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { wishlistData } from "@/data/wishlist";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export default function SupportPage() {
  const topItems = wishlistData.filter((item) => !item.sponsored).slice(0, 3);

  const priorityStyles: Record<string, string> = {
    High: "bg-red-500/10 text-red-400 border border-red-500/20",
    Medium: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    Low: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  };

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

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-1" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-1" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-wider" style={spaceGrotesk.style}>
            Support Our Journey
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Every contribution brings us closer to the launch pad. Help VeloCET represent India at the Spaceport America Cup.
          </p>
        </div>

        {/* Section 1: Crowdfunding / QR Code */}
        <div className="relative overflow-hidden bg-slate-900/20 border border-slate-800/80 rounded-3xl p-8 sm:p-12 mb-20 shadow-xl">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-violet-500/5 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left: Text */}
              <div className="space-y-6 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider" style={spaceGrotesk.style}>
                  Fuel The Future
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  We are a student-run team with zero administrative overhead — every rupee goes directly toward
                  materials, electronics, propulsion testing, and launch operations. Your support helps us
                  build high-powered rockets and compete on the global stage.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  Scan the QR code to contribute via UPI, or reach out to us for other donation methods.
                </p>
              </div>

              {/* Right: QR Code Placeholder */}
              <div className="flex justify-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 border-2 border-dashed border-violet-400/40 rounded-2xl flex flex-col items-center justify-center gap-2 bg-slate-950/40">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-violet-400/40">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 14.625c0-.621.504-1.125 1.125-1.125h.008c.621 0 1.125.504 1.125 1.125v.008c0 .621-.504 1.125-1.125 1.125h-.008a1.125 1.125 0 0 1-1.125-1.125v-.008ZM18.75 14.625c0-.621.504-1.125 1.125-1.125h.008c.621 0 1.125.504 1.125 1.125v.008c0 .621-.504 1.125-1.125 1.125h-.008a1.125 1.125 0 0 1-1.125-1.125v-.008ZM18.75 19.125c0-.621.504-1.125 1.125-1.125h.008c.621 0 1.125.504 1.125 1.125v.008c0 .621-.504 1.125-1.125 1.125h-.008a1.125 1.125 0 0 1-1.125-1.125v-.008Z" />
                  </svg>
                  <span className="text-[10px] uppercase tracking-widest text-violet-400/40 font-semibold">
                    QR Code Placeholder
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="mailto:velocet@cet.ac.in"
                className="inline-block border border-violet-300/30 px-8 py-3 text-xs uppercase tracking-widest text-white hover:border-white hover:scale-105 transition-all duration-200 rounded-sm"
              >
                Contact Us for Donations
              </a>
            </div>
          </div>
        </div>

        {/* Section 2: Wishlist Summary */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider mb-4" style={spaceGrotesk.style}>
              Sponsor a Part
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Help us acquire the components and materials we urgently need. Each item you sponsor goes
              directly into building and testing our next launch vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {topItems.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/20 border border-slate-800/60 hover:border-violet-500/30 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">{item.name}</h3>
                  <span className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold ${priorityStyles[item.priority]}`}>
                    {item.priority}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold text-violet-400">{item.price}</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/50 uppercase tracking-wider text-[10px] text-slate-400">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/wishlist"
              className="inline-block border border-[#ff0000] px-8 py-3 text-xs uppercase tracking-widest text-white hover:text-[#ff0000] hover:scale-110 transition-all duration-300 rounded-full"
            >
              View Full Wishlist
            </Link>
          </div>
        </div>

        {/* Bottom CTA: Corporate Sponsorship */}
        <div className="text-center py-10 border-t border-slate-800/60">
          <p className="text-sm text-slate-400 mb-6">
            Looking for corporate partnership tiers?
          </p>
          <Link
            href="/sponsorship"
            className="inline-block border border-violet-300/30 px-8 py-3 text-xs uppercase tracking-widest text-white hover:border-white hover:scale-105 transition-all duration-200 rounded-sm"
          >
            View Sponsorship Packages
          </Link>
        </div>

      </div>
    </div>
  );
}
