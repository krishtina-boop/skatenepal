import AboutSection from "@/components/homepage/about-section";
import CollectionSection from "@/components/homepage/collection-section";
import DiscoverSection from "@/components/homepage/discover-section";
import ExploreSection from "@/components/homepage/explore-section";
import FooterSection from "@/components/homepage/footer-section";
import HeroSection from "@/components/homepage/hero-section";
import NavSection from "@/components/homepage/nav-section";

export default function Home() {
  return (
    <>
      <NavSection />
      <HeroSection />
      <AboutSection />
      <ExploreSection />
      <CollectionSection />
      <DiscoverSection />
      <FooterSection />
    </>
  );
}
