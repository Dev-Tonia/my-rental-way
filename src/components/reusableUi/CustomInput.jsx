import React from "react";
import CustomFieldset from "./CustomFieldset";

export default function CustomInput({ formData, changes }) {
  // const handleInput = (event) => {
  //   changes.onChange(event.target);
  // };
  return (
    <div className=" w-full my-4 sm:my-0">
      <CustomFieldset legend={formData.legend}>
        <div className="flex items-center px-8 py-4">
          <input
            className=" w-full  bg-transparent  outline-none"
            required
            name={formData.name}
            type={formData.type}
            min={formData.min ?? null}
            placeholder={formData.placeholder}
            value={formData.value}
            onChange={changes}
          />
        </div>
      </CustomFieldset>
    </div>
  );
}
