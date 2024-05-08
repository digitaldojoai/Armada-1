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
                    src="/images/ArmadaLogo.png"
                    alt="logo"
                    style={{ width: "130px" }}
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
                    <p>777 West Putnam Avenue, Greenwich, CT 06830, United States</p>
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
                    <p>Los Angeles, California </p>
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
                    <p><a
                      href="tel:+61(0)383766284"
                      className="onovo-lnk lnk--white"
                      target="_blank"
                    >
                      +61 (0) 3 8376 6284
                    </a></p>
                  </div>
                  <br />

                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 d-flex ">
                <div className=" onovo-text onovo-text-white ">
                  <h5 className=""></h5>
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
                    <p>  <a
                      href="mailto:info@armada-funds.com"
                      className="onovo-lnk text-white"
                      target="_blank"
                    >
                      info@armada-funds.com
                    </a></p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      opacity: "0.6",

                    }}
                    className=""
                  >
                    <i className="fab fa-linkedin text-white"></i>
                    <p>   <a
                      href="https://www.linkedin.com/company/armada-funds/"
                      className="onovo-lnk  text-white"
                      target="_blank"
                    >
                      LinkedIn
                    </a></p>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="separator"></div>

            
              
           
          </div>
        </div>
      </footer>

      <ImageView />
    </>
  );
};
export default DefaultFooter;
