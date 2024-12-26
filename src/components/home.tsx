import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./landing/Header";
import HeroSection from "./landing/HeroSection";
import ServicesSection from "./landing/ServicesSection";
import BenefitsSection from "./landing/BenefitsSection";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  const handleCtaClick = () => {
    navigate("/contact");
  };

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main content with padding-top to account for fixed header */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection onCtaClick={handleCtaClick} />

        {/* Services Section */}
        <section id="services">
          <ServicesSection
            onServiceClick={(index) => {
              console.log(`Service ${index} clicked`);
              navigate("/contact");
            }}
          />
        </section>

        {/* Benefits Section */}
        <section id="benefits">
          <BenefitsSection />
        </section>

        {/* Contact Section */}
        <section className="w-full bg-slate-50 py-20 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Schedule a free consultation and discover how we can help you
              maximize your content's potential
            </p>
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => navigate("/contact")}
            >
              Lets Talk
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
