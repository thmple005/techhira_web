import React from "react";
import hero1 from '/public/images/bryte_main_page_header-.jpg'
import hero2 from '/public/images/slider/like.svg'
import VideoModal from "../ModalVideo/VideoModal";
import Image from "next/image";
import ContactUsModal from "../ModalContactUs/ContactUsModal";
import { useState } from "react";
import { motion } from "framer-motion";

const Hero3 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <>
            <ContactUsModal
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
            />
            <section className="hero-slide">
                <div className="hero-slider-section">
                    <div className="hero-bg">
                        <Image src={hero1} alt="" />
                    </div>
                    <div className="container-fluid">
                        <div className="content">
                            <div className="title " >
                                <div className="icon">
                                    <Image src={hero2} alt="" />
                                </div>
                                <span>Create Your Dream Project With Us</span>
                            </div>
                            <div className="sub-title" >
                                <h2>
                                       We Develop 
                                </h2>
                                <h2><span>Websites & Mobile Apps </span> </h2>
                            </div>
                            <p>We prioritize
                                understanding your unique business requirements,
                                tailoring solutions that not only meet your needs but also exceed your expectations.</p>
                            {/* <div className="hero-btn">
                                <Link href="/contact" className="theme-btn">Get Started<i className="ti-arrow-right"></i></Link>
                            </div> */}
                            <div className="hero-btn">
                                <button onClick={showModal} className="theme-btn">
                                    Get Started<i className="ti-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="video" >
                        <VideoModal />
                    </div>
                </div>
            </section>
        </>

    )
}

export default Hero3;



