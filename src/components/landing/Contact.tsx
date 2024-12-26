import React from "react";
import Header from "./Header";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <div className="w-full min-h-screen bg-white py-20 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-slate-600">
                Schedule a consultation to transform your content strategy
              </p>
            </div>

            {/* Placeholder for scheduling tool embed */}
            <div className="w-full aspect-[4/3] bg-slate-50 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-200">
              <p className="text-slate-600">Scheduling Tool Embed Goes Here</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
