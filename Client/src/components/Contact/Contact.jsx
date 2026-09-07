import "./Contact.css";

import SectionTitle from "../Common/SectionTitle/SectionTitle";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="container">

        <SectionTitle
          subtitle="Get In Touch"
          title="Contact Me"
        />


        <div className="contact-container">


          <div className="contact-info">

            <h3>
              Let's Work Together
            </h3>

            <p>
              Have a project idea or want to connect?
              Feel free to send me a message.
            </p>


            <div className="contact-details">

              <p>
                📧j.anishasweety1912@gmail.com
              </p>

              <p>
                📍 Chennai, Tamil Nadu
              </p>

            </div>


          </div>



          <form className="contact-form">


            <input
              type="text"
              placeholder="Your Name"
            />


            <input
              type="email"
              placeholder="Your Email"
            />


            <textarea
              placeholder="Your Message"
              rows="5"
            ></textarea>


            <button type="submit">
              Send Message
            </button>


          </form>


        </div>

      </div>

    </section>
  );
}


export default Contact;