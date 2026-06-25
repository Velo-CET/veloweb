import Link from "next/link";

export default function SponsorWishlistSection() {
  return (
    <section
      id="support-mission"
      className="relative w-full pt-0 pb-20 px-4 md:px-8 overflow-hidden bg-transparent flex items-center justify-center"
    >
      <div className="relative z-10 w-full max-w-4xl text-center space-y-6">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-[1px] w-12 bg-white/20" />
          <p className="px-3 py-1 bg-transparent border border-white/20 text-white text-[10px] uppercase tracking-widest font-semibold rounded-sm">
            Wishlist
          </p>
          <div className="h-[1px] w-12 bg-white/20" />
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wider">
          Support Our Mission
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Help VeloCET build better rockets by sponsoring essential equipment, electronics, manufacturing materials, and testing hardware.
        </p>

        <div className="pt-4">
          <Link
            href="/wishlist"
            className="inline-block border border-[#ff0000] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white hover:text-[#ff0000] hover:scale-110 transition-all duration-300 rounded-full"
          >
            View Wishlist
          </Link>
        </div>
      </div>
    </section>
  );
}
