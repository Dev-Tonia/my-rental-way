import { Ellipse } from "../../utils/images";
export default function GradientHeader({ title, body }) {
  return (
    <section id="" className="  wrapper py-20">
      <div className=" relative overflow-hidden bg-gradient-to-r from-[#FF4D003D] via-[#FFC93F3D] to-[#FF5C003D] rounded-3xl flex items-center justify-center py-16">
        <img
          src={Ellipse}
          className=" w-[5%] absolute right-[20%] -bottom-6"
          alt=""
        />
        <img src={Ellipse} className=" w-[5%] absolute -right-8 z-[1]" alt="" />
        <div className=" w-11/12 md:w-9/12 px-5">
          <div className=" flex items-center justify-center mb-8">
            <div className=" relative">
              <h2 className=" font-bold text-4xl text-neutral-50">{title}</h2>
            </div>
          </div>
          <p className=" text-neutral-50 text-center">{body}</p>
        </div>
      </div>
    </section>
  );
}
