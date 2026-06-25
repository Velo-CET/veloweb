import WishlistTable from "@/components/WishlistTable";
import { wishlistData } from "@/data/wishlist";
import Link from "next/link";

export default function WishlistPage() {
  return (
    <div className="pt-24 pb-20 px-4 min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-violet-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-950/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Wishlist
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-wider">
            Sponsor Wishlist
          </h1>
          
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Support VeloCET directly by sponsoring specific parts, dev boards, and tooling that our subsystems need to fabricate our launch vehicles.
          </p>
        </div>

        {/* Wishlist Table Container */}
        <div className="mb-20">
          <WishlistTable items={wishlistData} />
        </div>

        {/* Call to action or return back to sponsorship */}
        <div className="text-center py-10 border-t border-slate-900/60">
          <p className="text-sm text-slate-400 mb-6">
            Looking for general corporate partnership tiers?
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
