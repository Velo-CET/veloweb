export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 bg-slate-800" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full px-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl uppercase font-bold text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)] leading-tight">
          DEFYING GRAVITY,
          <br />
          DEFINING INNOVATION
        </h1>
      </div>

      <div className="absolute bottom-8 left-8 z-10 hidden md:flex gap-4">
        <div className="w-6 h-6 bg-white/20 rounded" />
        <div className="w-6 h-6 bg-white/20 rounded" />
        <div className="w-6 h-6 bg-white/20 rounded" />
      </div>

      <div className="absolute bottom-8 right-8 z-10 max-md:bottom-8 max-md:left-1/2 max-md:-translate-x-1/2">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 px-6 border border-white/10 flex items-center gap-6">
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-white/70">WEEK</span>
            <span className="text-4xl font-bold text-white leading-none">1</span>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-sm text-white leading-tight">
            Scout
            <br />
            Recruitment Tasks
          </div>
        </div>
      </div>
    </section>
  );
}
