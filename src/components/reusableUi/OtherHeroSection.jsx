const OtherHeroSection = ({ src, title, subtitle }) => {
  return (
    <section id="">
      <div
        style={{
          backgroundImage: `url(${src})`,
        }}
        className=" relative h-[80vh] bg-center bg-cover before:bg-black/40 before:h-full before:w-full  before:absolute"
      >
        <div className="wrapper h-[inherit]">
          <div className=" text-white text-center  h-[inherit] flex items-center justify-center  ">
            <div className=" md:px-2 z-30">
              <h2 className=" text-3xl sm:text-4xl md:text-5xl font-semibold sm:font-bold lg:text-6xl">
                {title}
              </h2>

              <h4 className=" font-medium sm:font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-5">
                {subtitle}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OtherHeroSection;
