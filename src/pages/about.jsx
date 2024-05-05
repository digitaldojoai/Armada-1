import { useEffect } from "react";
import dynamic from "next/dynamic";
import Layouts from "@layouts/Layouts";

import { getSortedTeamData } from "@library/team";
import { getSortedServicesData } from "@library/services";

import CountUp from "react-countup";
import { circleText } from "@common/utilits";

import PageBanner from "@components/PageBanner";
import PartnersSection from "@components/sections/Partners";
import TeamSection from "@components/sections/Team";
import AboutSection from "../components/sections/About";
import CallToActionSection from "../components/sections/CallToAction";

const HistorySlider = dynamic(() => import("@components/sliders/History"), {
  ssr: false,
});
const Testimonial2Slider = dynamic(
  () => import("@components/sliders/Testimonial2"),
  { ssr: false }
);

const About = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

    e.target.parentNode.classList.add("active");
    let videoIframe = e.target.parentNode.querySelector(".js-video-iframe");
    let videoUrl = videoIframe.dataset.src;
    videoIframe.setAttribute("src", videoUrl);
  };

  return (
    <Layouts>
      <PageBanner
        pageTitle={"About Us"}
        pageDesc={
          "Creative studio at the intersection of art, designand technology."
        }
      />

      {/* Onovo About */}
      <section className="onovo-section gap-top-140 gap-bottom-140">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              {/* Heading */}
              <div className="onovo-heading gap-bottom-60">
                <div className="onovo-subtitle-1">
                  <span> Welcome to Armada </span>
                </div>
                <h2 className="onovo-title-2">
                  <span>
                    Armada Funds, <br />
                    set sail in the vast seas <br />
                    of innovation and investment{" "}
                  </span>
                </h2>
                <div className="onovo-text">
                  <p>
                    Originating as an R&D powerhouse, Armada Funds navigated
                    financial market complexities with their flagship "IVS"
                    (Index Volatility Strategy), a cutting-edge algorithm
                    harnessing market volatility. Over three years of testing,
                    IVS emerged robust, offering insights for investors. As
                    their portfolio expanded to include long-short equity and
                    fixed-income strategies, Armada became known for precision
                    and innovation, providing strategic investment solutions.
                    Their consulting services aided startups with insights and
                    operational guidance, while private placement consulting
                    facilitated connections in private equity. With holistic
                    portfolio management, Armada ensured sustainable growth for
                    clients amidst financial fluctuations.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Numbers items */}
          <div className="row gap-row gap-bottom-100">
            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="23"
                >
                  <CountUp
                    end="23"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> + </div>
                <div className="label"> Team members </div>
              </div>
            </div>

            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="99"
                >
                  <CountUp
                    end="99"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> + </div>
                <div className="label"> Completed projects </div>
              </div>
            </div>

            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="12"
                >
                  <CountUp
                    end="12"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> M </div>
                <div className="label"> Lines of code </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="onovo-video" data-onovo-overlay data-onovo-scroll>
            <div
              className="image"
              onClick={(e) => clickedVideoButton(e)}
              style={{ backgroundImage: "url(/images/collab.jpg)" }}
            />
          
           
            
         
          </div>

          {/* Description */}
          <div className="row gap-top-100">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <h5 className="text-uppercase">Our Mission</h5>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
              From the moment our company was founded, we have helped our
              clients find exceptional solutions for their businesses , creating
              memorable brands and digital products. Our expertise grows with
              each year, and our accumulated experience.
            </div>
          </div>

          {/* Description */}
          <div className="row gap-top-60">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <h5 className="text-uppercase">Our Goal</h5>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
              Our goal is to deliver amazing experiences that make people talk,
              and build strategic value for brands, tech, entertainment, arts
              &amp; culture.
            </div>
          </div>

          {/* Gallery */}
          <div className="row gap-top-100">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <a href="/images/posts1.jpg" className="mfp-image">
                <img src="/images/work.jpg" alt="" />
              </a>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 gap-top-60">
              <a href="/images/posts2.jpg" className="mfp-image">
                <img src="/images/company.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <TeamSection team={props.team} />
      <AboutSection />
      <CallToActionSection />
	  
    </Layouts>
  );
};
export default About;

export async function getStaticProps() {
  const allTeam = getSortedTeamData();
  const allServices = getSortedServicesData();

  return {
    props: {
      team: allTeam,
      services: allServices,
    },
  };
}
