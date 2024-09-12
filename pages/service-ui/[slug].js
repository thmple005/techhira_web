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

import sSImg from '/public/images/service-single/3.png'

const ServiceUiPage = (props) => {
    const router = useRouter()

    const serviceDetails = Services.find(item => item.slug === router.query.slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
            <PageTitle pageTitle={'UI/UX Design'} pagesub={'Service'} />
            <section className="service-app-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="service-app-wrap">
                                <div className="service-app-content">
                                    <Image src={sSImg} alt="" />
                                    <div className="service-app-content-des">
                                        <h2>{'UI/UX Design'}</h2>
                                        <p>Techhira is a premier UI/UX design and development company specializing in creating innovative
                                             web and app designs with exceptional user experiences. As a top firm in web and app 
                                             development, we build engaging products that address customer needs swiftly. Our expert 
                                             UI/UX designers focus on user expectations, enhancing usability with best design practices. 
                                             We adhere to design standards that strengthen business identity and enhance brand recall.</p>
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
                        <h2> UI/UX Designing Services</h2>
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
export default ServiceUiPage;