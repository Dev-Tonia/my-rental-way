import React from "react";
import CustomFieldset from "./CustomFieldset";

export default function CustomTextarea({ formData }) {
  return (
    <div className=" w-full">
      <CustomFieldset legend={formData.legend}>
        <div className=" flex items-center px-8 py-4">
          <textarea
            className=" w-full bg-transparent  outline-none"
            placeholder={formData.placeholder}
            rows={6}
          ></textarea>
        </div>
      </CustomFieldset>
    </div>
  );
}
