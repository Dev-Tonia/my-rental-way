/* eslint-disable react/jsx-no-target-blank */
import { category, category1, category2 } from "../../utils/images";

import ServicePlatformCard from "../../components/Home/ServicePlateCard";
const categoryTags = [
  {
    src: category,
    title: "Venue booking",
    description:
      "Embark on a seamless journey of venue booking with us, where every event is crafted to perfection and every moment is destined to be unforgettab",
  },
  {
    src: category1,
    title: "Design to suit your event",
    description:
      "Inspire a memorable and aesthetically pleasing experience for everyone at your event with our professional event designer, which help imagination meets methodical planning to bring your ideal event to life.",
  },
  {
    src: category2,
    title: "Event of all kind",
    description:
      "Regardless of the occasion or scale, we offer assistance for events of all kinds, giving skilled support to ensure the seamless implementation of your vision.",
  },
];

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
      <div className=" grid grid-cols-3 gap-10 py-20">
        {categoryTags.map((categoryTag) => (
          <ServicePlatformCard detail={categoryTag} key={categoryTag.title} />
        ))}
      </div>
    </section>
  );
};

export default ServicePlatform;
