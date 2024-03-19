// Images
import { Rental1, ImgOverlap, Ellipse } from "../../utils/images";

// component
import RoundedCard from "../../components/reusableUi/RoundedCard";
import RoundedImg from "../../components/reusableUi/RoundedImg";
import SchemeCard from "../../components/reusableUi/SchemeCard";
import EllipseCircle from "../../components/reusableUi/EllipseCircle";

import { serviceList } from "../../utils/contents/homeContents";

const RentalBooking = () => {
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
        <div className="flex flex-col md:flex-row items-center gap-7 md:gap-5 lg:gap-10 pt-10 ">
          <div className=" md:w-1/2 relative">
            <RoundedCard className={"p-6 "}>
              <RoundedImg src={Rental1} className={"h-[500px]"} />
            </RoundedCard>
            <RoundedCard className={"w-1/2 px-4 absolute -bottom-10 -left-3"}>
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
          <div className=" flex items-end ">
            <EllipseCircle className={"bg-primary-600"} />
          </div>
          <div className="  md:w-1/2">
            <div className="text-neutral-50 pe-10 ">
              <h5 className=" text-lg">We render </h5>
              <h2 className=" text-2xl md:text-[30px] lg:text-[40px] leading-10 font-bold">
                Seamless rental and venue booking service
              </h2>
            </div>
            <ul className=" ">
              {serviceList.map((item) => (
                <li className="flex gap-4 mt-8 " key={item.src}>
                  <div>
                    <div
                      className={`w-16 h-12  flex items-center justify-center ${item.bg} rounded-lg`}
                    >
                      <img src={item.src} alt="" className=" " />
                    </div>
                  </div>
                  <div className=" text-neutral-50">
                    <h5 className=" text-lg lg:text-xl font-bold ">
                      {" "}
                      {item.title}
                    </h5>
                    <p className=" lg:text-lg pt-2 leading-6">
                      {item.description}
                    </p>
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
