import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Clock, BarChart2, Users, TrendingUp } from "lucide-react";

interface MetricCardProps {
  title?: string;
  value?: string;
  icon?: "time" | "output" | "reach" | "growth";
  description?: string;
}

const MetricCard = ({
  title = "Time Saved",
  value = "10+ hours/week",
  icon = "time",
  description = "Save valuable time on content creation and management",
}: MetricCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "time":
        return <Clock className="w-8 h-8 text-primary" />;
      case "output":
        return <BarChart2 className="w-8 h-8 text-primary" />;
      case "reach":
        return <Users className="w-8 h-8 text-primary" />;
      case "growth":
        return <TrendingUp className="w-8 h-8 text-primary" />;
      default:
        return <Clock className="w-8 h-8 text-primary" />;
    }
  };

  return (
    <Card className="w-[300px] h-[200px] bg-white hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
          {getIcon()}
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-primary mb-2">{value}</p>
        <p className="text-sm text-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
