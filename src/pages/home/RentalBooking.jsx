// Images
import Rental1 from "../../assets/images/rental1.jpeg";
import ServiceIcon from "../../assets/icons/service.png";
import ServiceIcon1 from "../../assets/icons/Vector.png";
import ServiceIcon2 from "../../assets/icons/service2.png";
import ImgOverlap from "../../assets/images/hero4.png";
import Ellipse from "../../assets/images/Ellipse1.png";

// component
import RoundedCard from "../../components/reusableUi/RoundedCard";
import RoundedImg from "../../components/reusableUi/RoundedImg";
import SchemeCard from "../../components/reusableUi/SchemeCard";
import EllipseCircle from "../../components/reusableUi/EllipseCircle";

const RentalBooking = () => {
  const serviceList = [
    {
      title: "Corporate hire",
      src: ServiceIcon,
      description:
        "Top supplier of corporate marquees in South Yorkshire, with a focus on renting marquees for conferences, trade fairs,product launches, and exhibitions.",
      bg: "bg-[#66E98336]",
    },
    {
      title: "Retails",
      src: ServiceIcon1,
      description:
        "We provide a range of temporary structures for retail use, perfect for a clothing store at your county show or a retail marquee space for pop-up food festivals.",
      bg: "bg-[#668AE936]",
    },
    {
      title: "Celebration ",
      src: ServiceIcon2,
      description:
        "MY WAY serves a range of events, including dinner balls, anniversaries, birthday parties, graduation celebrations, dedications, weddings, and sports dinners at venue of your choice to suit all your event.",
      bg: "bg-[#E9956636]",
    },
  ];
  return (
    <section
      className=""
      style={{
        background: `url(${Ellipse}) no-repeat `,
        backgroundPosition: top,
        backgroundSize: "45%",
      }}
    >
      <div className="wrapper">
        <div className="flex gap-10 pt-10 ">
          <div className=" w-1/2 relative">
            <RoundedCard className={"p-6 "}>
              <RoundedImg src={Rental1} className={"h-[500px]"} />
            </RoundedCard>
            <RoundedCard className={"w-1/2 px-4 absolute bottom-0 -left-3"}>
              <RoundedImg src={ImgOverlap} className={"py-4"} />
              <div className=" space-y-3 ">
                <SchemeCard className={"bg-white-20 w-5/6"} />
                <SchemeCard className={"bg-white-20 w-2/3"} />
              </div>
              <div className=" flex gap-4 py-4 mb-4">
                <EllipseCircle className={"bg-primary-600"} />
                <EllipseCircle className={"bg-[#159131]"} />
                <EllipseCircle className={"bg-[#152991]"} />
              </div>
            </RoundedCard>
          </div>
          <div className=" flex items-end mb-16">
            <EllipseCircle className={"bg-primary-600"} />
          </div>
          <div className="  w-1/2">
            <div className="text-neutral-50 pe-10 ">
              <h5 className=" text-lg">We render </h5>
              <h2 className="text-[40px] leading-10 font-bold">
                Seamless rental and venue booking service
              </h2>
            </div>
            <ul className=" ">
              {serviceList.map((item) => (
                <li className="flex gap-4 mt-8 ">
                  <div>
                    <div
                      className={`w-16 h-12  flex items-center justify-center ${item.bg} rounded-lg`}
                    >
                      <img src={item.src} alt="" className=" " />
                    </div>
                  </div>
                  <div className=" text-neutral-50">
                    <h5 className=" text-xl font-bold "> {item.title}</h5>
                    <p className=" text-lg pt-2">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalBooking;
