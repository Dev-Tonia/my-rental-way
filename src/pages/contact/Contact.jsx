import React from "react";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import GradientHeader from "../../components/reusableUi/GradientHeader";

export default function Contact() {
  return (
    <>
      <GradientHeader
        title={"Get in touch"}
        body={
          "Have questions or need assistance? We're here to help you every step of the way. Reach out to our friendly team for personalized support."
        }
      />
      <ContactForm />
      <ContactMap />
    </>
  );
}
