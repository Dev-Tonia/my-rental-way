/* eslint-disable react/jsx-no-target-blank */

import ServicePlatformCard from "../../components/Home/ServicePlateCard";

import { categoryTags } from "../../utils/contents/homeContents";
const ServicePlatform = () => {
  return (
    <section id="HeaderSection-posts" className="HeaderSection wrapper mt-16">
      {/* Heading Section */}
      <div className=" flex  justify-center  items-center pt-14">
        <div className=" w-9/12 text-center ">
          <h2 className="  text-5xl font-bold text-neutral-50 px-5 pb-5">
            Get all services for your event on our platform
          </h2>
          <p className=" text-neutral-30 text-xl">
            With our platform, you can access all the services you need for your
            event in one convenient location, and experience the convenience of
            comprehensive event planning.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-20">
        {categoryTags.map((categoryTag) => (
          <ServicePlatformCard detail={categoryTag} key={categoryTag.title} />
        ))}
      </div>
    </section>
  );
};

export default ServicePlatform;
