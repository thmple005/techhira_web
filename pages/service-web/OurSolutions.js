import Image from 'next/image';

import simgaap1 from '/public/images/services/icon-2.svg'
import simg2 from '/public/images/services/computer1.png'
import simgaap2 from '/public/images/services/icon-3.svg'
import simgaap3 from '/public/images/services/icon-4.svg'
import simg4 from '/public/images/services/online-shopping.png'
import simg5 from '/public/images/services/responsive.png'

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
                        <h2>Full Stack Development Services</h2>
                        <p>
                            Turn your web development ideas into reality with our skilled full-stack developers.
                            We specialize in both front-end and back-end solutions using cutting-edge technologies.
                            Our expertise includes popular stacks such as MEAN, MERN, Django, LAMP, and Ruby on Rails
                            (RoR).</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="solutions-item">
                    <div className="solutions-icon">
                        <div className="icon">
                            <Image src={simg5} alt="" />
                        </div>
                    </div>
                    <div className="solutions-text">
                        <h2>Progressive Web Apps </h2>
                        <p>Our web development company specializes in crafting feature-rich
                            progressive web apps that offer visually appealing content,
                            smooth navigation, and fast load times. We prioritize delivering an
                            exceptional user experience, enhancing mobile engagement, and driving
                            higher conversion rates for your business.</p>
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
                        <h2>Web Application Development </h2>
                        <p>As a web development company, we provide tailored web application
                            services and solutions that are secure, adaptable, and scalable.
                            Our web apps are designed to be easily customized to meet project
                            requirements and are built to avoid compatibility issues, ensuring
                            seamless performance across different platforms.</p>
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
                        <h2>eCommerce Web Development </h2>
                        <p>Boost your business growth and strengthen your online presence
                            with our eCommerce website development services. We deliver top-tier
                            progressive web app solutions, ensuring an unforgettable user experience.
                            Our focus is on providing premium development that enhances your web
                            presence and drives success.</p>
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
                        <h2>Enterprise Web Solutions </h2>
                        <p>
                            Develop a robust enterprise web application that is secure, reliable, and flexible
                            with us. We provide a comprehensive solution covering all web development stages,
                            including UI/UX design, wireframing, development, and quality assurance. Trust us
                            to deliver a seamless and efficient web application tailored to your needs.</p>
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
                        <h2>Content Management System </h2>
                        <p>By integrating CMS software into your website, we simplify
                            content management significantly. Our web development services provide
                            custom solutions that enhance your website's overall functionality and
                            streamline content handling, making it easier for you to manage and update
                            your site effectively.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurSolutions