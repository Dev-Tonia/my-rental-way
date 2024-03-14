import React from "react";

export default function LegalList({ item }) {
  return (
    <li>
      <h5 className=" font-semibold md:font-bold text-xl md:text-2xl text-neutral-50 pb-2.5">
        {item.id}.{item.title}
      </h5>

      {item.contents.map((content) => (
        <div className=" flex items-center space-x-4 pb-1.5">
          <div>
            <div className=" w-3.5 h-3.5 rounded border border-primary-600"></div>
          </div>
          <div className=" md:text-lg text-neutral-20">{content}</div>
        </div>
      ))}
    </li>
  );
}
