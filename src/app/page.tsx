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
      <AboutSection />
      <ProjectSD1000Section />
      <ProjectNovaSection />
      <RoadmapSection />
      <SponsorshipsSection />
      <ContactSection />
    </>
  );
}
