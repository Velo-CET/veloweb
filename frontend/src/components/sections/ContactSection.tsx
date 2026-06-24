"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setResult(null);

    const formData = new FormData(e.currentTarget);
    
    // =========================================================================
    // INSTRUCTIONS FOR DEVELOPER / USER:
    // 1. Visit https://web3forms.com and enter your email to get a free Access Key.
    // 2. Replace "YOUR_ACCESS_KEY_HERE" below with your key, OR add it to a 
    //    .env.local file as: NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here
    // =========================================================================
    const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Your message has been sent successfully!");
        e.currentTarget.reset();
      } else {
        setStatus("error");
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setResult("Failed to send message. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="relative min-h-[80vh] flex items-center py-20 px-4">
      {/* Bottom transition shade to footer (fades to bg-slate-950) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-white/20" />
            <div className="px-3 py-1 bg-transparent border border-white/20 text-white text-[10px] sm:text-xs uppercase tracking-widest font-semibold rounded-sm">
              Get in Touch
            </div>
            <div className="h-[1px] w-12 bg-white/20" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Contact Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honey-pot Spam Protection (Invisible to humans) */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-slate-700 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 transition-colors text-sm rounded-none px-0"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-slate-700 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 transition-colors text-sm rounded-none px-0"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your interest in VeloCET..."
                  className="w-full bg-transparent border-b border-slate-700 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 transition-colors text-sm resize-none rounded-none px-0"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-white text-slate-950 py-3 text-xs uppercase tracking-widest font-semibold border border-white hover:bg-transparent hover:text-white transition-all duration-200 rounded-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
                
                {result && (
                  <p className={`text-xs mt-2 text-center transition-all duration-300 ${status === "success" ? "text-emerald-400" : "text-rose-400"}`}>
                    {result}
                  </p>
                )}
              </div>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8 lg:pl-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-slate-300">
                <div className="text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</span>
                  <a href="mailto:velocet@cet.ac.in" className="hover:text-white transition-colors">velocet@cet.ac.in</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-slate-300">
                <div className="text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-wider font-semibold">Captain</span>
                  <a href="tel:+9185479209416" className="hover:text-white transition-colors">+91 85479 209416</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-slate-300">
                <div className="text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-wider font-semibold">Manager</span>
                  <a href="tel:+917025560765" className="hover:text-white transition-colors">+91 70255 60765</a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-slate-800/60">
              <a
                href="https://www.instagram.com/velo_cet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:scale-110 transition-transform"
              >
                <svg
                  className="w-5 h-5 text-white/70 hover:text-pink-500 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/velo-cet/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:scale-110 transition-transform"
              >
                <svg
                  className="w-5 h-5 text-white/70 hover:text-blue-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:scale-110 transition-transform"
              >
                <svg
                  className="w-5 h-5 text-white/70 hover:text-red-500 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
