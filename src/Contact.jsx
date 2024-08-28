import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import joi from "joi";

export const Contact = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const formSchema = joi.object({
    from_name: joi.string().min(3).required(),
    from_email: joi
      .string()
      .email({ tlds: { allow: false } })
      .required(),
    message: joi.string().min(3).required(),
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validateForm = formSchema.validate(formValues);
    if (validateForm.error) {
      console.log("please check fields have been entered correctly")
    } else {
      console.log("ready to send email!")
    }


    // emailjs
    //   .sendForm("service_3koqiqv", "template_yu7aizl", form.current, {
    //     publicKey: "F9Gq5eaoCz-oG-ORF",
    //   })
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //     }
    //   );
  };

  return (
    <div className="contact">
      <h1>
        <span>say</span>
        <span>hello!</span>
      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          placeholder="name"
          value={formValues.from_name}
          onChange={changeHandler}
        />
        <input
          type="email"
          name="from_email"
          placeholder="email"
          value={formValues.email}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="message"
          placeholder="message"
          value={formValues.message}
          onChange={(e) => changeHandler(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
