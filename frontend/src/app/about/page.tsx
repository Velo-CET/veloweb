import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const subsystems = [
    {
      name: "Propulsion",
      desc: "Design and testing of solid rocket motors, injectors, and nozzle systems.",
      textColor: "group-hover:text-violet-400",
      iconColor: "text-violet-400",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
        </svg>
      )
    },
    {
      name: "Avionics",
      desc: "Flight computers, telemetry, GPS tracking, and data logging systems.",
      textColor: "group-hover:text-cyan-400",
      iconColor: "text-cyan-400",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21M6.75 6.75h10.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V9a2.25 2.25 0 0 1 2.25-2.25Z" />
        </svg>
      )
    },
    {
      name: "Structures",
      desc: "Airframe design, composite layup, fins, and nose cone manufacturing.",
      textColor: "group-hover:text-emerald-400",
      iconColor: "text-emerald-400",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      )
    },
    {
      name: "Payload",
      desc: "Launch pads, ignition systems, telemetry ground stations, and safety.",
      textColor: "group-hover:text-orange-400",
      iconColor: "text-orange-400",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      )
    },
    {
      name: "Media & Design",
      desc: "Dual-deployment parachute systems, ejection charges, and descent analysis.",
      textColor: "group-hover:text-rose-400",
      iconColor: "text-rose-400",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      )
    },
    {
      name: "Management",
      desc: "Sponsorships, outreach, social media, and team operations.",
      textColor: "group-hover:text-amber-400",
      iconColor: "text-amber-400",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.97 5.97 0 0 0-.75-2.906m-.75 2.906a30.12 30.12 0 0 1-7.5 0m0 0a5.97 5.97 0 0 1-.75-2.906m-.75 2.906a9.09 9.09 0 0 0-3.741-.479 3 3 0 0 1 4.682-2.72m-.94 3.198.002.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 0 12 21c2.17 0 4.207-.576 5.963-1.584A6.06 6.06 0 0 0 18 18.72m-12 0a5.97 5.97 0 0 0 .75-2.906m-.75 2.906a30.12 30.12 0 0 0 7.5 0m0 0a5.97 5.97 0 0 0 .75-2.906M10.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-9 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM13.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative pt-24 pb-16 px-4 min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Background starry sky */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/dark_sky.webp"
          alt="Starry Sky Background"
          fill
          className="object-cover object-center opacity-45"
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-wider">
            Who We Are
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            VeloCET is CET&apos;s official model rocketry club - a dedicated team of student engineers designing, building, and launching high-powered model rockets.
          </p>
        </div>

        {/* Vision & Mission Section - 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-[1px] flex-1 bg-white/20" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">Our Vision</h2>
              <div className="h-[1px] flex-1 bg-white/20" />
            </div>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              To propel the next generation of Aerospace Engineers and Researchers through innovation, education, and collaboration. We catalyse advancements in rocketry via hands-on experimentation, global competitions, and industry partnerships, empowering members to contribute to cutting-edge research and share findings with the broader scientific community.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-[1px] flex-1 bg-white/20" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">Our Mission</h2>
              <div className="h-[1px] flex-1 bg-white/20" />
            </div>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              To design, build, and launch innovative model rockets that push the boundaries of student-led aerospace. Through practical learning and interdisciplinary teamwork, we make VeloCET a launchpad for aspiring aerospace engineers - equipping them with real-world skills, fostering research excellence, and representing our institution at top national and global rocketry competitions.
            </p>
          </div>
        </div>

        {/* Subsystems Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider mb-2">Our Subsystems</h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
              A breakdown of the specialized divisions collaborating to engineer our launch vehicles.
            </p>
          </div>

          {/* Subsystems Border-less Setup */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {subsystems.map((sys) => (
              <div
                key={sys.name}
                className="relative flex flex-col group"
              >
                {/* Icon with direct styling */}
                <div className={`${sys.iconColor} mb-4 w-fit`}>
                  {sys.icon}
                </div>
                
                {/* Title with hover color matching the subsystem */}
                <h3 className={`text-lg font-bold text-white tracking-wide mb-2.5 ${sys.textColor} transition-colors duration-300`}>
                  {sys.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {sys.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link
              href="/project"
              className="inline-block border border-violet-300/30 px-8 py-3 text-xs uppercase tracking-widest text-white hover:border-white hover:scale-110 transition-all duration-200 rounded-sm"
            >
              OUR WORKS
            </Link>
          </div>
        </div>

        {/* CTA Section with matching button theme */}
        <div className="text-center py-12 border-t border-slate-900">
          <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mb-4">
            Support Our Mission
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            VeloCET relies on sponsorships and academic grants to procure raw composite materials, high-precision machining, avionics sensors, and safety infrastructure.
          </p>
          <Link
            href="/support"
            className="inline-block border border-violet-300/30 px-8 py-3 text-xs uppercase tracking-widest text-white hover:border-white hover:scale-105 transition-all duration-200 rounded-sm"
          >
            Support Our Mission
          </Link>
        </div>

      </div>
    </div>
  );
}
