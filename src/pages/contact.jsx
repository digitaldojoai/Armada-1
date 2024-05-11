import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Accordion from "react-bootstrap/Accordion";
import appData from "@data/app.json";
import { Formik } from "formik";
import { toast } from "react-toastify";
const Contact = () => {
  const faqData = {
    title: "Client’s FAQ",
    subtitle: "Solving Business Problems <br>is An Everyday",
    items: [
      {
        title: "Secure Management and Workforce?",
        text: "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi.",
      },
      {
        title: "Logistics Workforce on Track?",
        text: "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi.",
      },
      {
        title: "Online Courses & Certification?",
        text: "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi.",
      },
      {
        title: "Figures and data representative of an organization's?",
        text: "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi.",
      },
    ],
  };

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
              <Formik
							  validateOnBlur={false}
							  validateOnChange={false}
                            initialValues = {{ email: '', name: '', tel: '', message: '' }}
                            validate = { values => {
								const errors = {};
								const noWhitespaceRegex = /^\s+$/;
								const onlyLettersRegex = /^[A-Za-z]+$/;
								const phoneNumberRegex = /^[0-9]{8,15}$/;
							
								if (!values.email) {
									toast.error('Required');
								} else if (
									!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
								) {
									toast.error('Invalid email address');
								} else if (noWhitespaceRegex.test(values.email)) {
									toast.error( 'Whitespace is not allowed')
								}
							
								if (!values.name) {
									toast.error('Name Required');
								} else if (!onlyLettersRegex.test(values.name)) {
									toast.error('Name should contain only letters')
								}
							
								if (!values.tel) {
									toast.error('Required')
								} else if (!phoneNumberRegex.test(values.tel)) {
									toast.error( 'Invalid phone number')
								}
							
								if (noWhitespaceRegex.test(values.message)) {
									toast.error('Whitespace is not allowed')
								}
								return errors;
							}}
                            onSubmit = {( values, { setSubmitting } ) => {
							if (isValid ===true) {
                                const form = document.getElementById("contactForm");
                                const status = document.getElementById("contactFormStatus");
                                const data = new FormData();

                                data.append('name', values.name);
                                data.append('tel', values.tel);
                                data.append('email', values.email);
                                data.append('message', values.message);

                                fetch(form.action, {
                                    method: 'POST',
                                    body: data,
                                    headers: {
                                        'Accept': 'application/json'
                                    }
                                }).then(response => {
                                    if (response.ok) {
                                        form.reset()
                                    } else {
                                        response.json().then(data => {
                                            if (Object.hasOwn(data, 'errors')) {
                                                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                                            } else {
                                                toast.error('There was an error processing the request')
                                            }
                                        })
                                    }
                                }).catch(error => {
									toast.error('There was an error processing the request')
                                });

                                setSubmitting(false);
                            }}
							
						}
                            >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
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
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
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
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
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
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.tel}
                            />
                          </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <p>
                            <textarea
                              placeholder="Message"
                              name="message"
                              required="required"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
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
                  )}
                </Formik>
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
