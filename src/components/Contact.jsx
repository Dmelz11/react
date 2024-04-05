import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

//  importing a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const form = useRef();
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  const {name, email, message} = formState;
  const [errorMessage, setErrorMessage] = useState('');

 // Getting the value and name of the input which triggered the change
  const handleChange = (e) => {
   
    if(e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('Invalid email address');
      } else {
        setErrorMessage('');
      }
    } else {
      if(!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required`)
      }
    }
     setFormState({...formState,[e.target.name]: e.target.value})
     if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value});
     }
     console.log('errorMessage', errorMessage);
    }
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
      .sendForm('service_o1xdypg', 'template_v5bgfui', form.current, {
        publicKey: 'bD5rjFJ-jApY5ZInA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
 
  return (
    <form>
      <div className="page-body">
        <h1 className="heading">Let's Connect</h1>

        <form ref={form} onSubmit={sendEmail}>
          <div>
            <div class="form-group">
              <label htmlFor="name" className="contact_form-tag">Name</label>
              <input
                type="text"
                name="user_name"
                className="form-control"
                defaultValue={name}
                onBlur={handleChange}
                placeholder="enter your name"
              />
            </div>
          </div>
          <br></br>
          <div className="form-group">
            <label htmlFor="email" className="contact_form-tag">Email</label>
            <input
              type="email"
              name="user_email"
              className="form-control"
              defaultValue={email}
              onBlur={handleChange}
              placeholder="email address"
            />
          </div>
          <br></br>
          <div class="form-group">
            <label htmlFor="message" className="contact_form-tag">Message</label>
            <textarea
               type="submit"
               name="message"
               className="form-control"
               rows="5"
               defaultValue={message}
               onBlur={handleChange}
              />          
          </div>
          {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
          <br></br>
          <div className='contactContainer'>
          <button type="submit" className="bg btn-primary">         
            Send
          </button>
          </div>
        </form>
       
      </div>
    
    </form>
  );
          }      

export default ContactForm;
