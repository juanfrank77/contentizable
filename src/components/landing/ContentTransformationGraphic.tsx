import React from "react";
import {
  ArrowRight,
  FileText,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface ContentTransformationGraphicProps {
  animationSpeed?: number;
}

const ContentTransformationGraphic = ({
  animationSpeed = 2000,
}: ContentTransformationGraphicProps) => {
  return (
    <div className="relative w-[600px] h-[400px] bg-white p-8 flex items-center justify-center">
      {/* Central content piece */}
      <Card className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 flex items-center justify-center shadow-lg z-10">
        <FileText className="w-12 h-12 text-primary" />
      </Card>

      {/* Platform icons arranged in a circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-[spin_8s_linear_infinite]">
        <Card className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-100 flex items-center justify-center">
          <Youtube className="w-8 h-8 text-red-500" />
        </Card>

        <Card className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-pink-100 flex items-center justify-center">
          <Instagram className="w-8 h-8 text-pink-500" />
        </Card>

        <Card className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-100 flex items-center justify-center">
          <Twitter className="w-8 h-8 text-blue-500" />
        </Card>

        <Card className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-green-100 flex items-center justify-center">
          <ArrowRight className="w-8 h-8 text-green-500" />
        </Card>
      </div>

      {/* Connecting lines */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
        <div className="absolute w-full h-0.5 bg-gray-200 top-1/2 -translate-y-1/2" />
        <div className="absolute h-full w-0.5 bg-gray-200 left-1/2 -translate-x-1/2" />
      </div>

      {/* Animated pulse effect */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/5 animate-pulse" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary/5 animate-pulse delay-150" />
    </div>
  );
};

export default ContentTransformationGraphic;
