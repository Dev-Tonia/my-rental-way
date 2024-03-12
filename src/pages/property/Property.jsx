import OtherHeroSection from "../../components/reusableUi/OtherHeroSection";
import { PropertyHero } from "../../utils/images";
import PropertyForm from "./PropertyForm";
import PropertySections from "./PropertySections";
const title = "Rent-to-Own Estate Developer";
const subtitle =
  "MY WAY Rental is a pioneering real estate development company based in the South Yorkshire, United Kingdom, specialising in providing innovative rent-to-own solutions for individuals aspiring to own their dream homes. ";

const Property = () => {
  return (
    <>
      <OtherHeroSection src={PropertyHero} title={title} subtitle={subtitle} />
      <PropertySections />
      <PropertyForm />
    </>
  );
};

export default Property;
