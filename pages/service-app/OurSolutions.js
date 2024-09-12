import Image from 'next/image';

import simgaap1 from '/public/images/services/app-icon1.png'
import simg6 from '/public/images/services/app-icon2.png'
import simgaap2 from '/public/images/services/icon-3.svg'
import simgaap3 from '/public/images/services/icon-4.svg'
import simg4 from '/public/images/services/app-icon4.png'
import simg5 from '/public/images/services/app-icon3.png'


const OurSolutions = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="solutions-item">
                    <div className="solutions-icon">
                        <div className="icon">
                            <Image src={simg4} alt="" />
                        </div>
                    </div>
                    <div className="solutions-text">
                        <h2>IOS App Development</h2>
                        <p>
                            As a full-stack iOS app development company, we create highly successful
                            apps. Our custom iPhone application development services are provided by a
                            team of skilled and experienced iOS developers, ensuring top-quality and
                            innovative solutions for your needs.</p>
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
                        <h2>Android App Development</h2>
                        <p>Our Android development services cater to the needs of established companies
                            and SMEs. Our skilled Android app developers create effective and reliable
                            custom apps tailored to your business needs, ensuring high performance and
                            user satisfaction.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="solutions-item">
                    <div className="solutions-icon">
                        <div className="icon">
                            <Image src={simg6} alt="" />
                        </div>
                    </div>
                    <div className="solutions-text">
                        <h2>Cross-Platform App Development</h2>
                        <p>
                            We have extensive experience in building cross-platform mobile applications
                            and web experiences across various industries. Utilizing technologies like
                            HTML5, CSS3, and JavaScript, we implement responsive and adaptive design techniques
                            for optimal performance. </p>
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
                        <h2>Mobile App Strategy</h2>
                        <p>Get a tailored mobile app development strategy aligned with your business needs.
                            Our mobile app developers streamline the process, reducing both time to
                            market and development costs, ensuring a smooth and efficient mobile app strategy.</p>
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
                        <h2>Mobile App Design</h2>
                        <p>
                            We design tailored, domain-specific mobile apps that perfectly portray your brand.
                            Our development services create outstanding user interfaces and experiences
                            that customers love, ensuring your mobile app solutions excel on any platform.</p>
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
                        <h2>Mobile Support & Maintenance </h2>
                        <p>We offer post-launch support and maintenance to ensure optimal performance,
                            compliance, and security. Our support team operates 24/5 to provide effective
                            risk mitigation and updates, ensuring your mobile solutions remain robust
                            and up-to-date.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurSolutions