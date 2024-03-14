import React from "react";
import { policyContentList } from "../../utils/contents/policyContent";
import LegalList from "../../components/reusableUi/LegalList";
export default function TermsAndConBody() {
  return (
    <section className=" pt-2.5 md:py-5">
      <div className="wrapper">
        <div className=" ">
          <ol className=" ">
            {policyContentList.map((conditionList) => (
              <LegalList item={conditionList} key={conditionList.title} />
            ))}
          </ol>
        </div>
        <div className=" md:text-lg text-neutral-20 py-5">
          <p className=" mb-2">
            This Privacy Policy is effective as of January 30, 2024, and will be
            reviewed and updated as necessary. Your continued use of our
            services constitutes acceptance of any modifications to this Privacy
            Policy.
          </p>
          <p>
            MY WAY Rental Services Ltd is a registered company in England and
            Wales. Registered Number: 14830827
          </p>
          <p>20 Langsett Close, Sheffield, S6 2TR.</p>
          <p>© MY WAY Rental Services Ltd. 2024. All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
}
