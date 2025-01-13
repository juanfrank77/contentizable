import React from "react";
import { Bot, Brain, Clock, FileWarning } from "lucide-react";

interface ProblemSolutionSectionProps {
  problemTitle?: string;
  problemDescription?: string;
  solutionTitle?: string;
  solutionDescription?: string;
}

const ProblemSolutionSection = ({
  problemTitle = "The Content Creation Dilemma",
  problemDescription = "Creating high-quality content manually is time-consuming and resource-intensive, while purely AI-generated content often lacks personality and authenticity. Businesses struggle to find the right balance between efficiency and quality.",
  solutionTitle = "Our Hybrid Approach",
  solutionDescription = "We combine the efficiency of artificial intelligence with human creativity and expertise. This unique blend ensures your content is both scalable and authentic, maintaining your brand's voice while maximizing productivity.",
}: ProblemSolutionSectionProps) => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Problem Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {problemTitle}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {problemDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Manual Content Creation
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  • Time-consuming process
                </li>
                <li className="flex items-center gap-2">
                  • Resource-intensive
                </li>
                <li className="flex items-center gap-2">
                  • Limited content output
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Pure AI Generation
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">• Generic content</li>
                <li className="flex items-center gap-2">• Lacks brand voice</li>
                <li className="flex items-center gap-2">
                  • Missing human touch
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {solutionTitle}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
              {solutionDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                AI Efficiency
              </h3>
              <p className="text-slate-600">
                Leverage AI to streamline content creation and enhance
                productivity
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Human Creativity
              </h3>
              <p className="text-slate-600">
                Add personality, expertise, and authentic brand voice to your
                content
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileWarning className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Quality Control
              </h3>
              <p className="text-slate-600">
                Ensure consistency and excellence through expert review and
                refinement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
