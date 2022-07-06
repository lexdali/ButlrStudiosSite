import React from 'react'

const ContactSection = () => {
  return (
    <section id='contact-section' >

        <h2>Contact Us Now</h2>

        <div className="carousel"><p>Tell Us About Your Project</p></div>

        <div className="flex-container">
            <div className="form col">
              <form>
                <input placeholder='John Wick' className='form-input' type="text" /> <br />
                <input placeholder='jw@butlrstudios.com' className='form-input' type="email" /> <br />
                <textarea placeholder='I would like to make a dinner reservation for twelve.' className='form-input'></textarea>
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