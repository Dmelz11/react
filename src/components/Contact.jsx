import { useState } from "react";
import '../styles/Contact.css';

//  importing a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
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
  

  const handleSubmit = (e) => {
    // This prevents the default behavior of the form
    e.preventDefault();
    console.log(formState);
  
  }
  return (
    <form>
      <div className="page-body">
        <h1 className="heading">Let's Connect</h1>

        <form className="form" onSubmit={handleSubmit}>
          <div>
            <div class="form-group">
              <label htmlFor="name" className="contact_form-tag">Name</label>
              <input
                type="text"
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
         
          <button type="submit" className="bg btn-primary ">         
            Submit
          </button>
        </form>
       
      </div>
      <br></br>
      <div className='contactContainer'>
      <p>Contact Me:<a href="mailto: david@greensprings.us" className="contact_button">david@greensprings.us</a></p>
      </div>
    </form>
  );
          }      

export default ContactForm;
