import React from 'react'
import { RiArrowRightUpLine, RiDownloadLine, RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine } from '@remixicon/react'
import profile_img from "../../assets/images/about/profile.jpg"
import SlideUp from '../animations/slideUp'
const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    {/*  START ABOUT IMAGE DESIGN AREA  */}
                    <div className="col-lg-5">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile_img} alt="About Me" />
                                <h2>김동현</h2>
                                <div className="about-btn btn-one text-center">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse"></div>
                                </div>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><a href="https://github.com/indextrown"><i><RiGithubLine size={20} /></i></a></li>
                                        <li><a href=""><i><RiLinkedinFill size={20} /></i></a></li>
                                        <li><a href=""><i><RiFacebookCircleFill size={20} /></i></a></li>
                                        <li><a href=""><i><RiTwitterXLine size={20} /></i></a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/*  END ABOUT IMAGE DESIGN AREA  */}
                    {/*  START ABOUT TEXT DESIGN AREA  */}
                    <div className="col-lg-7">
                        <div className="about-content-part">
                            <SlideUp>
                                <h2>
                                    {/* 선한 영향력을 나누고 싶은 <br></br>
                                    iOS 개발자 <span>김동현</span> 입니다.  */}
                                    <h1>I'm <span>iOS</span> developer</h1>
                                </h2>
                                <div className="hero-btns">
                                    <a href="https://github.com/user-attachments/files/15586459/_._.pdf" className="theme-btn">Download more <i><RiDownloadLine size={16} /></i></a>
                                </div>
                            </SlideUp>
                            <SlideUp>
                                <ul className="list-style-one two-column">
                                    <li><i><RiArrowRightUpLine size={18} /></i> Swift Programming</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> UIKit</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> SwiftUI</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Core Data</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Networking with URLSession</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Push Notifications</li>

                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/*  END ABOUT TEXT DESIGN AREA  */}
                </div>
            </div>
        </section>
    )
}

export default About