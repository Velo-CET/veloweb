export default function SponsorshipsPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-medium mb-4">
            Corporate Sponsorships
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Partner With Us
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Align your brand with the next generation of aerospace talent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Why Sponsor VeloCET?</h2>
            <ul className="space-y-4">
              {[
                "Access to top engineering talent for recruitment",
                "Brand visibility at launches and events",
                "Logo placement on rockets and team merchandise",
                "Technical collaboration opportunities",
                "STEM outreach and CSR alignment",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 h-80 flex items-center justify-center">
            <span className="text-slate-500 text-sm font-medium">Sponsorship Impact Graphic</span>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Sponsorship Tiers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Bronze",
                amount: "$1,000",
                color: "from-amber-700/20 to-amber-900/20",
                border: "border-amber-700/30",
                text: "text-amber-300",
                perks: ["Logo on website", "Social media shoutout", "Thank you in launch report"],
              },
              {
                name: "Silver",
                amount: "$5,000",
                color: "from-slate-300/20 to-slate-400/20",
                border: "border-slate-400/30",
                text: "text-slate-200",
                perks: ["All Bronze perks", "Logo on team apparel", "Behind-the-scenes content access"],
              },
              {
                name: "Gold",
                amount: "$10,000",
                color: "from-yellow-400/20 to-yellow-600/20",
                border: "border-yellow-500/30",
                text: "text-yellow-300",
                perks: ["All Silver perks", "Logo on rocket airframe", "VIP launch day invitation"],
              },
              {
                name: "Platinum",
                amount: "$25,000+",
                color: "from-cyan-400/20 to-cyan-600/20",
                border: "border-cyan-400/30",
                text: "text-cyan-300",
                perks: ["All Gold perks", "Naming rights on subsystem", "Exclusive recruitment event", "Co-branded content series"],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border ${tier.border} bg-gradient-to-b ${tier.color} p-6 flex flex-col hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className={`text-3xl font-black text-white mb-1 ${tier.text}`}>{tier.amount}</div>
                <div className={`text-sm font-semibold uppercase tracking-wider mb-4 ${tier.text}`}>
                  {tier.name}
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.perks.map((perk, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-3.5 h-3.5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl transition-colors">
                  Get in Touch
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
