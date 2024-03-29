import OtherHeroSection from "../../components/reusableUi/OtherHeroSection";
import { VenueBookingHero } from "../../utils/images";
import BookVenue from "./BookVenue";
const title =
  " Explore Our Versatile Venue Options for Unforgettable Events on Our Platform";
const subtitle =
  "Unlock the Perfect Space for Every Occasion with Our Effortless Venue Booking Experience.";

const VenueBooking = () => {
  return (
    <>
      <OtherHeroSection
        src={VenueBookingHero}
        title={title}
        subtitle={subtitle}
      />
      <BookVenue />
    </>
  );
};

export default VenueBooking;
