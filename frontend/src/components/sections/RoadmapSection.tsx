export default function RoadmapSection() {
  const nodes = [
    {
      title: "CLUB FOUNDED",
      subtitle: "Aug 2025",
      description: "Established CET's official rocketry body to nurture future aerospace leaders.",
    },
    {
      title: "RECRUITMENT",
      subtitle: "Jan 2026",
      description: "Onboarded passionate students across avionics, structures, and propulsion.",
    },
    {
      title: "SD1OOO",
      subtitle: "Our first model rocket",
      description: "Launched our first 1kg payload solid rocket, reaching a 1km ceiling.",
    },
    {
      title: "COMPETITION MODEL",
      subtitle: "Sept 2026",
      description: "Developing complex system architectures for national rocketry challenges.",
    },
    {
      title: "ADVANCED TECH RESEARCH",
      subtitle: "Landing Rocket, Propulsive technologies",
      description: "Researching vertical takeoff/landing control laws and hybrid fuels.",
    },
    {
      title: "SPACEPORT 2027",
      subtitle: "Participation in the prestigious competition",
      description: "Representing CET globally at the premier international rocketry cup.",
    },
  ];

  return (
    <section id="roadmap" className="min-h-[80vh] flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-24">
          THE ROADMAP
        </h2>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/20 -translate-y-1/2 hidden md:block" />

          {/* Desktop timeline */}
          <div className="hidden md:grid grid-cols-6 gap-4 relative">
            {nodes.map((node, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative h-48 flex items-center justify-center group cursor-pointer">
                  {/* Dot */}
                  <div className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,1)] group-hover:scale-110 relative z-10" />

                  {/* Vertical connector line (main text) */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/20 ${
                      isEven ? "bottom-1/2 mb-2" : "top-1/2 mt-2"
                    }`}
                  />

                  {/* Vertical connector line (description, only on hover) */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/10 transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                      isEven ? "top-1/2 mt-2" : "bottom-1/2 mb-2"
                    }`}
                  />

                  {/* Content Card (Title & Subtitle) */}
                  <div
                    className={`absolute left-0 right-0 px-2 text-center ${
                      isEven ? "bottom-1/2 mb-12" : "top-1/2 mt-12"
                    }`}
                  >
                    <p className="text-xs font-semibold text-white tracking-wider mb-1">
                      {node.title}
                    </p>
                    <p className="text-[10px] text-slate-400 leading-normal max-w-[150px] mx-auto">
                      {node.subtitle}
                    </p>
                  </div>

                  {/* Description Card (Appears opposite to the title/subtitle card on hover) */}
                  <div
                    className={`absolute left-0 right-0 px-4 text-center transition-all duration-300 pointer-events-none ${
                      isEven
                        ? "top-1/2 mt-12 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                        : "bottom-1/2 mb-12 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    }`}
                  >
                    <p className="text-[10.5px] text-slate-300 leading-relaxed max-w-[170px] mx-auto bg-slate-950/90 backdrop-blur-md p-3 rounded-lg border border-white/10 shadow-xl">
                      {node.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden relative pl-6 space-y-8">
            {/* Vertical timeline line for mobile */}
            <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-white/20" />

            {nodes.map((node, index) => (
              <div key={index} className="relative flex flex-col pl-6 group cursor-pointer">
                {/* Dot */}
                <div className="absolute left-[3px] top-1.5 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.3)] transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(255,255,255,1)] group-hover:scale-110 z-10" />
                
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wider">
                    {node.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {node.subtitle}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-2 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-16 group-hover:opacity-100 leading-relaxed">
                    {node.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
