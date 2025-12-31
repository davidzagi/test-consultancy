'use client'

import SectionHeader  from "@/components/sections/headerSection";
import ServicesSection  from "@/components/sections/services";
import React from "react";

function page() {
  return <>
    <SectionHeader 
      title="Our Services"
      description="We offer end-to-end services across construction, engineering and facilities management. From surveys and design to construction, commissioning and FM — we manage the entire project lifecycle."
    />
    <ServicesSection />
  </>;
}

export default page;
