import Link from "next/link";
import Image from "next/image";

export default function ScoutRecruitmentPage() {
  const tracks = [
    {
      icon: "🚀",
      title: "Propulsion",
      desc: "Design and analyse a model rocket propulsion system by studying thrust generation, propellant behaviour, and motor design.",
      color: "from-orange-500/10 to-red-500/5 border-orange-500/20 text-orange-300",
    },
    {
      icon: "🌬️",
      title: "Aerodynamics",
      desc: "Investigate rocket stability and flight performance through aerodynamic analysis and simulation.",
      color: "from-cyan-500/10 to-blue-500/5 border-cyan-500/20 text-cyan-300",
    },
    {
      icon: "🏗️",
      title: "Structures",
      desc: "Evaluate loads, materials, and structural integrity to design a reliable rocket airframe.",
      color: "from-amber-500/10 to-yellow-500/5 border-amber-500/20 text-amber-300",
    },
    {
      icon: "🪂",
      title: "Recovery Systems",
      desc: "Design, build, and test parachute-based recovery systems to ensure safe post-flight recovery.",
      color: "from-emerald-500/10 to-teal-500/5 border-emerald-500/20 text-emerald-300",
    },
  ];

  return (
    <div className="relative pt-36 md:pt-44 pb-24 px-4 min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Background starry sky */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/dark_sky.webp"
          alt="Starry Sky Background"
          fill
          className="object-cover object-center hidden sm:block"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-1" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-1" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header / Intro */}
        <div className="text-center mb-16">

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 uppercase tracking-wider">
            Project SCOUT
          </h1>
          <div className="space-y-6 text-slate-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            <p>
              Project SCOUT is VeloCET's spot-entry recruitment program for students who missed the main recruitment cycle but are eager to prove themselves. Over 8 weeks, participants will tackle real engineering challenges inspired by the subsystems of a model rocket, including propulsion, aerodynamics, structures, and recovery systems.
            </p>
            <p>
              This is not an examination of prior knowledge. It is an opportunity to demonstrate curiosity, problem-solving ability, technical thinking, and the willingness to learn. Participants will work independently on a chosen track, submit their findings, and present their work before the VeloCET team.
            </p>
            <p className="text-white font-medium">
              The strongest candidates will be selected to join VeloCET and contribute directly to future rocketry projects.
            </p>
          </div>
        </div>

        {/* Tracks Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider mb-3">
              Tracks
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              The subsystems have been divided into the following tracks. You may choose one and complete the assigned tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((track) => (
              <div
                key={track.title}
                className={`relative overflow-hidden bg-gradient-to-br ${track.color} border rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl" role="img" aria-label={track.title}>
                    {track.icon}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider">
                    {track.title}
                  </h3>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {track.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA / Action Buttons */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto backdrop-blur-sm">
          <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-white mb-3">
            Want to participate and join the club?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base mb-8">
            Download our brochure or register to participate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://drive.google.com/drive/folders/1u_F6FTqbXV3wug2v1RcQ3AytnFyMQY7T"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-emerald-500/30 px-8 py-3 text-xs uppercase tracking-widest text-white hover:border-emerald-400 hover:scale-105 transition-all duration-200 rounded-sm text-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-emerald-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              Brochure
            </a>
            <div className="relative group">
              <a
                href="https://forms.gle/i2PrscxPAUZS6ras9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-violet-500/30 px-8 py-3 text-xs uppercase tracking-widest text-white hover:border-violet-400 hover:scale-105 transition-all duration-200 rounded-sm text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-violet-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.647-6.374-1.766Z" />
                </svg>
                Register
              </a>
              {/* Tooltip message */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-400 text-[10px] uppercase tracking-wider rounded-md md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 transition-opacity duration-200 shadow-xl z-20">
                Registration period is over
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-900" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition-colors underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
