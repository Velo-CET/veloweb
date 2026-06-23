import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-xs text-white">
                VC
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Velo<span className="text-cyan-400">CET</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              CET&apos;s official model rocketry club. Defying gravity, defining innovation.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/support" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Support Us</Link></li>
              <li><Link href="/sponsorships" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Sponsorships</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Projects</h3>
            <ul className="space-y-2">
              <li><a href="/#project-sd1000" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">SD1000</a></li>
              <li><a href="/#project-teststand" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Teststand</a></li>
              <li><a href="/#roadmap" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-slate-400">contact@velocet.space</li>
              <li className="text-sm text-slate-400">+1 (555) 123-4567</li>
              <li className="text-sm text-slate-400">CET Campus, Bangalore</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} VeloCET. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
