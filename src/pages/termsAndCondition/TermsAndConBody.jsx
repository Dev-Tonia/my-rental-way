import React from "react";
import { TermAndConditionList } from "../../utils/contents/termsAndConditions";
import LegalList from "../../components/reusableUi/LegalList";
export default function TermsAndConBody() {
  return (
    <section className=" pt-2.5 md:py-5">
      <div className="wrapper">
        <div className=" ">
          <ol className=" ">
            {TermAndConditionList.map((conditionList) => (
              <LegalList item={conditionList} key={conditionList.title} />
            ))}
          </ol>
        </div>
      </div>
      <div className=" flex items-center justify-center space-x-5 py-10">
        <button className=" btn !bg-white border !text-primary-600 border-primary-600">
          Decline
        </button>
        <button className=" btn"> Accept</button>
      </div>
    </section>
  );
}
