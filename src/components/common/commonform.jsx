import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function CommonForm({ formControls, onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        onSubmit(data);
      }}
      className="space-y-4"
    >
      {formControls.map((control) => (
        <div key={control.name} className="flex flex-col space-y-1">
          <Label htmlFor={control.name}>{control.label}</Label>

          {/* Input */}
          {control.componentType === "input" && (
            <Input
              id={control.name}
              name={control.name}
              type={control.type || "text"}
              placeholder={control.placeholder}
            />
          )}

          {/* Textarea */}
          {control.componentType === "textarea" && (
            <Textarea
              id={control.name}
              name={control.name}
              placeholder={control.placeholder}
            />
          )}

          {/* Select */}
          {control.componentType === "select" && (
            <Select name={control.name}>
              <SelectTrigger>
                <SelectValue placeholder={control.placeholder || "Select option"} />
              </SelectTrigger>
              <SelectContent>
                {control.options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {/* Checkbox */}
          {control.componentType === "checkbox" && (
            <div className="flex items-center space-x-2">
              <Checkbox id={control.name} name={control.name} />
              <Label htmlFor={control.name}>{control.label}</Label>
            </div>
          )}
        </div>
      ))}

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}
