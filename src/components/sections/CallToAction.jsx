import Data from "@data/sections/call-to-action.json";

const CallToActionSection = () => {
  return (
    <>
        {/* Onovo CTA */}
        <section className="onovo-section gap-top-140 gap-bottom-140" style={{"backgroundImage": "url(/images/skyscrapers.jpg)", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
            <div className="container">
                <div className="">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">

                        {/* Heading */}
                        <div className="onovo-heading gap-bottom-40 onovo-text-white">
                            <div className="onovo-subtitle-1">
                                <span>{Data.subtitle}</span>
                            </div>
                            <h2 className="onovo-title-2">
                                <span dangerouslySetInnerHTML={{__html: Data.title}} />
                            </h2>
                        </div>

                        {/* Text */}
                        <div className="onovo-cta-text">info@armada-funds.com</div>
                            
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">

                        {/* Social */}
                        <div className="">
                            
                            <div className="desc">
                             
                                    {Data.social.map((item, key) => (
                                  
                                        <a key={key} className="onovo-btn mt-3 btn--white btn--large btn--icon onovo-hover-btn" href='/contact'>
                                            <i aria-hidden="true" className={item.icon} />
                                            <span>{item.title}</span>
                                        </a>
                                    
                                    ))}
                               
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default CallToActionSection;