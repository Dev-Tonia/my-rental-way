import React from "react";

export default function CustomFieldset({ legend, children }) {
  return (
    <div>
      <fieldset className=" border-2 border-[#474747] rounded-2xl">
        <legend className=" ml-8 text-[#474747] text-lg">{legend}</legend>
        {children}
      </fieldset>
    </div>
  );
}
