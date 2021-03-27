import React, { useState } from "react";
import * as emailjs from "emailjs-com";

// Style
import "./style.scss";

/**
 * @param {string} nom
 * @param {string} mail
 * @param {string} prestation
 */

const Contact = () => {
  const [data, setData] = useState({
    nom: "",
    mail: "",
    prestation: "",
  });

  const handleChange = (e) => {
    console.log("got field " + e.target.name + ", value " + e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const { nom, mail, prestation } = data;

  const handleSubmit = (event) => {
    console.log(data);
    event.preventDefault();
    const templateParams = {
      from_name: nom,
      from_email: mail,
      to_name: "Colchis",
      subject: prestation,
    };
    emailjs.send(
      "service_2etpuqa",
      "template_v0o2cnd",
      templateParams,
      "user_Thhn4IaRT3llceNo0OZ6m"
    );
    resetForm();
  };

  const resetForm = () => {
    setData({
      nom: "",
      mail: "",
      prestation: "",
    });
  };

  return (
    <div className="FormKingdom">
      <h1>Contact the Royal Kingdom</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="form-data">
            <label htmlFor="nom">Name</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={nom}
              onChange={handleChange}
            />
          </div>

          <div className="form-data">
            <label htmlFor="mail">Email</label>
            <input
              type="mail"
              id="mail"
              name="mail"
              value={mail}
              onChange={handleChange}
            />
          </div>

          <div className="form-data">
            <label HtmlFor="prestation">Message</label>
            <textarea
              id="prestation"
              name="prestation"
              rows="5"
              cols="33"
              value={prestation}
              onChange={handleChange}
            />
          </div>
          <hr />
          <div className="form-data">
            <input type="submit" value="Send" />
          </div>
        </fieldset>
      </form>
      <p>We will respond as soon as possible, hopefully it will be fast with us ! </p>
    </div>
  );
};

export default Contact;
