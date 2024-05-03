import Link from "next/link";
import appData from "@data/app.json";
import { useEffect } from "react";
import ImageView from "@components/ImageView";
import { footerSticky } from "@common/utilits";

const DefaultFooter = () => {
  useEffect(() => {
    footerSticky();
  }, []);

  return (
    <>
      {/* Footer */}
      <footer className="onovo-footer footer--dark">
        <div className="footer--default">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                {/* Description */}
                <div className="onovo-text onovo-text-white">
                  <img
                    src="/images/Hero.png"
                    alt="logo"
                    style={{ width: "100px" }}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 offset-lg-1 ">
                {/* Description */}
                <div className="onovo-text onovo-text-white">
                  <h5>Contact us</h5>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      opacity: "0.6",
                    }}
                  >
                    <i className="fas fa-map-marker-alt"></i>
                    <p>777 w Putnam ave Greenwich USA</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      opacity: "0.6",
                    }}
                  >
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Los Angeles California </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      opacity: "0.6",
                    }}
                  >
                    <i className="fas fa-phone"></i>
                    <a
                      href="tel:+61(0)383766284"
                      className="onovo-lnk lnk--white"
                      target="_blank"
                    >
                      +61 (0) 3 8376 6284
                    </a>
                  </div>
                  <br />

                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 d-flex gap-0 py-5  ">
                <div className="row onovo-text-white">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      opacity: "0.6",
                      height:"auto"
                    }}
                  >
                    <i className="fas fa-envelope text-white"></i>
                    <a
                      href="mailto:info@armada-funds.com"
                      className="onovo-lnk text-white"
                      target="_blank"
                    >
                      info@armada-funds.com
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      opacity: "0.6",

                    }}
                  >
                    <i className="fab fa-linkedin text-white"></i>
                    <a
                      href="https://www.linkedin.com/in/your-linkedin-profile"
                      className="onovo-lnk  text-white"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="separator"></div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">
                {/* Copyright */}
                <div className="copyright onovo-text-white">
                  <div
                    dangerouslySetInnerHTML={{ __html: appData.footer.copy }}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-right">
              
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ImageView />
    </>
  );
};
export default DefaultFooter;
