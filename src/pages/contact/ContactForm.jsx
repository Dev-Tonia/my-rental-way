import React from "react";
import RoundedCard from "../../components/reusableUi/RoundedCard";
import GroupInput from "../../components/reusableUi/GroupInput";
import CustomInput from "../../components/reusableUi/CustomInput";
import CustomTextarea from "../../components/reusableUi/CustomTextarea";
import {
  Ellipse,
  LocationLine,
  OutlineEmail,
  PhoneBold,
  MailBox,
} from "../../utils/images";

export default function ContactForm() {
  return (
    <section>
      <div className=" wrapper">
        <RoundedCard className={" "}>
          <div className="p-10 grid grid-cols-12 gap-10">
            <div className="col-span-7">
              <div className=" ">
                <h2 className="text-[40px] leading-10 font-bold">
                  Send us a message
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
                <CustomInput
                  formData={{
                    legend: "Subject",
                    type: "text",
                    placeholder: "I want chair",
                  }}
                />

                <CustomTextarea
                  formData={{
                    legend: "Message",
                    placeholder: "Write your message here",
                  }}
                />

                <div className=" my-5">
                  <button className=" btn  !px-24"> Send message</button>
                </div>
              </form>
            </div>
            <div className=" col-span-5 relative  overflow-hidden bg-primary-600 rounded-3xl  py-16">
              <img
                src={Ellipse}
                className=" w-[40%]  absolute -right-10 -bottom-10 "
                alt=""
              />
              <img
                src={Ellipse}
                className=" w-[6%] absolute right-8 top-[10%]"
                alt=""
              />

              <div className=" p-5">
                <div className=" text-white ">
                  <h5 className=" font-bold text-2xl ">Contact Information</h5>
                  <p className=" ">
                    We look forward to assisting you with a smooth and
                    stress-free experience on our platform!
                  </p>
                </div>
                <div className=" text-white py-10">
                  <a
                    href="mailto:moibi.ismail@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className=" flex items-center gap-3 my-4 "
                  >
                    <div className=" ">
                      <img src={OutlineEmail} alt="" />
                    </div>
                    <p className=" font-bold text-lg">moibi.ismail@gmail.com</p>
                  </a>
                  <a
                    href="tell:+447882849409"
                    rel="noopener noreferrer"
                    target="_blank"
                    className=" flex items-center gap-2 my-4"
                  >
                    <div className=" ">
                      <img src={PhoneBold} alt="" />
                    </div>
                    <p className=" font-bold text-lg">+447882849409</p>
                  </a>
                  <div className=" flex items-center gap-2 my-4">
                    <div className=" ">
                      <img src={LocationLine} alt="" />
                    </div>
                    <p className=" font-bold text-lg">South Yorkshire</p>
                  </div>
                  <div className=" flex items-center gap-2 my-4">
                    <div className=" ">
                      <img src={MailBox} alt="" />
                    </div>
                    <p className=" font-bold text-lg">S6 2TR </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RoundedCard>
      </div>
    </section>
  );
}
