import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import joi from "joi";

export const Contact = ({ openReactModal, changeModalMessage }) => {
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
      changeModalMessage(
        <>
          <h1>oops</h1>
          <p>Please check all fields have been entered correctly</p>
        </>
      );
      openReactModal();
    } else {
      emailjs
        .sendForm("service_3koqiqv", "template_yu7aizl", form.current, {
          publicKey: "F9Gq5eaoCz-oG-ORF",
        })
        .then(
          () => {
            changeModalMessage(
              <>
                <h1>well hey there!</h1>
                <p>
                  Thanks for your message.
                  <br />
                  It's on its way to my inbox and I'll get back to you very
                  soon.
                </p>
              </>
            );
            openReactModal();
            setFormValues({
              from_name: "",
              from_email: "",
              message: "",
            });
          },
          (error) => {
            changeModalMessage(
              <>
                <h1>Oops,</h1>
                <p>there was an unexpected error!</p>
                <br />
                <p>
                  Why not pop me a message over on
                  <a href="https://www.linkedin.com/in/zahravasanji/">
                    <u>LinkedIn</u>
                  </a>
                  ?
                </p>
              </>
            );
            openReactModal();
          }
        );
    }
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
