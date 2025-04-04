import AboutSection from "@/components/homepage/about-section";
import HeroSection from "@/components/homepage/hero-section";
import NavSection from "@/components/homepage/nav-section";

export default function Home() {
  return (
    <div>
      <NavSection />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
