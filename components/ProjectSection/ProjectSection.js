import Slider from 'react-slick';
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from './ProjectCard';
import Projects from "../../api/projects";


const ProjectSection = (props) => {



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
            <section className={"section-padding " + props.hclass}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <SectionTitle subtitle="Recent Case Studies" title="Our Latest Case Studies" />
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
                <p>Bring your dream idea today!</p>
            </div>
        </>
    )
}

export default ProjectSection;











