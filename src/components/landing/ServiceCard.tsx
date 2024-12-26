import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Share2, BarChart } from "lucide-react";

interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: "content" | "repurpose" | "distribute";
  features?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
}

const ServiceCard = ({
  title = "Content Strategy",
  description = "Develop a comprehensive content strategy that aligns with your business goals",
  icon = "content",
  features = [
    "Content audit and analysis",
    "Editorial calendar planning",
    "Content performance tracking",
  ],
  ctaText = "Learn More",
  onCtaClick = () => console.log("CTA clicked"),
}: ServiceCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "content":
        return <FileText className="w-10 h-10 text-primary" />;
      case "repurpose":
        return <Share2 className="w-10 h-10 text-primary" />;
      case "distribute":
        return <BarChart className="w-10 h-10 text-primary" />;
      default:
        return <FileText className="w-10 h-10 text-primary" />;
    }
  };

  return (
    <Card className="w-[384px] h-[500px] bg-white flex flex-col">
      <CardHeader>
        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          {getIcon()}
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-lg text-slate-600">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-slate-700">
              <ArrowRight className="w-5 h-5 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full text-lg py-6"
          variant="outline"
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
