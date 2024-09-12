import Image from 'next/image';

import simgaap1 from '/public/images/services/icon-1.svg'
import simg2 from '/public/images/services/app-icon2.png'
import simgaap2 from '/public/images/services/app-icon1.png'
import simgaap3 from '/public/images/services/app-icon4.png'
import simg4 from '/public/images/services/responsive.png'
import simga from '/public/images/services/icon-2.svg'

const OurSolutions = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="solutions-item">
                    <div className="solutions-icon">
                        <div className="icon">
                            <Image src={simg2} alt="" />
                        </div>
                    </div>
                    <div className="solutions-text">
                        <h2>Wireframe And Interactive Prototyping </h2>
                        <p>At Techhira, we deliver comprehensive wireframe and prototyping
                            design services, clearly defining page layouts and site structures.
                            We integrate interaction design and information architecture using
                            conceptual wireframing. Our visual approach ensures the creation of
                            high-fidelity wireframes with precise and detailed design clarity.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="solutions-item">
                    <div className="solutions-icon">
                        <div className="icon">
                            <Image src={simgaap3} alt="" />
                        </div>
                    </div>
                    <div className="solutions-text">
                        <h2>User Interface Design </h2>
                        <p>Design visually appealing and intuitive interfaces using our cutting-edge
                            frameworks. We turn your requirements into functional web designs that enhance
                            user interaction and engagement. Our thorough approach ensures every aspect of
                            your design is both attractive and user-friendly, providing an exceptional experience
                            that meets your business goals effectively.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="solutions-item">
                    <div className="solutions-icon">
                        <div className="icon">
                            <Image src={simgaap1} alt="" />
                        </div>
                    </div>
                    <div className="solutions-text">
                        <h2>User Experience Design </h2>
                        <p>Bring your product idea to life with our web design consultants, who help identify and
                            address gaps in your site’s interface. Our comprehensive site analysis process ensures
                            you achieve your business goals efficiently. By embedding micro-interactions into the UI,
                            we create an engaging and user-friendly experience that captivates all visitors and enhances
                            usability.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="solutions-item">
                    <div className="solutions-icon">
                        <div className="icon">
                            <Image src={simg4} alt="" />
                        </div>
                    </div>
                    <div className="solutions-text">
                        <h2>Responsive Design </h2>
                        <p>Our UX design experts craft responsive web designs that adapt to all screen
                            sizes without sacrificing quality. We've mastered creating custom websites
                            that not only provide an exceptional user experience but also enhance usability
                            with user-centric design and content. Enjoy a seamless, engaging experience on
                            any device.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="solutions-item">
                    <div className="solutions-icon">
                        <div className="icon">
                            <Image src={simgaap2} alt="" />
                        </div>
                    </div>
                    <div className="solutions-text">
                        <h2>Usability Testing </h2>
                        <p>Techhira, as a UX design company, provides extensive usability testing to
                            gauge market acceptance. Our UI/UX designs are evaluated by real users from the
                            target audience using advanced testing tools. Our all-inclusive package covers
                            compatibility testing, crowd testing, screen resolution tests, and more to ensure
                            optimal performance.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="solutions-item">
                    <div className="solutions-icon">
                        <div className="icon">
                            <Image src={simga} alt="" />
                        </div>
                    </div>
                    <div className="solutions-text">
                        <h2>Website Redesign Services</h2>
                        <p>Revamp your website with our UI/UX designers, turning your needs into impactful
                            results that boost productivity and speed up outcomes. We use a diverse set of
                            wireframes to ensure your site effectively meets business objectives, providing precise,
                            actionable solutions that enhance performance and deliver an exceptional user experience.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurSolutions