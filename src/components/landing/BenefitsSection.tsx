import React from "react";
import MetricCard from "./MetricCard";

interface BenefitsSectionProps {
  title?: string;
  subtitle?: string;
  metrics?: Array<{
    title: string;
    value: string;
    icon: "time" | "output" | "reach" | "growth";
    description: string;
  }>;
}

const BenefitsSection = ({
  title = "Proven Results",
  subtitle = "See the impact our content services can have on your business",
  metrics = [
    {
      title: "Time Saved",
      value: "10+ hours/week",
      icon: "time",
      description: "Save valuable time on content creation and management",
    },
    {
      title: "Content Output",
      value: "3x",
      icon: "output",
      description:
        "Triple your content production with our repurposing strategy",
    },
    {
      title: "Audience Reach",
      value: "5x",
      icon: "reach",
      description: "Expand your audience reach across multiple platforms",
    },
    {
      title: "Growth Rate",
      value: "+150%",
      icon: "growth",
      description: "Accelerate your content marketing growth",
    },
  ],
}: BenefitsSectionProps) => {
  return (
    <section className="w-full min-h-[600px] bg-slate-50 py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              icon={metric.icon}
              description={metric.description}
            />
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute left-0 w-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default BenefitsSection;
