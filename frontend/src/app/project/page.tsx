"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

interface ModelProps {
  modelPath: string;
}

function Model({ modelPath }: ModelProps) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
}

interface RocketCanvasProps {
  modelPath: string;
}

function RocketCanvas({ modelPath }: RocketCanvasProps) {
  return (
    <div className="w-full h-[350px] sm:h-[400px] md:h-[450px] relative bg-slate-950/20 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl">
      <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 15] }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} shadows="contact" adjustCamera={true}>
            <Model modelPath={modelPath} />
          </Stage>
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.0}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.6}
          />
        </Suspense>
      </Canvas>

      {/* Interaction Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/80 border border-slate-800 text-[9px] uppercase tracking-widest text-slate-400 px-4 py-2 rounded-full pointer-events-none flex items-center gap-1.5 whitespace-nowrap shadow-md z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 animate-pulse text-violet-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 9.152c.582.448 1.148.89 1.676 1.345m-1.676-1.345c-.528-.407-1.148-.815-1.859-1.222M15.042 9.152c-.582.448-1.148.89-1.676 1.345M15.042 9.152V18m0-8.848c-.528-.407-1.148-.815-1.859-1.222m1.859 1.222c.582.448 1.148.89 1.676 1.345M13.366 10.5c.528.407 1.148.815 1.859 1.222m-1.859-1.222c-.582-.448-1.148-.89-1.676-1.345M13.366 10.5V18m0-7.5c-.528-.407-1.148-.815-1.859-1.222m1.859 1.222c.582.448 1.148.89 1.676 1.345" />
        </svg>
        Drag to Orbit / Zoom
      </div>
    </div>
  );
}

export default function ProjectPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative pt-24 pb-20 px-4 min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
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

      {/* Top fade-in transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-1" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-1" />

      <div className="relative z-10 max-w-6xl mx-auto mt-6 space-y-16 animate-fade-in">

        {/* SD-1000 Translucent Card */}
        <div className="relative overflow-hidden bg-slate-950/20 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl hover:border-white/20 transition-all duration-300">

          {/* Starry Sky Background with translucent effect */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/SD_star_sky.webp"
              alt="SD-1000 Sky Background"
              fill
              className="object-cover object-center opacity-30 scale-x-[-1]"
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-md" />
          </div>

          <div className="flex flex-col md:grid md:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
            {/* Left Column: Info */}
            <div className="col-span-12 md:col-span-5 space-y-6 text-center md:text-left">
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-wider leading-tight"
                style={spaceGrotesk.style}
              >
                SD-1000
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Our first model rocket project, aiming for 1km altitude with 1kg payload capacity. This rocket originally served as our competition model for (cancelled) IGNITE'25, ready for launch!
              </p>
              <div className="pt-2 flex flex-wrap gap-4 justify-center md:justify-start">

                <a
                  href="/SD1000_Technical_Report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-rose-500/20 bg-rose-500/10 hover:bg-rose-500/20 px-6 py-3.5 text-xs uppercase tracking-widest text-white hover:border-rose-500 hover:scale-105 transition-all duration-200 rounded-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-rose-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                  Technical Report
                </a>
              </div>
            </div>

            {/* Right Column: 3D Canvas */}
            <div className="col-span-12 md:col-span-7 w-full flex justify-center">
              {mounted ? (
                <RocketCanvas modelPath="/model/rocket.glb" />
              ) : (
                <div className="w-full h-[350px] sm:h-[400px] md:h-[450px] bg-slate-900/10 border border-slate-800/40 rounded-3xl flex items-center justify-center">
                  <span className="text-xs uppercase tracking-widest text-slate-500 animate-pulse">Initializing 3D Scene...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Nova-1 Translucent Card */}
        <div className="relative overflow-hidden bg-slate-950/20 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl hover:border-white/20 transition-all duration-300">

          <div className="flex flex-col md:grid md:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
            {/* Left Column: Info */}
            <div className="col-span-12 md:col-span-5 space-y-6 text-center md:text-left">
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-wider leading-tight"
                style={spaceGrotesk.style}
              >
                NOVA-1
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Our in-house solid rocket motor. Capable of producing a peak thrust of 600N and fueled by KNSB.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="/Nova1_Technical_Report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-rose-500/20 bg-rose-500/10 hover:bg-rose-500/20 px-6 py-3.5 text-xs uppercase tracking-widest text-white hover:border-rose-500 hover:scale-105 transition-all duration-200 rounded-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-rose-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                  Technical Report
                </a>
              </div>
            </div>

            {/* Right Column: Flat Image Showcase */}
            <div className="col-span-12 md:col-span-7 w-full flex justify-center">
              <div className="w-full h-[350px] sm:h-[400px] md:h-[450px] relative bg-slate-950/40 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl">
                <Image
                  src="/STFNova1.webp"
                  alt="Nova-1 Motor"
                  fill
                  className="object-cover object-right rounded-3xl rotate-90 scale-150"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* DART Glassy Card */}
        <div className="relative overflow-hidden bg-slate-950/20 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl hover:border-white/20 transition-all duration-300">

          <div className="flex flex-col md:grid md:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
            {/* Left Column: Info */}
            <div className="col-span-12 md:col-span-5 space-y-6 text-center md:text-left">
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-wider leading-tight"
                style={spaceGrotesk.style}
              >
                DART
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Our model rocket built for testing deployment subsystems with a 50m altitude, designed to launch from our own college premises.
              </p>
            </div>

            {/* Right Column: Flat Visual Placeholder */}
            <div className="col-span-12 md:col-span-7 w-full flex justify-center">
              <div className="w-full h-[350px] sm:h-[400px] md:h-[450px] relative bg-slate-950/40 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl flex items-center justify-center">
                <Image
                  src="/dark_sky.webp"
                  alt="DART Rocket Background"
                  fill
                  className="object-cover object-center opacity-10 rounded-3xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="relative z-10 text-center space-y-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-slate-500/80 mx-auto animate-pulse">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.008 1.24l.885 1.77a2.25 2.25 0 0 0 2.007 1.24h1.98a2.25 2.25 0 0 0 2.007-1.24l.885-1.77a2.25 2.25 0 0 1 2.007-1.24h3.86m-18 0h18" />
                  </svg>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-semibold bg-slate-950/80 border border-slate-800/80 px-3.5 py-1.5 rounded-full inline-block">
                    Project Visual Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
