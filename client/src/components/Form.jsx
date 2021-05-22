import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleValidation = () => {
    let err = {};
    let formIsValid = true;

    if (typeof name !== "undefined") {
      if (!name.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        err["name"] = "Only Letters";
        setErrors({ err });
      }
    }

    return formIsValid;
  };

  const sendToAirtable = async () => {
    const { data } = await axios.post("http://localhost:9000/", {
      name,
      email,
    });
    console.log(data);
  };

  const contactSubmit = async (e) => {
    e.preventDefault();

    const formIsValid = handleValidation();

    if (!formIsValid) {
      alert("Form has errors.");
    } else {
      await sendToAirtable();
      alert("Form submitted");
      setName("");
      setEmail("");
    }

    console.log("Submitting form");
  };

  return (
    <div>
      <form id='ticket' onSubmit={contactSubmit}>
        <label style={{ display: "flex", flexDirection: "column" }}>
          <h1> Form Submission: </h1>
          <input
            required
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span style={{ color: "red" }}> {errors ? errors["name"] : ""}</span>
          <input
            required
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span style={{ color: "red" }}> {errors ? errors["email"] : ""}</span>
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default Form;
