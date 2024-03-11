import OtherHeroSection from "../../components/reusableUi/OtherHeroSection";
import { RelocationHero } from "../../utils/images";
import RelocateWithUs from "./RelocateWithUs";
const title = "Streamline Your Move with Our Dependable Relocation Services";
const subtitle =
  "Effortless Moving Solutions: Your Journey to a New Beginning Starts Here";

const Relocation = () => {
  return (
    <>
      <OtherHeroSection
        src={RelocationHero}
        title={title}
        subtitle={subtitle}
      />
      <RelocateWithUs />
    </>
  );
};
export default Relocation;
