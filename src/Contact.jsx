import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3koqiqv", "template_yu7aizl", form.current, {
        publicKey: "F9Gq5eaoCz-oG-ORF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <h1><span>say</span><span>hello!</span></h1>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="name" />
        <input type="email" name="from_email" placeholder="email" />
        <input type="text" name="message" placeholder="message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
