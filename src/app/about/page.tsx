import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-medium mb-4">
            About Us
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Who We Are
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            VeloCET is CET&apos;s official model rocketry club — a student team designing, building, and launching high-powered rockets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              We aim to provide hands-on aerospace engineering experience to students at the College of Engineering,
              Trivandrum. Through rocket design, fabrication, and launch campaigns, we develop technical skills in
              propulsion, avionics, structures, and project management.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Our team is organized into subsystems: Propulsion, Avionics, Structures, Recovery, and Ground Support.
              Each subsystem is led by experienced students who mentor newer members through the engineering lifecycle.
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 h-80 flex items-center justify-center">
            <span className="text-slate-500 text-sm font-medium">Team Photo Placeholder</span>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Subsystems</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Propulsion", desc: "Design and testing of solid rocket motors, injectors, and nozzle systems." },
              { name: "Avionics", desc: "Flight computers, telemetry, GPS tracking, and data logging systems." },
              { name: "Structures", desc: "Airframe design, composite layup, fins, and nose cone manufacturing." },
              { name: "Recovery", desc: "Dual-deployment parachute systems, ejection charges, and descent analysis." },
              { name: "Ground Support", desc: "Launch pads, ignition systems, telemetry ground stations, and safety." },
              { name: "Business & Ops", desc: "Sponsorships, outreach, social media, and team operations." },
            ].map((sys) => (
              <div
                key={sys.name}
                className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2">{sys.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{sys.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/support"
            className="inline-flex items-center px-8 py-3 text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-full transition-all hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Support Our Mission
          </Link>
        </div>
      </div>
    </div>
  );
}
