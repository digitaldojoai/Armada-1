import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/hero-2';
import Link from "next/link";

const Hero2Slider = () => {
  return (
    <>
        {/* Onovo Hero */}
        <section className="onovo-section onovo-hero hero--two bg-for-hero-home overflow-hidden">

            {/* Hero swiper */}
            
                <div className="swiper-wrapper ">
                    <div  className="swiper-slide ">
                        <div className="onovo-hero-slide-item">
                           
                            <div className="image slider-hero-2-main" >
                            <video autoPlay loop muted style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: "-1"}}>
                  <source src="/images/bg.mp4" type="video/mp4" />
                </video>
                                <div className="ovrl" style={{"opacity": "0.95"}} />
                            </div>
                          
                                <div className="ovrl" style={{"opacity": "0.95"}} />
                            
                            <div className="container">
                                <div className="titles">
                                    <h1 className="title onovo-text-white">
                                        <span  dangerouslySetInnerHTML={{__html: Data.items[0].title}} />
                                    </h1>
                                    <div className="text">
                                        <div className="subtitle onovo-text-white subtitle--left">
                                        <span  dangerouslySetInnerHTML={{__html: Data.items[0].text}} />
                                        </div>
                                        <div className="onovo-bts">
                                            <Link className="onovo-btn btn--border btn--white btn--color onovo-hover-btn" href='/contact'>
                                                <i className="arrow">
                                                    <span />
                                                </i>
                                                <span>Become a Client</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* navs */}
                <div className="onovo-navs js-hero-slider-navs">
                  
                    
               
                </div>

        </section>
    </>
  );
};
export default Hero2Slider;