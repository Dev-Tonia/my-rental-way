import React from "react";
import CustomFieldset from "./CustomFieldset";

export default function CustomSelect({ options }) {
  return (
    <div>
      <CustomFieldset>
        <select className="form-select w-full">
          <option value="">Select</option>

          {options &&
            options.map((option) => (
              <option value={option.value} key={option.value}>
                {option.title}
              </option>
            ))}
        </select>
      </CustomFieldset>
    </div>
  );
}
