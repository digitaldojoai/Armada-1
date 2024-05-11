import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import { Accordion, Card } from "react-bootstrap";
import Link from "next/link";
import appData from "@data/app.json";
import { useState } from "react";
import emailjs from 'emailjs-com';


import {
  getAllServicesIds,
  getServiceData,
  getSortedServicesData,
} from "@library/services";
import { toast } from "react-toastify";
import { isValid } from "date-fns";

const ServiceDetail = ({ postData, services }) => {
  let prev_id,
    next_id,
    prev_key,
    next_key = 0;

  services.forEach(function (item, key) {
    if (item.id == postData.id) {
      prev_key = key - 1;
      next_key = key + 1;
    }
  });

  services.forEach(function (item, key) {
    if (key == prev_key) {
      prev_id = item.id;
    }
    if (key == next_key) {
      next_id = item.id;
    }
  });
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
    
  } else if (!/^[A-Za-z\s]+$/.test(name)) {
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
  } else if  (!/^[+\-()0-9]{8,15}$/.test(tel)) {
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
          setName('')
		  setEmail('')
		  setTel('')
		  setMessage('')
		  toast.success('Message was sent!')

		  
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );}
  }
  return (
    <Layouts>
      <PageBanner
        pageTitle={postData.title}
        pageDesc={"Our values and vaulted us to the top of our industry."}
      />

      {/* Onovo Service Detail */}
      <section className="onovo-section gap-top-140">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              {/* Image */}
              <div className="gap-bottom-50">
                <img src={postData.image} alt={postData.title} />
              </div>

              {postData.contentHtml != "" && (
                <div className="onovo-text">
                  <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                  />
                </div>
              )}

              {typeof postData.accordion != "undefined" && (
                <>
                  {postData.accordion.enabled == 1 && (
                    <>
                      <h3>{postData.accordion.title}</h3>

                      {/* Faq items */}
                      <Accordion>
                        <div className="onovo-faq-items">
                          {postData.accordion.items.map((item, key) => (
                            <Accordion.Item
                              key={`faq-item-${key}`}
                              eventKey={`faq-acc-${key}`}
                            >
                              <div className="onovo-faq-item onovo-collapse-item">
                                <Accordion.Header>
                                  <h5 className="title onovo-collapse-btn">
                                    <span>{item.heading}</span>
                                    <i className="arrow" />
                                  </h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                  <div className="onovo-text">
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: item.content,
                                      }}
                                    />

                                    {item.bullets
                                      ? item.bullets.map((bullet) => (
                                          <ul className="m-3">
                                            <li>{bullet}</li>
                                          </ul>
                                        ))
                                      : null}
                                    {item.image ? (
                                      <div eventKey="0">
                                        <Card.Img
                                          src={item.image}
                                          alt={item.heading}
                                        />
                                      </div>
                                    ) : null}
                                  </div>
                                </Accordion.Body>
                              </div>
                            </Accordion.Item>
                          ))}
                        </div>
                      </Accordion>
                    </>
                  )}
                </>
              )}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              {/* Service menu */}

              {/* Onovo Form */}
              <div className="onovo-form-box formik-form-main onovo-text-white">
                <h5>Send Us A Message</h5>
                <p>Feel some love, to see what we can do...t!</p>
              
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
                              size="40"
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
                              size="40"
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
                              size="40"
                              placeholder="Phone"
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
                              cols="40"
                              rows="10"
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
                              className="onovo-btn onovo-hover-btn btn--active"
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
          </div>
        </div>
      </section>

      {/* Onovo Navs */}
      <section className="onovo-section">
        <div className="container">{/* Navigation */}</div>
      </section>
    </Layouts>
  );
};
export default ServiceDetail;

export async function getStaticPaths() {
  const paths = getAllServicesIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getServiceData(params.id);
  const allServices = getSortedServicesData();

  return {
    props: {
      postData,
      services: allServices,
    },
  };
}
