export default function RoadmapSection() {
  const topNodes = [
    "CLUB FOUNDED (Aug 2025)",
    "SD1OOO (Our first model rocket)",
    "SPACEPORT 2027 (Participation in the prestigious competition)"
  ];

  const bottomNodes = [
    "RECRUITMENT (Jan 2026)",
    "COMPETITION MODEL (Sept 2026)",
    "ADVANCED TECH RESEARCH (Landing Rocket, Propulsive technologies)"
  ];

  return (
    <section id="roadmap" className="min-h-[80vh] flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-16">
          THE ROADMAP
        </h2>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/30 -translate-y-1/2" />

          <div className="hidden md:grid grid-cols-6 gap-4 relative">
            {topNodes.map((node, index) => (
              <div key={`top-${index}`} className="flex flex-col items-center text-center relative">
                <div className="mb-4">
                  <p className="text-sm text-slate-300">{node}</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-blue-500 relative z-10" />
                <div className="mt-4" />
              </div>
            ))}

            {bottomNodes.map((node, index) => (
              <div key={`bottom-${index}`} className="flex flex-col items-center text-center relative">
                <div className="mt-4">
                  <p className="text-sm text-slate-300">{node}</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-blue-500 relative z-10" />
                <div className="mb-4" />
              </div>
            ))}
          </div>

          <div className="md:hidden space-y-8">
            {[...topNodes, ...bottomNodes].map((node, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 shrink-0" />
                <div className="text-sm text-slate-300">{node}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
