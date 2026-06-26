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

function Model() {
  const { scene } = useGLTF("/model/rocket.glb");
  return <primitive object={scene} />;
}

function RocketCanvas() {
  return (
    <div className="w-full h-[55vh] sm:h-[60vh] md:h-[70vh] relative bg-slate-900/10 border border-slate-800/40 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl">
      <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 15] }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} shadows="contact" adjustCamera={true}>
            <Model />
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
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/80 border border-slate-800 text-[9px] uppercase tracking-widest text-slate-400 px-4 py-2 rounded-full pointer-events-none flex items-center gap-1.5 whitespace-nowrap shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 animate-pulse text-violet-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 9.152c.582.448 1.148.89 1.676 1.345m-1.676-1.345c-.528-.407-1.148-.815-1.859-1.222M15.042 9.152c-.582.448-1.148.89-1.676 1.345M15.042 9.152V18m0-8.848c-.528-.407-1.148-.815-1.859-1.222m1.859 1.222c.582.448 1.148.89 1.676 1.345M13.366 10.5c.528.407 1.148.815 1.859 1.222m-1.859-1.222c-.582-.448-1.148-.89-1.676-1.345M13.366 10.5V18m0-7.5c-.528-.407-1.148-.815-1.859-1.222m1.859 1.222c.582.448 1.148.89 1.676 1.345" />
        </svg>
        Drag to Orbit / Scroll to Zoom
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
          className="object-cover object-center opacity-45"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      {/* Top fade-in transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-1" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-1" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[calc(100vh-12rem)] mt-6">

        {/* Left Side: Info */}
        <div className="col-span-12 md:col-span-5 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/20 bg-violet-950/20 text-violet-400 text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            3D Interactive Showcase
          </div>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-wider leading-tight"
            style={spaceGrotesk.style}
          >
            Launch Vehicle
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interact directly with our flagship aerospace design. Built with light-weight carbon composites, integrated avionics bays, and precision aerodynamic fin profiles, this rocket serves as our main research platform for high-power telemetry.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/support#sponsor-a-part"
              className="inline-block border border-violet-300/30 px-8 py-3 text-xs uppercase tracking-widest text-white hover:border-white hover:scale-105 transition-all duration-200 rounded-sm"
            >
              Support Our Projects
            </Link>
          </div>
        </div>

      {/* Right Side: 3D Model Display */}
      <div className="col-span-12 md:col-span-7 w-full flex justify-center">
        {mounted ? (
          <RocketCanvas />
        ) : (
          <div className="w-full h-[55vh] sm:h-[60vh] md:h-[70vh] bg-slate-900/10 border border-slate-800/40 rounded-3xl flex items-center justify-center">
            <span className="text-xs uppercase tracking-widest text-slate-500 animate-pulse">Initializing 3D Scene...</span>
          </div>
        )}
      </div>
    </div>
    </div >
  );
}
