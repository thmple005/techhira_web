import React from "react";
import Services from "../../api/Services";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard"
import ShapeOn from '/public/images/services/bg.jpg'
import Image from "next/image";

import bgImage1 from '/public/images/service-single/bgImage1.png';
import bgImage2 from '/public/images/service-single/bgImage2.png';
import bgImage3 from '/public/images/service-single/bgImage3.png';
import bgImage4 from '/public/images/service-single/bgImage4.png';


const ServiceSection = (props) => {
    const serviceBackgrounds = [bgImage1, bgImage2, bgImage3, bgImage4];

    return (
        <section className={"section-padding " + props.hclass}>
            <div className="top-img">
                <Image src={ShapeOn} alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <SectionTitle title="our services" subtitle="Dive Deeper into" />
                    </div>
                </div>
                <div className="services-wrap">
                    <div className="row">
                        {Services.map((item, sindx) => (
                            <div className="col col-xl-3 col-lg-6 col-md-6 col-12" key={sindx}>
                                <ServiceCard 
                                key={sindx} 
                                title={item.title} 
                                img={item.sImg} 
                                slug={item.slug} 
                                sdescription={item.description} 
                                spanNumber={item.spanNumber} 
                                backgroundImage={serviceBackgrounds[sindx]}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ServiceSection;