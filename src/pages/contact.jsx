import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Accordion from "react-bootstrap/Accordion";
import appData from "@data/app.json";
import { Formik } from "formik";
import { useState } from "react";
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";
const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [message, setMessage] = useState('')

//function to validate all fields
const validateFields = (name, email, tel, message) => {
  const errors = {};

  // Name validation: should not be empty and should contain only letters
  if (!name.trim()) {
    errors.name = 'Name is required';
    toast.error('Name is required!')
  } else if (!/^[A-Za-z]+$/.test(name)) {
    errors.name = 'Name should contain only letters';
    toast.error('Name should contain only letters')
  }

  // Email validation: should not be empty and should be a valid email
  if (!email.trim()) {
    errors.email = 'Email is required';
    toast.error('email is required')
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errors.email = 'Invalid email address';
    toast.error('Invalid email address')

  }

  // Phone number validation: should not be empty and should be a valid phone number
  if (!tel.trim()) {
    errors.tel = 'Phone number is required';
    toast.error('Phone number is required')
  } else if (!/^[0-9]{8,15}$/.test(tel)) {
    errors.tel = 'Invalid phone number';
    toast.error('Invalid phone number')
  }

  // Message validation: should not be empty
  if (!message.trim()) {
    errors.message = 'Message is required';
    toast.error('message is required');
  }

  return errors;
};
  const handleSubmit = (e) => {
    e.preventDefault()
    const serviceID = 'service_4xy8t69';
   const templateID = 'template_un3tt7c';
   const errors = validateFields(name, email, tel, message);
   if (Object.keys(errors).length == 0) {
    toast.success('Message was sent!')
   emailjs
      .send(serviceID, templateID, {
        from_name:name,
        email:email,
        number:tel,
        message:message
      },'jN8O-Ao0oKuRdzXWX'
    )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );}
  }
  return (
    <Layouts>
      <PageBanner
        pageTitle={"Contact Us"}
        pageDesc={
          "Have ideas for your business? Let’s build something awesome together."
        }
      />

      {/* Onovo Contact Info */}
      <section className="onovo-section gap-top-140">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              {/* Heading */}
              <div className="onovo-text gap-bottom-40">
                <h4>Send Us A Message</h4>
                Become our client!
              </div>

              {/* Form */}
              <div className="onovo-form">
                    <form
                      onSubmit={handleSubmit}
                      id="contactForm"
                      action={appData.settings.formspreeURL}
                      className="cform"
                      method="post"
                    >
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <input
                              placeholder="Full Name"
                              type="text"
                              name="name"
                              required="required"
                              onChange={(e)=>setName(e.target.value)}
                               
                              value={name}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <input
                              placeholder="Email Address"
                              type="email"
                              name="email"
                              required="required"
                              onChange={(e)=>setEmail(e.target.value)}
                               
                              value={email}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <input
                              placeholder="Phone Number"
                              type="tel"
                              name="tel"
                              required="required"
                              onChange={(e)=>setTel(e.target.value)}
                               
                              value={tel}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <textarea
                              placeholder="Message"
                              name="message"
                              required="required"
                              onChange={(e)=>setMessage(e.target.value)}
                               
                              value={message}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <button
                              type="submit"
                              className="onovo-btn onovo-hover-btn"
                            >
                              <span>Send Message</span>
                            </button>
                          </p>
                        </div>
                      </div>

                      <div
                        className="form-status alert-success"
                        id="contactFormStatus"
                      />
                    </form>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
              {/* Contact Info */}
              <div className="onovo-contact-info onovo-text-white">
                <ul>
                  <li>
                    <h5>Contact Info</h5>
                    <a
                      href="tel:+61(0)383766284"
                      className="onovo-lnk lnk--white"
                      target="_blank"
                    >
                      +61 (0) 3 8376 6284
                    </a>
                    <br />
                    <a
                      href="mailto:info@armada-funds.com"
                      className="onovo-lnk lnk--white"
                      target="_blank"
                    >
                      info@armada-funds.com
                    </a>

                    <div
                      className="onovo-social-1 onovo-social-active"
                      style={{ marginTop: "10px" }}
                    >
                      <ul>
                        {appData.social.map((item, key) => (
                          <li key={`contact-social-item-${key}`}>
                            <a
                              href={item.link}
                              target="_blank"
                              className="onovo-social-link onovo-hover-2"
                              title={item.title}
                            >
                              <i className={`icon ${item.icon}`} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <h5>New York</h5>
                    <div>
                      777 West Putnam Avenue, Greenwich, <br />
                      CT 06830 United States
                    </div>
                  </li>
                  <li>
                    <h5>California</h5>
                    <div>Los Angeles, California</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onovo Faq */}
      <section className="onovo-section gap-top-140">
        <div className="container">
          {/* Heading */}
          <div className="onovo-heading align-center gap-bottom-40">
            <h2 className="onovo-title-2">
              <span>Our Location</span>
            </h2>
          </div>

          {/* map */}
          <div w-100 className="maps-contact-main d-flex gap-5">
            <iframe
            className="iframe-cntact-main"
              width="50%"
              height="600"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=777%20W%20Putnam%20Ave%20Greenwich,%20CT%2006830%20United%20States+(Armada)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
            </iframe>

              <iframe
            className="iframe-cntact-main"
            width="50%"
                height="600"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Los%20Angeles,%20California+(Armada)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
              </iframe>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Contact;
