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

import Ssilde1 from "/public/images/project-single/2.png"
import Ssilde2 from "/public/images/project-single/4.jpg"
import Image from 'next/image';
import CtaSection from "../../components/CtaSection/CtaSection"



const truckifind = (props) => {
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
            <PageTitle pageTitle={'Truckifind App'} pagesub={'Project'} />
            <section className="project-single-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="project-single-wrap">
                                <div className="project-single-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="project-single-title">
                                                <h3>Truckifind App</h3>
                                            </div>
                                            <p>Truckifind App is a pioneering mobile application designed to streamline the process 
                                                of booking lorry trucks for both personal and business needs. Whether you need to hire a truck for moving, transporting goods, or event logistics, Truckifind offers a user-friendly platform to book lorries online with ease. The app allows you to check truck availability, communicate directly with drivers, and manage bookings seamlessly. You can also add your own lorry to the platform to connect with potential clients. Available on iOS and Android, Truckifind ensures a smooth and efficient truck rental experience, making it your go-to solution for all lorry booking needs.</p>
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
                                            <p>At Truckifind, our strategies are crafted to deliver an exceptional experience for 
                                                both individuals and businesses seeking lorry truck services. We are committed to
                                                 optimizing convenience, reliability, and growth through the following key 
                                                 approaches:</p>
                                            <ul>
                                                <li>Ensure that our app is easy to navigate and use, providing a seamless booking experience for users.</li>
                                                <li>Offer up-to-date truck availability, enabling users to book lorries quickly and manage their logistics needs effectively.</li>
                                                <li>Create a reliable backend that supports smooth performance and handles varying levels of demand efficiently.</li>
                                                <li>Utilize targeted marketing to increase visibility, attract new users, and drive growth in both personal and business sectors.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="project-single-item-quote">
                                                <p>“Truckifind’s app design is sleek and functional, truly enhancing our brand 
                                                    presence. The effortless booking process and real-time truck availability make 
                                                    logistics a breeze. It’s evident that experts crafted this. We’re excited about 
                                                    the outcome and our clients are impressed!”</p>
                                                {/* <span>Robert - <span>Yellow Theme</span></span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-single-item">
                                    <div className="project-single-title">
                                        <h3>Our approach</h3>
                                    </div>
                                    <p>At Truckifind, we embrace a user-focused approach to app development, ensuring an exceptional experience 
                                        from beginning to end. Our process starts with thorough research and analysis of user needs and industry 
                                        trends, guiding our design and feature decisions. We emphasize creating a clean, intuitive interface that 
                                        simplifies the booking process and maximizes user satisfaction. Utilizing agile methodologies throughout 
                                        development allows us to adapt quickly and effectively to any changes. Our team leverages advanced technology 
                                        and best practices to develop a strong, scalable backend, ensuring smooth performance and robust security. 
                                        Ongoing testing and user feedback are integral to refining the app, enabling us to exceed user expectations. 
                                        Our dedication to innovation, quality, and user-centric design ensures that Truckifind stands out in the market 
                                        and genuinely meets our users' needs.</p>
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
                                                <li>Developed a more intuitive and user-friendly interface, making the truck booking process smoother and more accessible.</li>
                                                <li>Improved features for direct communication with drivers and easy booking, ensuring users can manage their logistics needs effortlessly.</li>
                                                <li>Strengthened backend systems for greater efficiency and reliability, supporting seamless performance even under high demand.</li>
                                                <li>Successfully implemented targeted marketing strategies, increasing visibility and attracting a broader user base.</li>
                                                <li>Provided responsive and effective customer support, significantly boosting user satisfaction and trust.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 list-widget-s">
                                            <div className="project-single-title">
                                                <h3>Results</h3>
                                            </div>
                                            <ul>
                                                <li>The enhanced interface has resulted in increased user engagement and easier navigation.</li>
                                                <li> More efficient booking features have led to higher user satisfaction and repeat usage.</li>
                                                <li>Optimized backend operations ensure smooth and dependable app functionality, even during peak usage.</li>
                                                <li>Effective marketing strategies have significantly grown the user base and boosted app visibility.</li>
                                                <li>Prompt and effective customer support has led to improved overall user satisfaction and trust.</li>
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
export default truckifind;