const RoundedCard = ({ children, className }) => {
  return (
    <div
      className={` border border-white/40 rounded-2xl bg-white ${className}`}
      style={{ boxShadow: "0px 6px 10px 0px #2166A71A" }}
    >
      {children}
    </div>
  );
};

export default RoundedCard;
