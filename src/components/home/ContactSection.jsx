import axios from 'axios';
import React, { useState } from 'react'

const ContactSection = () => {

  const formID = 'VbHWDGWO';
  const formSparkURL = `https://submit-form.com/${formID}`;

  const defaultFormState = {
    name: '',
    email: '',
    message: '',
  }

  const [formState, setFormState] = useState(defaultFormState);

  const handleFormSubmission = async event => {
    event.preventDefault();
    await postSubmission();
  };

  const postSubmission = async () => {
    const payload = {
      ...formState
    }

    //promise
    try {
      const result = await axios.post(formSparkURL, payload);
      console.log(result);
      alert('Success!!!')
    } catch(error) {
      console.log(error);
    }

  }

  const updateFormControl = event => {
    const { id, value } = event.target;
    const formKey = id;

    const updatedFormState = { ...formState }
    updatedFormState[formKey] = value;

    setFormState(updatedFormState);
  }

  return (
    <section id='contact-section' >

        <h2>Contact Us Now</h2>

        <div className="carousel"><p>Tell Us About Your Project</p></div>

        <div className="flex-container">
            <div className="form col">
              <form onSubmit={ handleFormSubmission } >
                <label className='form-label' htmlFor="name">Name:</label>
                <input
                 onChange={updateFormControl}
                 placeholder='John Wick'
                 className='form-input'
                 type="text"
                 value={formState.name}
                 id='name'
                /> <br />

                <label className='form-label' htmlFor="email">Email:</label>
                <input
                 onChange={updateFormControl}
                 placeholder='jw@butlrstudios.com'
                 className='form-input'
                 type="email"
                 value={formState.email}
                 id='email'
                /> <br />

                <label className='form-label' htmlFor="message">Message:</label>
                <textarea
                 onChange={updateFormControl}
                 placeholder='I would like to make a dinner reservation for twelve.'
                 className='form-input'
                 value={formState.message}
                 id='message'
                ></textarea> <br /><br />

                <button type='submit' >Submit</button>
              </form>
            </div>


            <div className="info col">
              <p><span>ButlrStudios</span> is proud<br />
              to serve the San Diego, CA area</p>

              <br />

              <a href="mailto:contact@butlrstudios.com">contact@butlrstudios.com</a>
            </div>
        </div>

    </section>
  )
}

export default ContactSection