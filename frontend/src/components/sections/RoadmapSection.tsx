"use client";

import { useState, useEffect, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function RoadmapSection() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const nodes = [
    {
      title: "CLUB FOUNDED",
      subtitle: "Aug 2024",
      description: "Established CET's official rocketry body to nurture future aerospace leaders.",
    },
    {
      title: "RECRUITMENT",
      subtitle: "Jan 2025",
      description: "Onboarded passionate students across avionics, structures, and propulsion.",
    },
    {
      title: "SD1OOO",
      subtitle: "Our first model rocket",
      description: "Designed and Developed our first 1kg payload solid rocket, reaching a 1km ceiling.",
    },
    {
      title: "COMPETITION MODEL",
      subtitle: "Oct 2026",
      description: "Our Spaceport America Cup 2027 model.",
    },
    {
      title: "ADVANCED TECH RESEARCH",
      subtitle: "Active guidance Tech",
      description: "Researching and developing our guidance payload.",
    },
    {
      title: "SPACEPORT 2027",
      subtitle: "International competition",
      description: "Representing CET globally at the premier SA Cup 2027.",
    },
  ];

  return (
    <section ref={sectionRef} id="roadmap" className="relative py-16 px-4 overflow-hidden">
      {/* Background/Top gradient transitions */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-1" />

      <div className="max-w-4xl md:max-w-6xl mx-auto w-full relative z-10">
        <ScrollReveal variant="fadeInUp" duration={800} threshold={0.15}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-white/20" />
              <div className="px-3 py-1 bg-transparent border border-white/20 text-white text-[10px] uppercase tracking-widest font-semibold rounded-sm">
                Our Journey
              </div>
              <div className="h-[1px] w-12 bg-white/20" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">
              The Roadmap
            </h2>
          </div>
        </ScrollReveal>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="relative mt-12 md:hidden">
          {/* Vertical timeline line in the center */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500/20 via-white/20 to-violet-500/20 -translate-x-1/2" />

          {/* Progress bar line */}
          <div
            className="absolute left-1/2 top-0 w-[2px] bg-violet-500 -translate-x-1/2 transition-all duration-[2000ms] ease-out z-10"
            style={{ height: isInView ? "50%" : "0%" }}
          >
            {/* Leading Edge Comet Head at the bottom */}
            <svg
              viewBox="0 0 12 24"
              className="absolute bottom-0 left-1/2 w-3.5 h-7 text-violet-400 fill-current animate-spark-glow-vertical"
            >
              <defs>
                <linearGradient id="comet-grad-vertical" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
                  <stop offset="60%" stopColor="rgba(139, 92, 246, 0.4)" />
                  <stop offset="90%" stopColor="rgba(167, 139, 250, 0.85)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
                </linearGradient>
              </defs>
              <path d="M 3,18 C 3,12 6,0 6,0 C 6,0 9,12 9,18 C 9,20 7.5,22 6,22 C 4.5,22 3,20 3,18 Z" fill="url(#comet-grad-vertical)" />
              <circle cx="6" cy="18" r="1.2" fill="#ffffff" />
            </svg>
          </div>

          {/* Timeline Nodes */}
          <div className="space-y-10 relative">
            {nodes.map((node, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeNode === index;
              const isCompleted = index <= 2;
              return (
                <div
                  key={index}
                  onClick={() => setActiveNode(isActive ? null : index)}
                  className="relative flex items-center justify-center min-h-[90px] w-full group cursor-pointer select-none"
                  style={{
                    opacity: isInView ? (isCompleted ? 1 : 0.6) : 0,
                    transform: isInView ? "scale(1)" : "scale(0.85)",
                    transition: "all 600ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transitionDelay: isInView 
                      ? `${index === 0 ? 0 : index === 1 ? 800 : index === 2 ? 1600 : 2000 + (index - 3) * 200}ms` 
                      : "0ms",
                  }}
                >
                  {/* Central Node Dot */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-slate-950 bg-white transition-all duration-300 z-20 ${isActive
                    ? "scale-125 shadow-[0_0_15px_rgba(139,92,246,0.8)] bg-violet-400 border-white"
                    : isCompleted
                      ? "shadow-[0_0_8px_rgba(139,92,246,0.5)] bg-violet-500 border-slate-950 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.8)]"
                      : "shadow-[0_0_8px_rgba(255,255,255,0.4)] group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                    }`} />

                  {/* Content Container */}
                  <div
                    className={`w-[45%] absolute transition-all duration-300 ${isEven
                      ? "right-1/2 pr-6 sm:pr-8 text-right"
                      : "left-1/2 pl-6 sm:pl-8 text-left"
                      } ${isActive
                        ? (isEven ? "-translate-x-1" : "translate-x-1")
                        : (isEven ? "group-hover:-translate-x-1" : "group-hover:translate-x-1")
                      }`}
                  >
                    <div className="inline-block max-w-full">
                      <span className="text-[9px] sm:text-[10px] font-semibold text-violet-400 uppercase tracking-wider block">
                        {node.subtitle}
                      </span>
                      <h3 className={`text-[11px] sm:text-xs font-bold tracking-wider uppercase mt-0.5 mb-1 transition-colors ${isActive ? "text-violet-400" : "text-white group-hover:text-violet-400"
                        }`}>
                        {node.title}
                      </h3>
                      <p className={`text-[9.5px] sm:text-[10.5px] text-slate-400 leading-relaxed font-normal overflow-hidden transition-all duration-300 ${isActive
                        ? "max-h-24 opacity-100 mt-1.5"
                        : "max-h-0 opacity-0 mt-0 pointer-events-none md:group-hover:max-h-24 md:group-hover:opacity-100 md:group-hover:mt-1.5"
                        }`}>
                        {node.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden md:block relative mt-16 mb-12 min-h-[350px]">
          {/* Horizontal timeline line */}
          <div
            className="absolute top-1/2 h-[2px] bg-gradient-to-r from-violet-500/20 via-white/20 to-violet-500/20 -translate-y-1/2"
            style={{ left: `${100 / (nodes.length * 2)}%`, right: `${100 / (nodes.length * 2)}%` }}
          />

          {/* Progress bar line */}
          <div
            className="absolute top-1/2 h-[2px] bg-violet-500 -translate-y-1/2 transition-all duration-[2000ms] ease-out z-10"
            style={{ 
              left: `${100 / (nodes.length * 2)}%`, 
              width: isInView ? "41.67%" : "0%" 
            }}
          >
            {/* Leading Edge Comet Head */}
            <svg
              viewBox="0 0 24 12"
              className="absolute right-0 top-1/2 w-7 h-3.5 text-violet-400 fill-current animate-spark-glow-horizontal"
            >
              <defs>
                <linearGradient id="comet-grad-horizontal" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
                  <stop offset="60%" stopColor="rgba(139, 92, 246, 0.4)" />
                  <stop offset="90%" stopColor="rgba(167, 139, 250, 0.85)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
                </linearGradient>
              </defs>
              <path d="M 18,3 C 12,3 0,6 0,6 C 0,6 12,9 18,9 C 20,9 22,7.5 22,6 C 22,4.5 20,3 18,3 Z" fill="url(#comet-grad-horizontal)" />
              <circle cx="18" cy="6" r="1.2" fill="#ffffff" />
            </svg>
          </div>

          {/* Timeline Nodes */}
          <div className="flex justify-between items-center w-full relative h-full min-h-[350px]">
            {nodes.map((node, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeNode === index;
              const isCompleted = index <= 2;
              return (
                <div
                  key={index}
                  onClick={() => setActiveNode(isActive ? null : index)}
                  className="relative flex flex-col items-center justify-center group cursor-pointer select-none flex-1"
                  style={{
                    opacity: isInView ? (isCompleted ? 1 : 0.6) : 0,
                    transform: isInView ? "scale(1)" : "scale(0.85)",
                    transition: "all 600ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transitionDelay: isInView 
                      ? `${index === 0 ? 0 : index === 1 ? 800 : index === 2 ? 1600 : 2000 + (index - 3) * 200}ms` 
                      : "0ms",
                  }}
                >
                  {/* Central Node Dot */}
                  <div className={`w-3.5 h-3.5 rounded-full border-2 border-slate-950 bg-white transition-all duration-300 z-20 ${isActive
                    ? "scale-125 shadow-[0_0_15px_rgba(139,92,246,0.8)] bg-violet-400 border-white"
                    : isCompleted
                      ? "shadow-[0_0_8px_rgba(139,92,246,0.5)] bg-violet-500 border-slate-950 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.8)]"
                      : "shadow-[0_0_8px_rgba(255,255,255,0.4)] group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                    }`} />

                  {/* Content Container */}
                  <div
                    className={`absolute w-44 text-center transition-all duration-300 ${isEven
                       ? "bottom-full mb-6"
                       : "top-full mt-6"
                       } ${isActive
                         ? (isEven ? "-translate-y-1" : "translate-y-1")
                         : (isEven ? "group-hover:-translate-y-1" : "group-hover:translate-y-1")
                       }`}
                  >
                    <div className="inline-block w-full">
                      <span className="text-[10px] font-semibold text-violet-400 uppercase tracking-wider block">
                        {node.subtitle}
                      </span>
                      <h3 className={`text-xs font-bold tracking-wider uppercase mt-0.5 mb-1 transition-colors ${isActive ? "text-violet-400" : "text-white group-hover:text-violet-400"
                        }`}>
                        {node.title}
                      </h3>
                      <p className={`text-[10.5px] text-slate-400 leading-relaxed font-normal overflow-hidden transition-all duration-300 ${isActive
                        ? "max-h-24 opacity-100 mt-1.5"
                        : "max-h-0 opacity-0 mt-0 pointer-events-none group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-1.5"
                        }`}>
                        {node.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
