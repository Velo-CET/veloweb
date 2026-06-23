import Link from "next/link";

export default function ScoutRecruitmentPage() {
  const tasks = [
    {
      week: 1,
      title: "Introduction & Rocket Stability Analysis",
      desc: "Learn the fundamentals of rocket stability (CP/CG relationships) and set up your first simulation model.",
      items: [
        "Read the introductory document on Model Rocket Flight Physics.",
        "Install OpenRocket (or use OpenRocket Web) to construct a basic rocket airframe.",
        "Compute the stability margin for a 1-meter airframe with three different fin shapes (trapezoidal, elliptical, swept).",
        "Submit a PDF report detailing your CP and CG coordinates for each design."
      ]
    },
    {
      week: 2,
      title: "Solid Rocket Propulsion Basics",
      desc: "Understand how solid rocket motors operate, focusing on fuel-to-oxidizer ratios and burn rates.",
      items: [
        "Study the chemical differences between KNSB (Potassium Nitrate/Soribtol) and APCP.",
        "Calculate the burn rate of a standard cylindrical grain at ambient pressure.",
        "Draw a thrust curve diagram for a solid propellant motor producing 600N peak thrust."
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4 min-h-[90vh] bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-300/20 bg-violet-500/10 text-violet-300 text-xs font-medium mb-4">
            Recruitment Portal
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4 uppercase tracking-wider">
            Scout Recruitments
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Welcome to the CET Model Rocketry Club. Complete the tasks below to demonstrate your analytical and engineering skills.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {tasks.map((task) => (
            <div
              key={task.week}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-violet-400 font-semibold">
                    Week {task.week} Taskset
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold mt-1">{task.title}</h2>
                </div>
                <span className="shrink-0 px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                  Status: Open
                </span>
              </div>

              <p className="text-slate-300 mb-6 text-sm sm:text-base leading-relaxed">
                {task.desc}
              </p>

              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold">Action Items:</h3>
                <ul className="list-decimal list-inside space-y-2 text-sm text-slate-400 pl-2">
                  {task.items.map((item, index) => (
                    <li key={index} className="leading-relaxed">
                      <span className="pl-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <a
            href="https://forms.gle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-sm transition-all hover:shadow-lg hover:shadow-violet-500/25"
          >
            Submit Task Reports
          </a>
          <div>
            <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition-colors underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
