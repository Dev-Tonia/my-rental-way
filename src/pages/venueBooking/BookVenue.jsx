// import DatePicker from "tailwind-datepicker-react";
// import CustomDatePicker from "../../components/reusableUi/CustomDatePicker";

import CustomInput from "../../components/reusableUi/CustomInput";
import CustomSelect from "../../components/reusableUi/CustomSelect";
import GroupInput from "../../components/reusableUi/GroupInput";
import RoundedForm from "../../components/reusableUi/RoundedForm";
const options = [
  { title: "MTN", value: "MTN" },
  { title: "Airtel", value: "Airtel" },
  { title: "9Mobile", value: "9Mobile" },
  { title: "Glo", value: "Glo" },
];
const BookVenue = () => {
  return (
    <section>
      <RoundedForm btnTitle={"Submit"} formTitle={"Book A Venue"}>
        <GroupInput>
          <CustomInput
            formData={{
              legend: "Name of Organizer",
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
        <GroupInput>
          <CustomInput
            formData={{
              legend: "Phone Number",
              type: "text",
              placeholder: "+447 354 6543 876",
            }}
          />
          <CustomInput
            formData={{
              legend: "Number of Guests",
              type: "number",
              min: 1,
            }}
          />
        </GroupInput>
        <GroupInput>
          <CustomInput
            formData={{
              legend: "Event Date",
              type: "date",
              placeholder: "+447 354 6543 876",
            }}
          />
          <CustomSelect
            formData={{
              legend: "Preferred Location",
              options: options,
            }}
          />
        </GroupInput>
        <GroupInput>
          <CustomSelect
            formData={{
              legend: "Event Type",
              options: options,
            }}
          />
          <CustomSelect
            formData={{
              legend: "Other Information",
              options: options,
            }}
          />
        </GroupInput>
      </RoundedForm>
    </section>
  );
};

export default BookVenue;
