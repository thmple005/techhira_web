import Slider from 'react-slick';
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from './ProjectCard';
import Projects from "../../api/projects";
import ContactUsModal from "../ModalContactUs/ContactUsModal";
import { useState } from "react";


const ProjectSection = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };



    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: '0px',
        speed: 500,
        dots: true,
        arrows: false,
        variableWidth: true,
        responsive: [{
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                centerMode: false,
            }
        },

        ]
    };


    return (
        <>
        <ContactUsModal
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
            />
            <section className={"section-padding " + props.hclass}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <SectionTitle subtitle="Take a look At" title="recent case studies" />
                        </div>
                    </div>
                </div>
                <div className="project-slider" >
                    <Slider {...settings}>
                        {Projects.map((item, Pindx) => (
                            <div key={Pindx}>
                                <ProjectCard Pimg={item.pimg1} Psubtitle={item.subtitle} Ptitle={item.title} slug={item.slug} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
            <div className='section-buttom-text'>
                <p>Let's bring your idea to live today!</p>
            </div>
            <div className='section-buttom-button'>
                <div className="hero-btn">
                    <button onClick={showModal} className="theme-btn">
                        Get a Free Consultancy
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProjectSection;











