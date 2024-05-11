import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import { Accordion, Card } from "react-bootstrap";
import Link from "next/link";
import appData from "@data/app.json";
import { Formik } from "formik";

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
                <Formik
                  validateOnBlur={false}
                  validateOnChange={false}
                  initialValues={{ email: "", name: "", tel: "", message: "" }}
                  validate={(values) => {
                    const errors = {};
                    const noWhitespaceRegex = /^\s+$/;
                    const onlyLettersRegex = /^[A-Za-z]+$/;
                    const phoneNumberRegex = /^[0-9]{8,15}$/;
                    if (!values.email) {
                      toast.error("Required");
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      toast.error("Invalid email address");
                    } else if (noWhitespaceRegex.test(values.email)) {
                      toast.error("Whitespace is not allowed");
                    }

                    if (!values.name) {
                      toast.error("Name Required");
                    } else if (!onlyLettersRegex.test(values.name)) {
                      toast.error("Name should contain only letters");
                    }

                    if (!values.tel) {
                      toast.error("Required");
                    } else if (!phoneNumberRegex.test(values.tel)) {
                      toast.error("Invalid phone number");
                    }

                    if (noWhitespaceRegex.test(values.message)) {
                      toast.error("Whitespace is not allowed");
                    }
                    console.log("errors ", errors);
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
					alert('isvalidating value', isValid(values))
                      toast.success("sent");
                      const form = document.getElementById("contactForm");
                      const status =
                        document.getElementById("contactFormStatus");
                      const data = new FormData();

                      data.append("name", values.name);
                      data.append("tel", values.tel);
                      data.append("email", values.email);
                      data.append("message", values.message);

                      fetch(form.action, {
                        method: "POST",
                        body: data,
                        headers: {
                          Accept: "application/json",
                        },
                      })
                        .then((response) => {
                          if (response.ok) {
                            form.reset();
                          } else {
                            response.json().then((data) => {
                              if (Object.hasOwn(data, "errors")) {
                                status.innerHTML = data["errors"]
                                  .map((error) => error["message"])
                                  .join(", ");
                              } else {
                                toast.error(
                                  "There was an error processing the request"
                                );
                              }
                            });
                          }
                        })
                        .catch((error) => {
							console.log(error)
                          	toast.error(
                            "There was an error processing the request"
                          );
                        });

                      setSubmitting(false);
                  }}
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
                              size="40"
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
                              size="40"
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
                              size="40"
                              placeholder="Phone"
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
                              cols="40"
                              rows="10"
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
                  )}
                </Formik>
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
