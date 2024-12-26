import React from "react";
import ServiceCard from "./ServiceCard";

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: Array<{
    title: string;
    description: string;
    icon: "content" | "repurpose" | "distribute";
    features: string[];
  }>;
  onServiceClick?: (serviceIndex: number) => void;
}

const ServicesSection = ({
  title = "Our Services",
  subtitle = "Comprehensive content solutions to help your business grow",
  services = [
    {
      title: "Content Strategy",
      description:
        "Develop a comprehensive content strategy that aligns with your business goals",
      icon: "content",
      features: [
        "Content audit and analysis",
        "Editorial calendar planning",
        "Content performance tracking",
      ],
    },
    {
      title: "Content Repurposing",
      description:
        "Transform your existing content into multiple formats for maximum reach",
      icon: "repurpose",
      features: [
        "Cross-platform adaptation",
        "Format optimization",
        "Content enhancement",
      ],
    },
    {
      title: "Distribution Management",
      description:
        "Strategic distribution of your content across relevant channels",
      icon: "distribute",
      features: [
        "Channel strategy",
        "Posting schedule optimization",
        "Performance analytics",
      ],
    },
  ],
  onServiceClick = (index: number) => console.log(`Service ${index} clicked`),
}: ServicesSectionProps) => {
  return (
    <section className="w-full min-h-[800px] bg-white py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              onCtaClick={() => onServiceClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute left-0 w-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-2/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default ServicesSection;
