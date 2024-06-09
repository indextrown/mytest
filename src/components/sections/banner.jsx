import React from 'react'
import SlideUp from '../animations/slideUp'

const Banner = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-sm-12">
                            {/*  START HERO DESIGN AREA  */}
                            <SlideUp>
                                <div className="hero-content rmb-25 text-center">
                                    <h1>
                                        선한 영향력을 나누고 싶은 <br></br>
                                        iOS 개발자 <span>김동현</span> 입니다. 
                                    </h1>
                                    
                                    {/* <h1>I'm <span>iOS</span> developer</h1> */}
                                    {/* <div className="job">
                                        <span>UI Designer</span><span>Webflow Developer</span><span>Marketer</span>
                                    </div> */}
                                </div>
                            </SlideUp>
                            {/*  / END HERO DESIGN AREA  */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner