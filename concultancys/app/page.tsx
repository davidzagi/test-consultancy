import AboutSection from "@/components/sections/about";
import { HeroSection, HeroSplitImageExample } from "@/components/sections/hero";
import PartnersSection from "@/components/sections/partners";
import ServicesSection from "@/components/sections/services";
import Image from "next/image";

export default function Home() {
  return (
<>
<HeroSplitImageExample
/>
<PartnersSection/>
<AboutSection/>
<ServicesSection />
</>
  );
}
