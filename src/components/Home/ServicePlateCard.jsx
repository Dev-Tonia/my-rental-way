import RoundedCard from "../reusableUi/RoundedCard";

const ServicePlatformCard = ({ detail }) => {
  return (
    <RoundedCard>
      <div className=" h-80 p-2.5">
        <img
          src={detail.src}
          alt="Venue booking category image "
          className=" w-full h-full bg-center
          "
        />
      </div>
      <div className=" pt-5 pb-20 px-3 text-center ">
        <h6 className=" text-2xl text-neutral-50 font-bold">{detail.title}</h6>
        <p className=" text-neutral-20 text-lg mt-5 ">{detail.description}</p>
      </div>
    </RoundedCard>
  );
};

export default ServicePlatformCard;
