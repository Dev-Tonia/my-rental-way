import CustomInput from "../../components/reusableUi/CustomInput";
import CustomTextarea from "../../components/reusableUi/CustomTextarea";
import GroupInput from "../../components/reusableUi/GroupInput";
import RoundedCard from "../../components/reusableUi/RoundedCard";
import RoundedImg from "../../components/reusableUi/RoundedImg";
import { Union, Ellipse } from "../../utils/images";
const PropertyForm = () => {
  return (
    <section
      className=" my-20 pb-4"
      style={{
        background: `url(${Ellipse}) no-repeat `,
        backgroundPosition: "left -5% top 20%",
        backgroundSize: "35%",
      }}
    >
      <div className=" wrapper">
        <div className="md:flex items-center gap-10">
          <RoundedCard className={" p-5 md:w-5/12"}>
            <RoundedImg src={Union} />
          </RoundedCard>
          <div>
            <div className=" ">
              <h5 className=" text-lg">Let's help you find your next home</h5>
              <h2 className="text-2xl md:text-[30px] lg:text-[40px] leading-10 font-bold">
                Send us your request
              </h2>
            </div>
            <form action="">
              <GroupInput>
                <CustomInput
                  formData={{
                    legend: "Full Name",
                    type: "text",
                    placeholder: "John Doe",
                  }}
                />
                <CustomInput
                  formData={{
                    legend: "Email Address",
                    type: "email",
                    placeholder: "Johndoe@gmail.com",
                  }}
                />
              </GroupInput>

              <CustomTextarea
                formData={{
                  legend: "Message",
                  placeholder: "Write your message here",
                }}
              />

              <div className=" my-5">
                <button className=" btn "> Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyForm;
