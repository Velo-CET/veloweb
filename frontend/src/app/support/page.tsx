import Link from "next/link";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import WishlistTable from "@/components/WishlistTable";
import { getWishlistItems } from "@/services/sheets";
import { WishlistItem } from "@/data/wishlist";
import StarfieldCanvas from "@/components/StarfieldCanvas";

export const dynamic = "force-dynamic";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export default async function SupportPage() {
  let items: WishlistItem[] = [];
  let lastUpdated: string | null = null;
  let errorMsg = "";

  try {
    const res = await getWishlistItems();
    items = res.items;
    lastUpdated = res.lastUpdated;
  } catch (err: any) {
    console.error("Sponsor sheet fetch failed:", err);
    errorMsg = err.message || "Failed to load live wishlist items from the sponsor sheet.";
  }
  return (
    <div className="relative pt-24 pb-20 px-4 min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Background starry sky */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarfieldCanvas />
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
            Every contribution brings us closer to the launch pad. Help VeloCET represent India at the{" "}
            <a
              href="https://spaceportamericacup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-200 hover:text-violet-300 hover:underline transition-colors font-semibold"
            >
              Spaceport America Cup
            </a>.
          </p>
        </div>

        {/* Section 2: Crowdfunding / QR Code */}
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
                  We are a student-run team with zero administrative overhead - every rupee goes directly toward
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

        {/* Section 1: Wishlist Summary */}
        <div id="sponsor-a-part" className="mb-20">
          <div className="text-center mb-12">
            <h2 className={`text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider ${lastUpdated ? "mb-2" : "mb-4"}`} style={spaceGrotesk.style}>
              Sponsor a Part
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-4">
              We urgently need these items for our current progress. The list provided is actively maintained and updated
            </p>
            {lastUpdated && (
              <p className="text-xs text-slate-500 text-center uppercase tracking-widest font-mono">
                {lastUpdated}
              </p>
            )}
          </div>

          <div className="max-w-5xl mx-auto">
            {errorMsg ? (
              <div className="p-8 rounded-2xl border border-red-500/20 bg-red-950/10 text-center space-y-4 max-w-2xl mx-auto backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-rose-500 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Failed to Load Wishlist</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  {errorMsg}
                </p>
              </div>
            ) : (
              <WishlistTable items={items} />
            )}
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
