import AboutIcon from "../../assets/icons/aboutIcon.png";
const Banner = () => {
  return (
    <section id="" className="  wrapper py-20">
      <div className=" bg-secondary text-white rounded-3xl flex items-center justify-center py-16">
        <div className=" w-9/12 px-5">
          <div className=" flex items-center justify-center mb-8">
            <div className=" relative">
              <h2 className=" font-bold text-3xl">About Us</h2>
              <div className=" absolute w-24 top-4 left-5 ">
                <img src={AboutIcon} alt="" className=" w-full" />
              </div>
            </div>
          </div>
          <p className=" text-[#F5F5F5] text-center">
            MY WAY Event Rentals is a party and event rental company in
            Sheffield, England that provides everything that you will need for
            upcoming events, weddings, parties and much more..
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
