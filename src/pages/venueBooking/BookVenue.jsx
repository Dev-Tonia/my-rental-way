import { useState } from "react";
import CustomInput from "../../components/reusableUi/CustomInput";
import GroupInput from "../../components/reusableUi/GroupInput";
import RoundedForm from "../../components/reusableUi/RoundedForm";
import { useFormInput } from "../../hooks/useFormInput";
import { useFetch } from "../../hooks/useFetch";

const BookVenue = () => {
  const initialValue = {
    organizer: "okay",
    email: "email",
    phoneNumber: "phone",
    noOfGuests: "",
    eventDate: "",
    location: "",
    eventType: "",
    others: "",
  };
  const organizer = useFormInput("");
  const email = useFormInput("");
  const phoneNumber = useFormInput("");
  const noOfGuests = useFormInput("");
  const eventDate = useFormInput("");
  const location = useFormInput("");
  const eventType = useFormInput("");
  const others = useFormInput("");
  const apiCall = useFetch("book-venue.php");
  function submitForm(e) {
    e.preventDefault();

    let booking = {};
    if (
      organizer.value.trim() === "" ||
      email.value.trim() === "" ||
      phoneNumber.value.trim() === "" ||
      noOfGuests.value.trim() === "" ||
      eventDate.value.trim() === "" ||
      eventType.value.trim() === "" ||
      location.value.trim() === "" ||
      others.value.trim() === ""
    ) {
      console.log("You are required to fill all the forms");
      return;
    } else {
      booking = {
        organizer: organizer.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        noOfGuests: noOfGuests.value,
        eventDate: eventDate.value,
        location: location.value,
        eventType: eventType.value,
        others: others.value,
      };
      console.log(booking);
      apiCall(booking);
    }
  }

  return (
    <section>
      <RoundedForm
        btnTitle={"Submit"}
        formTitle={"Book A Venue"}
        submitForm={submitForm}
      >
        <GroupInput>
          <CustomInput
            formData={{
              legend: "Name of Organizer",
              type: "text",
              name: "organizer",
              value: organizer.value,
              placeholder: "John Doe",
            }}
            changes={(e) => organizer.onChange(e)}
          />
          <CustomInput
            formData={{
              legend: "Email Address",
              type: "email",
              name: "email",
              placeholder: "Johndoe@gmail.com",
              value: email.value,
            }}
            changes={(e) => email.onChange(e)}
          />
        </GroupInput>
        <GroupInput>
          <CustomInput
            formData={{
              name: "phoneNumber",
              legend: "Phone Number",
              type: "text",
              value: phoneNumber.value,
              placeholder: "+447 354 6543 876",
            }}
            changes={(e) => phoneNumber.onChange(e)}
          />
          <CustomInput
            formData={{
              name: "noOfGuests",
              legend: "Number of Guests",
              type: "number",
              min: 1,
              value: noOfGuests.value,
            }}
            changes={(e) => noOfGuests.onChange(e)}
          />
        </GroupInput>
        <GroupInput>
          <CustomInput
            formData={{
              name: "eventDate",
              legend: "Event Date",
              type: "date",
              placeholder: "+447 354 6543 876",
              value: eventDate.value,
            }}
            changes={(e) => eventDate.onChange(e)}
          />

          <CustomInput
            formData={{
              type: "text",
              name: "location",
              legend: "Preferred Location",
              placeholder: "Location",
              value: location.value,
            }}
            changes={(e) => location.onChange(e)}
          />
        </GroupInput>
        <GroupInput>
          <CustomInput
            formData={{
              type: "text",
              name: "eventType",
              legend: "Event Type",
              placeholder: "Event Type",
              value: eventType.value,
            }}
            changes={(e) => eventType.onChange(e)}
          />{" "}
          <CustomInput
            formData={{
              type: "text",
              name: "others",
              legend: "Other Information",
              placeholder: "Other info",
              value: others.value,
            }}
            changes={(e) => others.onChange(e)}
          />
        </GroupInput>
      </RoundedForm>
    </section>
  );
};

export default BookVenue;
