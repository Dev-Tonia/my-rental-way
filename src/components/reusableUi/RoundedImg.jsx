const RoundedImg = ({ src, className }) => {
  return (
    <div className={`overflow-hidden rounded-2xl ${className}`}>
      <img
        src={src}
        className=" w-full h-full object-cover object-center"
        alt="My Image"
      />
    </div>
  );
};

export default RoundedImg;
