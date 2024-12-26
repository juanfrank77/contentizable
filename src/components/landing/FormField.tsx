import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface FormFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const FormField = ({
  label = "Field Label",
  type = "text",
  placeholder = "Enter value",
  required = false,
  error = "",
  value = "",
  onChange = () => {},
}: FormFieldProps) => {
  return (
    <div className="w-[500px] h-[80px] bg-white space-y-2">
      <div className="flex justify-between">
        <Label htmlFor={label.toLowerCase().replace(/ /g, "-")}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>

      <Input
        type={type}
        id={label.toLowerCase().replace(/ /g, "-")}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full ${error ? "border-red-500 focus-visible:ring-red-500" : ""}`}
      />
    </div>
  );
};

export default FormField;
