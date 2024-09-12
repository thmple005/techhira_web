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



import sSImg from '/public/images/service-single/4.png'

const ServiceEcommercePage = (props) => {
    const router = useRouter()

    const serviceDetails = Services.find(item => item.slug === router.query.slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
            <PageTitle pageTitle={'Ecommerce'} pagesub={'Service'} />
            <section className="service-app-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="service-app-wrap">
                                <div className="service-app-content">
                                    <Image src={sSImg} alt="" />
                                    <div className="service-app-content-des">
                                        <h2>{'Ecommerce'}</h2>
                                        <p>At Techhira, we are your reliable eCommerce solutions provider, leveraging cutting-edge 
                                            technology. We recognize that each business is unique, so we offer more than just website 
                                            development. Our eCommerce solutions are tailored to meet your specific needs, adding value 
                                            with custom solutions designed for your business. Our results-driven approach and the latest 
                                            eCommerce software ensure your online platform makes a strong impact. Our dynamic team is 
                                            dedicated to building an eCommerce presence that embodies quality, exclusivity, and 
                                            reliability.</p>
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
export default ServiceEcommercePage;