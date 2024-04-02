import CustomInput from "../../components/reusableUi/CustomInput";
import GroupInput from "../../components/reusableUi/GroupInput";
import RoundedForm from "../../components/reusableUi/RoundedForm";

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

          <CustomInput
            formData={{
              type: "text",
              legend: "Preferred Location",
              placeholder: "Location",
            }}
          />
        </GroupInput>
        <GroupInput>
          <CustomInput
            formData={{
              type: "text",
              legend: "Event Type",
              placeholder: "Event Type",
            }}
          />{" "}
          <CustomInput
            formData={{
              type: "text",
              legend: "Other Information",
              placeholder: "Other info",
            }}
          />
        </GroupInput>
      </RoundedForm>
    </section>
  );
};

export default BookVenue;
