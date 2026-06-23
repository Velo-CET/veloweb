export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-[80vh] flex items-center py-20 px-4">
      {/* Bottom transition shade to footer (fades to bg-slate-950) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-300/20 bg-violet-500/10 text-violet-300 text-xs font-medium mb-4">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Contact Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your interest in VeloCET..."
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-colors text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-sm transition-all hover:shadow-lg hover:shadow-violet-500/25"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 h-64 flex items-center justify-center mb-6">
              <div className="text-center">
                <svg className="w-10 h-10 text-slate-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="text-sm text-slate-500 font-medium">Map Placeholder</span>
              </div>
            </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <svg className="w-5 h-5 text-violet-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              velocet@cet.ac.in
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <svg className="w-5 h-5 text-violet-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Captain: +91 85479 209416
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <svg className="w-5 h-5 text-violet-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Manager: +91 70255 60765
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-2.937-1.887-3.327v-1.834c2.725.589 3.306 3.365 3.306 6.02V20.447zM7.998 8.548H4.998v11.404h3V8.548zM6.498 7.95c-1.2 0-2.172.986-2.172 2.198s.972 2.198 2.172 2.198 2.172-.986 2.172-2.198S7.698 7.95 6.498 7.95zM18 8.548h-3v6.699c0 3.06-3.783 2.95-3.783 2.95V8.548z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-2.937-1.887-3.327v-1.834c2.725.589 3.306 3.365 3.306 6.02V20.447zM7.998 8.548H4.998v11.404h3V8.548zM6.498 7.95c-1.2 0-2.172.986-2.172 2.198s.972 2.198 2.172 2.198 2.172-.986 2.172-2.198S7.698 7.95 6.498 7.95zM18 8.548h-3v6.699c0 3.06-3.783 2.95-3.783 2.95V8.548z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.145-.615-9.858.335-13.26 2.860C3.226 8.052 1.94 11.652 2 15.247c.06 3.594 2.326 7.292 5.616 8.814 3.29 1.522 7.914.668 10.484-.845 2.57-1.513 4.303-4.785 4.497-7.867.193-3.082-1.327-6.037-4.071-7.719z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.321 6.639c-.594-2.048-2.319-3.641-4.349-4.235-3.006-.608-15.123-.608-18.129 0C2.639 3.205.814 5.648.219 7.697-.376 9.75 0 13.002 0 16.254c0 3.252.376 6.503 1.476 9.556.594 2.048 2.319 3.641 4.349 4.235 3.006.608 15.123.608 18.129 0 2.048-.594 3.641-2.187 4.235-4.235 1.101-3.053 1.476-6.304 1.476-9.556 0-3.252-.375-6.504-1.476-9.556zm-10.68 15.62h-2.906V9.354h2.906v12.305zM8.724 7.938c-1.006 0-1.822-.813-1.822-1.821s.816-1.821 1.822-1.821 1.822 1.821-.816 1.821-1.822 1.821-1.822 1.821zm5.745 12.305h-2.906V12.14h2.906v8.103z"/>
                </svg>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
