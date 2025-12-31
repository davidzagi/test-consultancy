import { servicesData } from "@/components/data/servicesData";
import ContentRenderer from "./ContentRendere";
import SectionHeader from "@/components/sections/headerSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ServicePage({ params }: { params: { slug: string } }) {
  //const service = servicesData[params.slug];
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];


  if (!service) {
    return <div className="p-10">Service not found.</div>;
  }

  return (
    <>
    
    <SectionHeader 
      title={service.title}
      description=""
    />

    <div className="max-w-4xl mx-auto py-20 px-4">
 
    <Link 
          href="/services"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-900 transition-colors duration-200 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="text-base font-medium">Back to Services</span>
        </Link>


      <p className="text-lg text-gray-700 mb-10">{service.description}</p>

      <article className="prose prose-lg max-w-none">
        <ContentRenderer content={service.content} />
      </article>
    </div>
    </>
  );
}
