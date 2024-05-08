import Data from "@data/sections/about.json";
import Link from "next/link";

const AboutSection = () => {
    return (
      <>
        {/* Onovo About */}
        <section className="onovo-section gap-bottom-140">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

                <div className="row ">
               

                    {/* Heading */}
                    <div className="onovo-heading gap-bottom-40">
                    
                      <h2 className="onovo-title-2">
                        <span dangerouslySetInnerHTML={{__html: 'Our Advisors'}} />
                      </h2>
                    </div>

                  </div>
                  {/* <div className="col-xs-12 col-sm-12 col-md-4 col-lg-12 hide-on-desktop gap-bottom-60 justify-content-between"> */}

                    {/* Number
                    <div className="onovo-number onovo-circle-text mrg-left ">
                      <div className="num onovo-text-white"> */}
                        {/* <span>{Data.number.value}</span> */}
                      {/* </div>
                      <div className="label onovo-text-black onovo-circle-text-label"> */}
                        {/* {Data.number.label} */}
                      {/* </div>
                    </div> */}

                  {/* </div> */}
                </div>

                {/* Description */}
                <div className="d-flex basic-info-about">
                  
                  <div  className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <p dangerouslySetInnerHTML={{__html: Data.items[0].text}} />
                
                  </div>
                  <div  className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                   <h4>Pat Mulvey</h4>
                  <h4> Joe Pastore </h4>
                   <h4>Eric Colon</h4>
                   <h4> Mathew August</h4>
                  </div>
                </div>

              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 hide-on-mobile">

                

              </div>
            </div>
        </section>
      </>
    );
};

export default AboutSection;