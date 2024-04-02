import CustomInput from "../../components/reusableUi/CustomInput";
import CustomSelect from "../../components/reusableUi/CustomSelect";
import CustomTextarea from "../../components/reusableUi/CustomTextarea";
import GroupInput from "../../components/reusableUi/GroupInput";
import RoundedForm from "../../components/reusableUi/RoundedForm";
const options = [
  { title: "MTN", value: "MTN" },
  { title: "Airtel", value: "Airtel" },
  { title: "9Mobile", value: "9Mobile" },
  { title: "Glo", value: "Glo" },
];
const RelocateWithUs = () => {
  return (
    <section>
      <RoundedForm
        btnTitle={"Request quotation"}
        formTitle={"Relocate with us"}
      >
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
              legend: "Type of Goods",
              type: "text",
              placeholder: "Type of goods",
            }}
          />
          <CustomInput
            formData={{
              legend: "Phone Number",
              type: "text",
              placeholder: "Enter Phone Number",
            }}
          />
        </GroupInput>
        <GroupInput>
          <CustomInput
            formData={{
              legend: "Move from ",
              type: "text",
              placeholder: "Enter post code",
            }}
          />
          <CustomInput
            formData={{
              legend: "Move to",
              type: "text",
              placeholder: "Enter post code",
            }}
          />
        </GroupInput>
        <CustomTextarea
          formData={{
            legend: "Message",
            placeholder: "Write your message here",
          }}
        />
      </RoundedForm>
    </section>
  );
};

export default RelocateWithUs;
