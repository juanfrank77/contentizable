import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FormField from "./FormField";

interface ConsultationFormProps {
  onSubmit?: (formData: {
    name: string;
    email: string;
    company: string;
    message: string;
  }) => void;
  isOpen?: boolean;
}

const ConsultationForm = ({
  onSubmit = (formData) => console.log("Form submitted:", formData),
  isOpen = true,
}: ConsultationFormProps) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation would go here in a real implementation
    onSubmit(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  if (!isOpen) return null;

  return (
    <Card className="w-[600px] h-[800px] bg-white p-8 flex flex-col">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Book Your Free Consultation
        </h2>
        <p className="text-slate-600">
          Let's discuss how we can transform your content strategy
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
        <FormField
          label="Full Name"
          placeholder="John Doe"
          required
          value={formData.name}
          error={errors.name}
          onChange={(value) => handleChange("name", value)}
        />

        <FormField
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          required
          value={formData.email}
          error={errors.email}
          onChange={(value) => handleChange("email", value)}
        />

        <FormField
          label="Company Name"
          placeholder="Your Company"
          value={formData.company}
          error={errors.company}
          onChange={(value) => handleChange("company", value)}
        />

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-900"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full min-h-[120px] p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Tell us about your content needs..."
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full py-6 text-lg">
          Schedule Consultation
        </Button>
      </form>

      <p className="text-sm text-slate-500 text-center mt-6">
        By submitting this form, you agree to our Terms of Service and Privacy
        Policy
      </p>
    </Card>
  );
};

export default ConsultationForm;
