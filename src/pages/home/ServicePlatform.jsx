/* eslint-disable react/jsx-no-target-blank */
import Herotesting1 from "../../assets/images/herotesting1.png";
import Herotesting2 from "../../assets/images/herotesting2.png";
import Herotesting3 from "../../assets/images/heroTesting3.png";
import { Link } from "react-router-dom";

const ServicePlatform = () => {
  return (
    <section id="HeaderSection-posts" className="HeaderSection wrapper mt-12">
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
      <div className="">
        <div
          className="col-xl-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <div className="post-img">
              <Link to="/about">
                <img
                  src={Herotesting1}
                  alt="Daytopia Network Image "
                  className="img-fluid"
                />
              </Link>
            </div>

            <h2 className="title">Daytopia Mentoring Network </h2>
            <p className="post-category">
              Learn more about the six pillars of the Daytopia Mentoring
              Program.
            </p>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <div className="post-img">
              <Link to="/daytopia-shop/daytopia-investment-club">
                <img
                  src={Herotesting2}
                  alt="Daytopia Investment Club"
                  className="img-fluid"
                />
              </Link>
            </div>

            <h2 className="title">Daytopia Investment Club. </h2>
            <p className="post-category">Check Our Investment Club</p>
          </div>
        </div>

        <div
          className="col-xl-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <div className="post-img">
              <a href="https://www.youtube.com/@daytopiatv" target="_blank">
                <img
                  src={Herotesting3}
                  alt="daytopia workshop and seminals Image"
                  className="img-fluid"
                />
              </a>
            </div>

            <h2 className="title">Daytopia Workshops and Seminars.</h2>
            <p className="post-category">
              Check our youtube channel for our Workshops and Seminars
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePlatform;
