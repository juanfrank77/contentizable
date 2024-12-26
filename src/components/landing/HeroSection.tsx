import React from "react";
import { Button } from "@/components/ui/button";
import ContentTransformationGraphic from "./ContentTransformationGraphic";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Transform Your Content Across Platforms",
  subtitle = "Maximize your content's reach with our expert repurposing services. Turn one piece of content into multiple engaging formats for all your channels.",
  ctaText = "Book a Free Consultation",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <section className="relative w-full min-h-[800px] bg-gradient-to-b from-white to-slate-50 flex items-center justify-center px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side - Text content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            {subtitle}
          </p>
          <Button size="lg" className="text-lg px-8 py-6" onClick={onCtaClick}>
            {ctaText}
          </Button>
        </div>

        {/* Right side - Graphic */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-full max-w-[600px]">
            <ContentTransformationGraphic />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;
