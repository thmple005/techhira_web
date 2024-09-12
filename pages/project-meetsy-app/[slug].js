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

import Ssilde1 from "/public/images/project-single/3.png"
import Ssilde2 from "/public/images/project-single/4.jpg"
import Image from 'next/image';
import CtaSection from "../../components/CtaSection/CtaSection"



const meetsy = (props) => {
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
            <PageTitle pageTitle={'Meetsy App'} pagesub={'Project'} />
            <section className="project-single-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="project-single-wrap">
                                <div className="project-single-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="project-single-title">
                                                <h3>Meetsy App</h3>
                                            </div>
                                            <p>Meetsy App is a cutting-edge mobile application crafted to bring people together,
                                                creating meaningful connections in the world of modern dating. With a focus on
                                                simplicity and user experience, Meetsy offers a seamless platform for singles
                                                to meet, chat, and build relationships. The app features intelligent matching
                                                algorithms that consider users' preferences, interests, and lifestyles, ensuring
                                                personalized and compatible connections.</p>
                                            <p>Key highlights include real-time chat, secure and discreet profiles, and tailored
                                                recommendations based on user behavior and preferences. Meetsy also offers various
                                                discovery modes, from casual browsing to more focused searches, catering to different
                                                relationship goals. Designed to be intuitive and accessible, Meetsy will be available
                                                on both iOS and Android platforms, making it easy for anyone to find their match.
                                                Whether you're seeking a deep connection or just looking to meet new people, Meetsy
                                                App is your trusted companion in the journey of modern dating.</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="project-single-content-des-right">
                                                <ul>
                                                    <li>Project Type :<span>Mobile App Development</span></li>
                                                    <li>Platforms: :<span>iOS and Android</span></li>
                                                    <li>Frameworks :<span>UIKit, SwiftUI & Android Studio</span></li>
                                                    <li>Language :<span>Swift , Kotlin</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-single-main-img">
                                        <Slider {...settings}>
                                            <Image src={Ssilde1} alt="img" />
                                        </Slider>
                                    </div>
                                </div>
                                <div className="project-single-item list-widget">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="project-single-title">
                                                <h3>Our Strategies</h3>
                                            </div>
                                            <p>At Meetsy, our strategies are crafted to ensure we deliver an exceptional dating 
                                                experience that aligns with the needs and preferences of our users. We focus on 
                                                creating an engaging and intuitive app, fostering meaningful connections, and 
                                                driving growth through strategic initiatives.</p>
                                            <ul>
                                                <li>Design engaging and intuitive user interfaces to ensure a smooth and enjoyable experience for all users.</li>
                                                <li>Utilize personalized recommendations and advanced matchmaking algorithms to enhance user connections and match quality.</li>
                                                <li>Develop a robust and scalable backend infrastructure to maintain high performance and reliability as our user base grows.</li>
                                                <li>Provide responsive and effective support to address user inquiries and maintain high levels of satisfaction.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="project-single-item-quote">
                                                <p>"Meetsy’s app design is exceptional and significantly enhances our brand image. The
                                                     smooth experience from profile setup to matchmaking is impressive. It’s evident 
                                                     that the app was developed with great skill and attention to detail. We’re 
                                                     extremely satisfied with the results and the positive response from 
                                                     our users!"</p>
                                                {/* <span>Robert - <span>Yellow Theme</span></span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-single-item">
                                    <div className="project-single-title">
                                        <h3>Our approach</h3>
                                    </div>
                                    <p>At Meetsy, we embrace a user-centered approach to app development, ensuring a superior dating 
                                        experience from start to finish. We begin with thorough research to understand user needs 
                                        and market dynamics, which guides our design and functionality choices. Our focus is on 
                                        creating a sleek, intuitive interface that simplifies interaction and enhances user 
                                        engagement. Utilizing agile methodologies, we maintain flexibility and responsiveness 
                                        throughout the development process. Our team integrates advanced technology and industry 
                                        best practices to build a robust, scalable backend that ensures seamless performance and 
                                        security. Ongoing testing and user feedback are integral to refining the app, allowing us to 
                                        deliver a product that not only meets but exceeds user expectations. Our dedication to 
                                        innovation, quality, and user experience drives us to create an app that excels in the 
                                        competitive dating landscape and truly connects with our users.</p>
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
                                                <li>Refined the user interface to offer a more intuitive and engaging experience.</li>
                                                <li>Delivered personalized matchmaking and suggestions to enhance user connections.</li>
                                                <li>Streamlined backend operations for optimal performance and reliability.</li>
                                                <li>Executed targeted marketing campaigns to expand reach and attract new users.</li>
                                                <li>Provided outstanding customer support to ensure high levels of user satisfaction.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 list-widget-s">
                                            <div className="project-single-title">
                                                <h3>Results</h3>
                                            </div>
                                            <ul>
                                                <li>Enhanced interface drives increased user engagement and interaction.</li>
                                                <li>Personalized recommendations improve satisfaction and keep users coming back.</li>
                                                <li>Streamlined backend provides a seamless and dependable app experience.</li>
                                                <li>Strategic marketing boosts user acquisition and elevates app profile.</li>
                                                <li>Responsive support enhances overall customer satisfaction and trust.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-single-item">
                                    <div className="project-single-title">
                                        <h3>Related Projects</h3>
                                    </div>
                                    <div className="project-single-item">
                                        {/* <div className="project-contact-area">
                                            <div className="contact-title">
                                                <h2>Have project in mind? Let's discuss</h2>
                                                <p>Get in touch with us to see how we can help you with your project</p>
                                            </div>
                                            <div className="contact-form-area">
                                                <Contact />
                                            </div>
                                        </div> */}
                                        <CtaSection />
                                    </div>
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
export default meetsy;