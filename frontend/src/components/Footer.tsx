export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center">
          {/* Left: Branding & Description */}
          <div className="flex flex-col items-center">
            <img
              src="/VeloCET-white-logo.svg"
              alt="VeloCET"
              className="h-6 w-auto object-contain mb-2"
            />
            <p className="text-[10px] text-slate-400 leading-relaxed">
              CET&apos;s official model rocketry club.
            </p>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Defying gravity, defining innovation.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="/" className="text-[10px] sm:text-xs text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-semibold">
              Home
            </a>
            <a href="/#roadmap" className="text-[10px] sm:text-xs text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-semibold">
              Roadmap
            </a>
            <a href="/support" className="text-[10px] sm:text-xs text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-semibold">
              Support
            </a>
            <a href="/#contact" className="text-[10px] sm:text-xs text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-semibold">
              Contact
            </a>
          </div>

          {/* Right: Related Links */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">
              Related Links
            </span>
            <a
              href="https://cet.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] sm:text-[10px] text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-semibold"
            >
              CET Website
            </a>
            <a
              href="https://spaceportamericacup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] sm:text-[10px] text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-semibold"
            >
              Spaceport America Cup
            </a>
            <a
              href="https://clubs.cet.ac.in/clubs/velocet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] sm:text-[10px] text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-semibold"
            >
              CET Clubs
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex justify-center items-center">
          <p className="text-[10px] sm:text-xs text-slate-500">
            &copy; {new Date().getFullYear()} VeloCET. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
