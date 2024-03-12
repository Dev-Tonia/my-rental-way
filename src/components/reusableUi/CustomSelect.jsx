import React from "react";
import CustomFieldset from "./CustomFieldset";

export default function CustomSelect({ formData }) {
  return (
    <div className=" w-full my-4 sm:my-0">
      <CustomFieldset legend={formData.legend}>
        <div className=" flex items-center px-8 py-4">
          <select className=" w-full  bg-transparent  outline-none">
            <option value="">Select</option>

            {formData.options.map((option) => (
              <option value={option.value} key={option.value}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
      </CustomFieldset>
    </div>
  );
}
