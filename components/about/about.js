import React from 'react'
import abImg1 from '/public/images/about/img-1.jpg'
import abImg2 from '/public/images/about/award-icon-2.svg'
import Signeture from '/public/images/about/signeture.png'
import Image from 'next/image'



const About = (props) => {

    return (
        <section className="about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-12">
                        <div className="about-left-content">
                            <div className="image">
                                <Image src={abImg1} alt="" />
                            </div>
                            {/* <div className="award-content">
                                <div className="icon">
                                    <Image src={abImg2} alt="" />
                                </div>
                                <h2>Award Winning</h2>
                                <p>We have a history of successfully delivering IT solutions to a great diverse
                                    clientele, from startups to established enterprises.</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="about-right-content">
                            <h2 className="title">ABOUT COMPANY</h2>
                            <h3 className="sub-title">Our approach ensures flexibility, adaptability, & rapid response.</h3>
                            <p className="text">Welcome to Techhira, where innovation meets implementation and technology turns possibilities into realities. Our forward-thinking company is dedicated to redefining the IT landscape with cutting-edge services and customized solutions tailored to your needs.
                                <span>Our mission is to empower your business by exceeding expectations and pushing the boundaries of what's possible. We combine expertise, creativity, and passion to deliver solutions that are both innovative and results-driven, ensuring your business thrives in today’s competitive environment.</span>
                                <span>We specialize in developing websites and mobile apps designed to elevate your digital presence and provide an exceptional user experience. Partner with Techhira to transform your challenges into opportunities and achieve your goals with a focus on innovation and growth.</span>
                            </p>
                            {/* <div className="ceo-content">
                                <h2>ABC</h2>
                                <span>CEO & Founder of Techhira</span>
                                <div className="signeture">
                                    <Image src={Signeture} alt="" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <svg width="429" height="593" viewBox="0 0 429 593" fill="none">
                    <circle cx="296.5" cy="296.5" r="296.5" fill="url(#cc318_1506)" />
                    <defs>
                        <radialGradient id="cc318_1506" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(296.5 296.5) rotate(90) scale(296.5)">
                            <stop offset="0" stopColor="#CED0FF" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className="shape-2">
                <svg width="529" height="529" viewBox="0 0 529 529" fill="none">
                    <circle cx="264.5" cy="264.5" r="264.5" fill="url(#oo1508)" />
                    <defs>
                        <radialGradient id="oo1508" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(264.5 264.5) rotate(90) scale(264.5)">
                            <stop offset="0" stopColor="#5483ED" stopOpacity="0.2" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default About;



