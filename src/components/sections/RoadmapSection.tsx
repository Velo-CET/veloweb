const milestones = [
  { year: "2024 Q4", title: "Concept & Design", description: "Preliminary design review and material sourcing" },
  { year: "2025 Q1", title: "Prototyping", description: "Manufacturing and assembly of first prototypes" },
  { year: "2025 Q2", title: "Ground Testing", description: "Static fire tests and avionics validation" },
  { year: "2025 Q3", title: "Launch Campaign", description: "Full-scale launch and data recovery" },
  { year: "2025 Q4", title: "Next Gen", description: "Iterate design for SD1000 Mk-II" },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="min-h-[80vh] flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-medium mb-4">
            Our Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Project Roadmap</h2>
        </div>

        <div className="hidden md:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2" />
          <div className="grid grid-cols-5 gap-6 relative">
            {milestones.map((m, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                <div className="mb-8">
                  <span className="text-xs font-semibold text-cyan-400">{m.year}</span>
                  <h3 className="text-sm font-bold text-white mt-1 leading-tight">{m.title}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{m.description}</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 relative z-10 shrink-0" />
                <div className="mt-8" />
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden space-y-6">
          {milestones.map((m, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 shrink-0 relative z-10" />
                {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-slate-800 mt-0.5" />}
              </div>
              <div className="pb-6">
                <span className="text-xs font-semibold text-cyan-400">{m.year}</span>
                <h3 className="text-base font-bold text-white">{m.title}</h3>
                <p className="text-sm text-slate-400">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
