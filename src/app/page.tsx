import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectSD1000Section from "@/components/sections/ProjectSD1000Section";
import ProjectNovaSection from "@/components/sections/ProjectNovaSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import SponsorshipsSection from "@/components/sections/SponsorshipsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr className="border-t-1.5 border-violet-300/30 w-full" />
      <AboutSection />
      <hr className="border-t-1.5 border-violet-300/30 w-full" />
      <ProjectSD1000Section />
      <hr className="border-t-1.5 border-violet-300/30 w-full" />
      <ProjectNovaSection />
      <hr className="border-t-1.5 border-violet-300/30 w-full" />
      <RoadmapSection />
      <hr className="border-t-1.5 border-violet-300/30 w-full" />
      <SponsorshipsSection />
      <hr className="border-t-1.5 border-violet-300/30 w-full" />
      <ContactSection />
    </>
  );
}
