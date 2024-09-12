import simgaap1 from '/public/images/services/icon-1.svg'
import simg2 from '/public/images/services/app-icon3.png'
import simgaap2 from '/public/images/services/icon-2.svg'
import simgaap3 from '/public/images/services/app-icon4.png'
import simg4 from '/public/images/services/online-shopping.png'
import simg5 from '/public/images/services/computer1.png'
import Image from 'next/image';

const OurSolutions = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="solutions-item">
                    <div className="solutions-icon">
                        <div className="icon">
                            <Image src={simgaap1} alt="" />
                        </div>
                    </div>
                    <div className="solutions-text">
                        <h2>Magento Development Services </h2>
                        <p>We provide advanced Magento development services tailored to your e-commerce business.
                            Our approach extends beyond front-end design to deliver results that boost user experience
                            and drive engagement. We ensure your online store operates seamlessly and captivates visitors
                            with high-performance solutions.</p>
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
                        <h2>WooCommerce Development </h2>
                        <p>Techhira offers comprehensive and scalable WooCommerce development services to elevate
                            your retail business. We implement cutting-edge features and functionalities to enhance
                            your online store, helping you grow and reach a global market with ease. Expand your
                            business horizons effectively with our tailored solutions.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="solutions-item">
                    <div className="solutions-icon">
                        <div className="icon">
                            <Image src={simg2} alt="" />
                        </div>
                    </div>
                    <div className="solutions-text">
                        <h2>Bigcommerce Development </h2>
                        <p>Techhira is a leading BigCommerce development service provider, delivering innovative
                            and seamless solutions. We elevate your project by integrating cutting-edge features
                            and boosting productivity, ensuring your e-commerce platform reaches new heights with
                            modern and efficient solutions. </p>
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
                        <h2>Shopify Website Development Services </h2>
                        <p>Create a powerful, sales-focused, and secure Shopify eCommerce platform with our expert
                            development services. Our experienced Shopify developers craft exceptional online stores,
                            incorporating rich features and flawless functionality to ensure your platform is both
                            effective and user-friendly.</p>
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
                        <h2>CS-Cart </h2>
                        <p>With Techhira, get premium custom CS-Cart development tailored for startups, mid-sized
                            businesses, or enterprises. Our expert developers create unique web templates and themes,
                            ensuring your online presence stands out with a distinctive and impactful design. Enhance
                            your business visibility with our professional services.</p>
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
                        <h2>PHP Development Services </h2>
                        <p>Embark on a major transformation with Techhira' premier PHP development services. Our
                            expert PHP developers create robust, future-ready websites that give your business a
                            competitive edge. We offer tailored solutions that ensure scalability and performance,
                            helping you build a high-impact online presence with lasting value.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurSolutions