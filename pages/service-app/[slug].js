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

import sSImg from '/public/images/service-single/1.png'

const ServiceAppPage = (props) => {
    const router = useRouter()

    const serviceDetails = Services.find(item => item.slug === router.query.slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
            <PageTitle pageTitle={'App Development'} pagesub={'Service'} />
            <section className="service-app-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="service-app-wrap">
                                <div className="service-app-content">
                                    <Image src={sSImg} alt="" />
                                    <div className="service-app-content-des">
                                        <h2>{'App Development'}</h2>
                                        <p>At Techhira, we deliver high-end mobile app development services that set the
                                            standard for excellence. Our expertise in iOS app development and cross-platform
                                            solutions ensures that we provide premium user experiences tailored to your specific
                                            needs.</p>
                                        <p>As a leading mobile app development company, Techhira is committed to delivering
                                            reliable, secure, and unique mobile solutions. Our team of certified app developers
                                            stays at the forefront of market trends and techniques, ensuring that your app benefits
                                            from the latest advancements in technology. With over more years of experience, we have
                                            successfully developed a diverse range of scalable and secure mobile apps for a global
                                            clientele.</p>
                                        <p>Our in-house iOS app developers are highly skilled in crafting high-quality
                                            mobile applications that meet your business objectives and exceed user expectations.
                                            Whether you're a startup or an established enterprise, Techhira offers the expertise
                                            and innovation needed to bring your app vision to life.</p>
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
                        <h2>Mobile App Development Services Benefits</h2>
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
export default ServiceAppPage;