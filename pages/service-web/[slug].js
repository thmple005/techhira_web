import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Services from '../../api/Services';
import ServiceSidebar from './sidebar'
import Footer from '../../components/footer/Footer';
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Logo from '/public/images/logo-2.svg'
import Phone from '/public/images/telephone.svg'
import Accordion from './accordion';
import Image from 'next/image';
import OurSolutions from './OurSolutions';

import sSImg from '/public/images/service-single/2.png'

const ServiceWebPage = (props) => {
    const router = useRouter()

    const serviceDetails = Services.find(item => item.slug === router.query.slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
            <PageTitle pageTitle={'Web Development'} pagesub={'Service'} />
            <section className="service-app-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="service-app-wrap">
                                <div className="service-app-content">
                                    <Image src={sSImg} alt="" />
                                    <div className="service-app-content-des">
                                        <h2>{'Web Development'}</h2>
                                        <p>Techhira is a leading provider of custom web development services.
                                            Partnering with us will open up a world of possibilities and give you access
                                            to the expertise of our knowledgeable developers and specialists. As a custom
                                            web application development company, we offer tailored services specifically
                                            designed to deliver the best results for your business. Web applications, rather
                                            than websites, are intended to interact with users.</p>
                                        <p>Our web developers leverage essential tools and technologies to create
                                            web development solutions that help you connect with your users. Build
                                            your web solutions with us to enhance your company’s profitability and
                                            efficiency. We are the right web development agency based on our pricing
                                            models, experience, and client testimonials. Contact us to learn more about
                                            the services our expert web development team offers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ServiceSidebar />
                    </div>
                    <div className="solutions-section">
                        <h2>Our Solutions</h2>
                        <div className="row">
                            <OurSolutions />
                        </div>
                    </div>
                    <div className="benefits-section">
                        <h2>Web Development Services Benefits</h2>
                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <div className="benefits-item">
                                    <Accordion />
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
export default ServiceWebPage;