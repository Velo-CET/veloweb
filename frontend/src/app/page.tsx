import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectSD1000Section from "@/components/sections/ProjectSD1000Section";
import ProjectNovaSection from "@/components/sections/ProjectNovaSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import SponsorshipsSection from "@/components/sections/SponsorshipsSection";
import ContactSection from "@/components/sections/ContactSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSD1000Section />
      <ProjectNovaSection />

      {/* Remaining page container with starry sky background */}
      <div className="relative bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/dark_sky.webp"
            alt="Starry Sky Background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={75}
          />
        </div>
        {/* Top fade-in transition from ProjectNovaSection (bg-slate-950) */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-10" />

        <div className="relative z-10">
          <RoadmapSection />
          <SponsorshipsSection />
          <ContactSection />
        </div>
      </div>
    </>
  );
}
