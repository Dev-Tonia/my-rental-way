import React from "react";

export default function ContactMap() {
  return (
    <section className="pt-20 mt-8 pb-10 map">
      <div className="wrapper">
        <div className="google-map rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.959158537601!2d-1.4942454742004394!3d53.39767047088319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487978918a86ce57%3A0xcd0c4d731cbeee11!2sLangsett%20Cl%2C%20Sheffield%20S6%202TR%2C%20UK!5e0!3m2!1sen!2sng!4v1710342988751!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
