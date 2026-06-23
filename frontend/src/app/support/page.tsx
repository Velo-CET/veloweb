import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-medium mb-4">
            Support Us
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Fuel Our Ambition
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Your contribution helps us build better rockets and inspire more students.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12 mb-12 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">Why Support Us?</h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Every dollar goes directly toward materials, components, and launch operations. We&apos;re a
            student-run club with zero administrative overhead — 100% of donations fund our engineering.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { amount: "$10", label: "Supporter", desc: "Covers materials for a fin set" },
              { amount: "$50", label: "Builder", desc: "Funds a parachute deployment system" },
              { amount: "$100", label: "Engineer", desc: "Sponsors a complete avionics bay" },
            ].map((tier) => (
              <div
                key={tier.label}
                className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-black text-cyan-400 mb-1">{tier.amount}</div>
                <div className="text-sm font-semibold text-white uppercase tracking-wider mb-2">{tier.label}</div>
                <p className="text-xs text-slate-400">{tier.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center px-10 py-4 text-base font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-full transition-all hover:shadow-lg hover:shadow-cyan-500/25">
              Donate Now
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-slate-400 mb-4">
            Interested in corporate partnerships?
          </p>
          <Link
            href="/sponsorships"
            className="inline-flex items-center px-8 py-3 text-sm font-semibold text-cyan-400 border border-cyan-600 hover:bg-cyan-600/10 rounded-full transition-colors"
          >
            View Sponsorships
          </Link>
        </div>
      </div>
    </div>
  );
}
