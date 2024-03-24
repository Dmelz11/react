import { useState,useEffect, useRef } from "react";
import React from "react";
import '../styles/Contact.css';

//  importing a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const count = useRef(0);

  useEffect(()=> {
    count.current = count.current +1;
  });

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either username or email
  
   
    if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setName(inputValue);

    }
  };

  const handleFormSubmit = (e) => {
    // This prevents the default behavior of the form
    e.preventDefault();

    // First we check to see if the userName is field empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || Name === "") {
      setErrorMessage("Email or Name is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. I
    }

   

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");

    setEmail("");
  };

  return (
    <form>
      <div className="page-body">
        <h1 className="heading">Let's Connect</h1>

        <form className="form" onSubmit={handleFormSubmit}>
          <div>
            <div class="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="enter your name"
              />
            </div>
          </div>
          <br></br>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput2"
              placeholder="email address"
            />
          </div>
          <br></br>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1">
           </textarea>
          </div>
          <br></br>
         
          <button type="submit" className="bg btn-primary ">
          
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
      <br></br>
      <a href="mailto: david@greensprings.us" className="contact_button">Contact Me: david@greensprings.us</a>
    </form>
  );
}

export default ContactForm;
