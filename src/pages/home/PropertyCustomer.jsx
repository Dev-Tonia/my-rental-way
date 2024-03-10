import {
  Ellipse,
  Img,
  HomeIcon,
  GraphIcon,
  BookIcon,
} from "../../utils/images";

import RoundedCard from "../../components/reusableUi/RoundedCard";
import RoundedImg from "../../components/reusableUi/RoundedImg";
import { Link } from "react-router-dom";

const PropertyCustomer = () => {
  const items = [
    {
      src: HomeIcon,
      text: "Affordable path to house ownership, MY WAY Rental offers an affordable and accessible way for individuals to step onto the property ladder without a substantial upfront investment",
    },
    {
      src: GraphIcon,
      text: "Customisable plans empower customers to tailor their rent-to-own journey according to their financial goals and preferences.",
    },
    {
      src: BookIcon,
      text: "MY WAY Rental provides educational resources and financial guidance, ensuring that customers are well-informed and confident throughout the process.      ",
    },
  ];
  return (
    <section
      id=""
      className=" mt-9 pb-4"
      style={{
        background: `url(${Ellipse}) no-repeat `,
        backgroundPosition: "left -5% top 20%",
        backgroundSize: "40%",
      }}
    >
      <div className="wrapper">
        <div className="flex items-center gap-10">
          <RoundedCard className={" p-5 w-5/12"}>
            <RoundedImg src={Img} />
          </RoundedCard>

          <div className=" w-7/12">
            <div className="text-neutral-50 w-10/12 ">
              <h5 className=" text-lg">MY WAY rentals provide </h5>
              <h2 className="text-[40px] leading-10 font-bold">
                Property Benefit for customers
              </h2>
              <p className=" text-lg my-4 leading-6">
                By providing a transformative rent-to-own experience that
                enables people to realize their dream of homeowners while
                promoting strong, sustainable communities, MY WAY Rental seeks
                to alter the traditional real estate landscape.
              </p>
            </div>
            <ul className="">
              {items.map((item) => (
                <li
                  className=" border border-primary-600 rounded flex items-center gap-3 py-2.5 px-5 my-3"
                  key={item.src}
                >
                  <div>
                    <div
                      className={`w-16 h-12  flex items-center justify-center bg-primary-600/25 rounded-lg`}
                    >
                      <img src={item.src} alt="" className="p-3 " />
                    </div>
                  </div>
                  <div>
                    <p className=" leading-5">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/property" className="btn py-5 inline-block">
              Find your next home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCustomer;
