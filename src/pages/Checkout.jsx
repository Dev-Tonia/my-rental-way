import CustomInput from "../components/reusableUi/CustomInput";
import CustomSelect from "../components/reusableUi/CustomSelect";
import GroupInput from "../components/reusableUi/GroupInput";
import RoundedForm from "../components/reusableUi/RoundedForm";

export default function Checkout() {
  const options = [
    { title: "cash", value: "Cash on delivery" },
    { title: "bank", value: "Bank Transfer" },
  ];
  return (
    <div>
      <RoundedForm btnTitle={"Submit"} formTitle={"Request quotation"}>
        <p className=" text-neutral-20 text-center pt-4 mb-16">
          Fill this form to complete your order
        </p>
        <GroupInput>
          <CustomInput
            formData={{
              legend: "Event Date",
              type: "date",
              placeholder: "11/12/2023",
            }}
          />
          <CustomInput
            formData={{
              legend: "Preferred Location",
              type: "text",
              placeholder: "Location",
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
              legend: "Email Address",
              type: "email",
              placeholder: "Johndoe@gmail.com",
            }}
          />
        </GroupInput>
        <CustomSelect
          formData={{
            legend: "Payment Method",
            options: options,
          }}
        />
      </RoundedForm>
    </div>
  );
}
