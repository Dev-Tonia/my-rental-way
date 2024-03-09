import Relocate1 from "../../assets/images/relocation1.jpeg";
import Relocate2 from "../../assets/images/relocation2.png";
import RoundedImg from "../../components/reusableUi/RoundedImg";
import Ellipse from "../../assets/images/Ellipse1.png";
import RoundedCard from "../../components/reusableUi/RoundedCard";
import SchemeCard from "../../components/reusableUi/SchemeCard";

const RelocateMovers = () => {
  const details = [
    "Handling of possession with utmost care  for safe and timely relocation.",
    "offer seamless and stress-free transitions for individuals and businesses alike",
    "Our professional team is committed to providing personalized solutions tailored to meet your unique moving needs.",
  ];
  return (
    <section
      id=""
      className=" pt-3 pb-5"
      style={{
        background: `url(${Ellipse}) no-repeat `,
        backgroundPosition: " top right",
        backgroundSize: "30%",
      }}
    >
      <div className="wrapper">
        <div className="flex gap-10">
          <div className=" w-[46%]">
            <div className="text-neutral-50 w-10/12 ">
              <h5 className=" text-lg">We also render </h5>
              <h2 className="text-[40px] leading-10 font-bold">
                Relocation/Movers service
              </h2>
              <p className=" text-lg my-4 leading-6">
                The moving process is easy and stress-free with MY WAY Rental
                Services Ltd. For movers that are dependable and reasonably
                priced, trust us to handle your moving needs. For the easiest
                maneuver possible, pick MY WAY!
              </p>
            </div>

            <ul className="">
              {details.map((detail) => (
                <li className=" flex gap-5 my-4 items-center" key={detail}>
                  <div
                    className={`w-6 h-6  flex items-center justify-center bg-secondary rounded`}
                  >
                    <i className="bi bi-check text-2xl text-white place-self-center"></i>
                  </div>
                  <div>{detail}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-[54%]">
            <div className=" ">
              <RoundedCard className={"p-4 relative rotate-[6deg]"}>
                <RoundedImg src={Relocate1} />
                <RoundedCard
                  className={
                    "p-4 w-6/12 absolute bottom-8 -left-8 -rotate-[20deg]"
                  }
                >
                  <RoundedImg src={Relocate2} />
                  <div className=" my-2">
                    <SchemeCard className={" bg-[#FFE6D8] w-10/12 mb-2"} />
                    <SchemeCard className={"bg-[#FFE6D8] w-8/12"} />
                  </div>
                </RoundedCard>
              </RoundedCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelocateMovers;
