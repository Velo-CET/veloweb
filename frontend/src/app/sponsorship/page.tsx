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
  { name: "Logo on website", bronze: true, silver: true, gold: true, title: true },
  { name: "Social media promo", bronze: true, silver: true, gold: true, title: true },
  { name: "Logo on rocket / apparel", bronze: false, silver: true, gold: true, title: true },
  { name: "Recruitment access", bronze: false, silver: true, gold: true, title: true },
  { name: "Exclusive event access", bronze: false, silver: false, gold: true, title: true },
  { name: "Naming rights", bronze: false, silver: false, gold: false, title: true },
];

const corporateTiers = [
  {
    name: "Title Sponsor",
    price: "₹2,00,000+",
    borderClass: "border-amber-500/50",
    shimmerColor: "rgba(245, 158, 11, 0.08)",
    benefits: [
      "Largest logo on rocket, apparel & merchandise",
      "Exclusive naming rights for flagship vehicle & events",
      "Top billing in press & media coverage",
      "Dedicated social media campaigns",
      "Branding at workshops, outreach & VeloDay",
      "Invitations to static fire tests & launch campaigns",
      "Priority recruitment & internship access",
      "Exclusive industry-category sponsorship",
    ],
  },
  {
    name: "Gold Sponsor",
    price: "₹1,00,000+",
    borderClass: "border-yellow-400/60",
    glow: true,
    shimmerColor: "rgba(250, 204, 21, 0.08)",
    benefits: [
      "Large logo on rocket fins & promotional materials",
      "Logo on team apparel & event backdrops",
      "Featured social media campaigns",
      "Recognition at competitions, workshops & tech talks",
      "Branding at selected events",
      "Certificate of appreciation",
      "Student recruitment & internship access",
      "Invitations to project demos & testing milestones",
    ],
  },
  {
    name: "Silver Sponsor",
    price: "₹50,000 - ₹1,00,000",
    borderClass: "border-slate-400/40",
    shimmerColor: "rgba(148, 163, 184, 0.08)",
    benefits: [
      "Logo on team apparel, website & club profiles",
      "Social media & event material recognition",
      "Mention in technical reports & presentations",
      "Certificate of appreciation",
      "Invitations to selected workshops & outreach events",
    ],
  },
  {
    name: "Bronze Sponsor",
    price: "₹25,000 - ₹50,000",
    borderClass: "border-orange-700/50",
    shimmerColor: "rgba(194, 65, 12, 0.08)",
    benefits: [
      "Name & logo in sponsorship reports & project docs",
      "Recognition on event posters & promotional material",
      "Social media shout-outs",
      "Acknowledgment on VeloCET website",
      "Recognition during club events & workshops",
    ],
  },
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
              Partnering with VeloCET provides your organization with unique branding exposure, strategic CSR alignment, and direct recruitment access to top-tier STEM engineering students. 
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Through this collaboration, partners receive direct access to top aerospace, structures, software, and electronics talent, alongside prominent brand visibility at local, national and global launches and events. We offer tailored sponsorship tiers: Title, Gold, Silver, and Bronze; to match your organization's goals. The details are given below.
            </p>
          </div>

          {/* Corporate Tiers Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {corporateTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-slate-900/20 border ${tier.borderClass} rounded-2xl p-6 flex flex-col hover:scale-[1.02] transition-all duration-300 group overflow-hidden relative`}
                style={tier.glow ? { boxShadow: "0 0 18px -2px rgba(250, 204, 21, 0.25)" } : undefined}
              >
                <div
                  className="absolute inset-0 pointer-events-none -translate-x-full group-hover:translate-x-full transition-none group-hover:transition-all duration-700 ease-in-out"
                  style={{
                    background: `linear-gradient(105deg, transparent 30%, ${tier.shimmerColor} 45%, transparent 60%)`,
                  }}
                />
                <div className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-1">{tier.name}</div>
                <div className="text-lg font-extrabold text-white mb-4">{tier.price}</div>
                <ul className="space-y-2 flex-1">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="text-xs text-slate-400 leading-relaxed flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5 shrink-0">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
                      Bronze <span className="block text-[10px] text-slate-500 normal-case mt-0.5">₹25k - ₹50k</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-xs font-bold uppercase tracking-widest text-white">
                      Silver <span className="block text-[10px] text-slate-500 normal-case mt-0.5">₹50k - ₹1L</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-xs font-bold uppercase tracking-widest text-white">
                      Gold <span className="block text-[10px] text-slate-500 normal-case mt-0.5">₹1L - ₹2L</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-s font-bold uppercase tracking-widest text-white">
                      Title <span className="block text-[10px] text-slate-500 normal-case mt-0.5">₹2L+</span>
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
                        {feature.title ? <CheckIcon /> : <CrossIcon />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col items-center gap-6 mt-10">
              <div className="flex items-center gap-6">
                <button className="inline-block border border-violet-300/30 px-8 py-3 text-xs uppercase tracking-widest text-white hover:border-white hover:scale-105 transition-all duration-200 rounded-sm">
                  Brochure
                </button>

                <a
                  href="mailto:velocet@cet.ac.in"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400 hover:text-white hover:scale-105 transition-all duration-200"
                >
                  Send Us an Email
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </a>
              </div>
              <div className="text-xs text-center mt-8">
                <p className="text-slate-300 mb-2">For partnership enquiries, reach out directly to our strategic and financial leads</p>
                <div className="space-y-0.5">
                  <a href="tel:+919671317977" className="text-slate-400 hover:text-white transition-colors">Strategic Innovation Lead: +91 96713 17977</a>
                  <br />
                  <a href="tel:+918078311418" className="text-slate-400 hover:text-white transition-colors">Chief Financial Officer: +91 8078 311 418</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
