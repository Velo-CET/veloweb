import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-violet-300/20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="md:max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-violet-500/30 rounded flex items-center justify-center font-bold text-xs text-violet-300">
                VC
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                Velo<span className="text-violet-400">CET</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              CET&apos;s official model rocketry club. Defying gravity, defining innovation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 md:gap-12">
            <div>
              <h3 className="text-xs font-semibold text-white mb-3">Navigation</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-xs text-slate-400 hover:text-violet-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-xs text-slate-400 hover:text-violet-400 transition-colors">About Us</Link></li>
                <li><Link href="/support" className="text-xs text-slate-400 hover:text-violet-400 transition-colors">Support Us</Link></li>
                <li><Link href="/sponsorships" className="text-xs text-slate-400 hover:text-violet-400 transition-colors">Sponsorships</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-white mb-3">Contact</h3>
              <ul className="space-y-2">
                <li className="text-xs text-slate-400">velocet@cet.ac.in</li>
                <li className="text-xs text-slate-400">Captain: +91 85479 209416</li>
                <li className="text-xs text-slate-400">Manager: +91 70255 60765</li>
                <li className="text-xs text-slate-400">CET Campus, Trivandrum</li>
                <li className="flex items-center gap-3 mt-3">
                  <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 5.959 1.143 8.147 3.341 2.188 2.198 3.331 5.011 3.331 8.147 0 3.204-1.143 5.959-3.341 8.147-2.188 2.198-5.011 3.331-8.147 3.331-3.204 0-5.959-1.143-8.147-3.341C2.349 17.279 1.206 14.466 1.206 11.262s1.143-5.959 3.341-8.147C6.041 3.306 8.796 2.163 12 2.163zm0-2.5c-4.142 0-7.883 1.458-10.83 4.404C1.458 8.42 0 12.162 0 16.304 0 20.446 1.458 24.188 4.404 27.134 7.35 30.08 11.082 31.539 15.224 31.539s7.883-1.458 10.83-4.404c2.949-2.946 4.404-6.688 4.404-10.83 0-4.142-1.458-7.883-4.404-10.83C19.883 5.621 16.142 4.163 12 4.163z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-2.937-1.887-3.327v-1.834c2.725.589 3.306 3.365 3.306 6.02V20.447zM7.998 8.548H4.998v11.404h3V8.548zM6.498 5.952c-1.2 0-2.172.986-2.172 2.198s.972 2.198 2.172 2.198c1.2 0 2.172-.986 2.172-2.198S7.698 3.95 6.498 3.95zM18 8.548h-3v6.699c0 3.06-3.783 2.95-3.783 2.95V8.548z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.145-.615-9.858.335-13.26 2.860C3.226 8.052 1.94 11.652 2 15.247c.06 3.594 2.326 7.292 5.616 8.814 3.29 1.522 7.914.668 10.484-.845 2.57-1.513 4.303-4.785 4.497-7.867.193-3.082-1.327-6.037-4.071-7.719z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.321 6.639c-.594-2.048-2.319-3.641-4.349-4.235-3.006-.608-15.123-.608-18.129 0C2.639 3.205.814 5.648.219 7.697-.376 9.75 0 13.002 0 16.254c0 3.252.376 6.503 1.476 9.556.594 2.048 2.319 3.641 4.349 4.235 3.006.608 15.123.608 18.129 0 2.048-.594 3.641-2.187 4.235-4.235 1.101-3.053 1.476-6.304 1.476-9.556 0-3.252-.375-6.504-1.476-9.556zm-10.68 15.62h-2.906V9.354h2.906v12.305zM8.724 7.938c-1.006 0-1.822-.813-1.822-1.821s.816-1.821 1.822-1.821 1.822 1.821-.816 1.821-1.822 1.821-1.822 1.821zm5.745 12.305h-2.906V12.14h2.906v8.103z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-violet-300/10 flex justify-between items-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} VeloCET. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
