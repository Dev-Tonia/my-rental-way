import React from "react";
import CustomFieldset from "./CustomFieldset";

export default function CustomInput({ formData }) {
  return (
    <div className=" w-full my-4 sm:my-0">
      <CustomFieldset legend={formData.legend}>
        <div className="flex items-center px-8 py-4">
          <input
            className=" w-full  bg-transparent  outline-none"
            required
            type={formData.type}
            min={formData.min ?? null}
            placeholder={formData.placeholder}
          />
        </div>
      </CustomFieldset>
    </div>
  );
}
