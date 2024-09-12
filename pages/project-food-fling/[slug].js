import React, { Fragment } from 'react';
import Slider from 'react-slick';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo-2.svg'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';

import Projects from '../../api/projects';
import Contact from './contact';

import Simg1 from "/public/images/project-single/2.jpg"
import Simg2 from "/public/images/project-single/3.jpg"

import Ssilde1 from "/public/images/project-single/1.png"
import Ssilde2 from "/public/images/project-single/4.jpg"
import Image from 'next/image';
import CtaSection from "../../components/CtaSection/CtaSection"



const autous = (props) => {
    const router = useRouter()

    const ProjectSingle = Projects.find(item => item.slug === router.query.slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    dots: true,
                },
            }

        ],
    };
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
            <PageTitle pageTitle={'Food Fling App'} pagesub={'Project'} />
            <section className="project-single-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="project-single-wrap">
                                <div className="project-single-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="project-single-title">
                                                <h3>Food Fling App</h3>
                                            </div>
                                            <p>Food Fling is an innovative mobile application designed to connect food lovers 
                                                with a wide range of nearby restaurants and food vendors, offering a seamless 
                                                and enjoyable dining experience. The app provides users with a diverse selection 
                                                of food options, whether they prefer delivery or pickup, catering to all tastes and 
                                                dietary preferences. Key features include real-time order tracking, secure and easy 
                                                payment options, and personalized recommendations based on user preferences and order 
                                                history. Designed to be intuitive and user-friendly, Food Fling will be available on 
                                                both iOS and Android platforms, ensuring accessibility for a broad audience. 
                                                Whether you’re craving a quick snack, a hearty meal, or a gourmet dish, Food Fling is 
                                                your go-to app for satisfying your culinary desires.</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="project-single-content-des-right">
                                                <ul>
                                                    <li>Project Type :<span>Mobile App Development</span></li>
                                                    <li>Platforms: :<span>iOS and Android</span></li>
                                                    <li>Frameworks :<span>UIKit, SwiftUI & Android Studio</span></li>
                                                    <li>Language :<span>Swift , Kotlin</span></li>
                                                    {/* <li>Duration :<span>12 Years</span></li>
                                                    <li>Completion :<span>15 Dec 2024</span></li>
                                                    <li>Share :<span>It, Company</span></li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-single-main-img">
                                        <Slider {...settings}>
                                            <Image src={Ssilde1} alt="img" />
                                            {/* <Image src={Ssilde2} alt="img" />
                                            <Image src={Ssilde1} alt="img" /> */}
                                        </Slider>
                                    </div>
                                </div>
                                <div className="project-single-item list-widget">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="project-single-title">
                                                <h3>Our Strategies</h3>
                                            </div>
                                            <p>At Food Fling, our strategies are designed to ensure we deliver a top-tier app that 
                                                meets the needs of food lovers and restaurant partners alike. We focus on creating a 
                                                user-friendly experience, optimizing operational efficiency, and driving growth 
                                                through targeted marketing. </p>
                                            <ul>
                                                <li>Create intuitive and engaging interfaces.</li>
                                                <li>Offer tailored recommendations and promotions.</li>
                                                <li>Build a robust, scalable backend for smooth performance and reliability.</li>
                                                <li>Implement targeted marketing strategies to boost visibility and user acquisition.</li>
                                                <li>Offer prompt and effective support to address user needs and ensure satisfaction.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="project-single-item-quote">
                                                <p>"Food Fling's app design is stunning and instantly elevates our brand. 
                                                    The seamless experience from menu browsing to order tracking is top-notch. 
                                                    It’s clear professionals built this. We’re thrilled with the results and our 
                                                    customers are too!"</p>
                                                {/* <span>Robert - <span>Yellow Theme</span></span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-single-item">
                                    <div className="project-single-title">
                                        <h3>Our approach</h3>
                                    </div>
                                    <p>At Food Fling, we take a user-centered approach to app development, focusing on delivering 
                                        an exceptional experience from start to finish. Our process begins with in-depth research 
                                        and understanding of user needs and market trends, which informs our design and functionality 
                                        decisions. We prioritize creating a sleek, intuitive interface that simplifies navigation and 
                                        enhances user satisfaction. Throughout development, we employ agile methodologies to ensure 
                                        flexibility and responsiveness to changes. Our team integrates cutting-edge technology and best
                                         practices to build a robust, scalable backend, ensuring seamless performance and security.
                                          Continuous testing and user feedback play a crucial role in refining the app, allowing us 
                                          to deliver a product that not only meets but exceeds expectations. Our commitment to 
                                          innovation, quality, and user experience drives us to deliver an app that stands out in the 
                                          competitive landscape and truly resonates with our users.</p>
                                </div>
                                {/* <div className="project-single-gallery">
                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="p-details-img">
                                                <Image src={Simg1} alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="p-details-img">
                                                <Image src={Simg2} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="project-single-item list-widget">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="project-single-title">
                                                <h3>Resieved goals</h3>
                                            </div>
                                            <ul>
                                                <li>Enhance the user interface for a more intuitive experience.</li>
                                                <li>Provide personalized recommendations and promotions.</li>
                                                <li>Optimize backend operations for efficiency and reliability.</li>
                                                <li>Implement effective marketing strategies for better reach.</li>
                                                <li>Deliver excellent customer support for user satisfaction.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 list-widget-s">
                                            <div className="project-single-title">
                                                <h3>Results</h3>
                                            </div>
                                            <ul>
                                                <li>Enhanced interface leads to greater user engagement.</li>
                                                <li>Personalized features drive higher satisfaction and retention.</li>
                                                <li>Optimized backend ensures smooth, reliable app performance.</li>
                                                <li>Effective marketing increases user base and app visibility.</li>
                                                <li>Prompt, effective support improves overall customer satisfaction.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-single-item">
                                    <div className="project-single-title">
                                        <h3>Related Projects</h3>
                                    </div>
                                    {/* <div className="project-single-item">
                                        <div className="project-contact-area">
                                            <div className="contact-title">
                                                <h2>Have project in mind? Let's discuss</h2>
                                                <p>Get in touch with us to see how we can help you with your project</p>
                                            </div>
                                            <div className="contact-form-area">
                                                <CtaSection />
                                            </div>
                                        </div>
                                    </div> */}
                                    <CtaSection />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
    )
};
export default autous;