import AboutSection from "@/components/sections/about";
import {  HeroSliderExample } from "@/components/sections/hero";
import PartnersSection from "@/components/sections/partners";
import ServicesSection from "@/components/sections/services";
import Image from "next/image";

export default function Home() {
  return (
<>
<HeroSliderExample
/>
<PartnersSection/>
<AboutSection/>
<ServicesSection />
</>
  );
}
