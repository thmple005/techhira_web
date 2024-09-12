import Link from 'next/link'
import logo from '/public/images/footer.svg'
import Shape1 from '/public/images/mail.svg'
import News1 from '/public/images/phone.svg'
import News2 from '/public/images/map.svg'
import Image from 'next/image'
import { FaWhatsapp } from "react-icons/fa";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}



const Footer = (props) => {


    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={logo} alt="blog" />
                                </div>
                                <p>Techhira is a space where people build lasting relationships with the 
                                    brands they trust, both online and offline.</p>

                                <div className="social-widget">
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/">Home</Link></li>
                                    <li><Link onClick={ClickHandler} href="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/">Services</Link></li>
                                    {/* <li><Link onClick={ClickHandler} href="/blog">Latest News</Link></li> */}
                                    <li><Link onClick={ClickHandler} href="/project">Portfolio</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget s2">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/project">Projects</Link></li>
                                    <li><Link onClick={ClickHandler} href="/login">Sign Up</Link></li>
                                    <li><Link onClick={ClickHandler} href="/testimonials">Testimonials</Link></li>
                                    <li><Link onClick={ClickHandler} href="/faq">Faq</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">contact</Link></li>
                                    <li><Link onClick={ClickHandler} href="/login">Login as admin</Link></li>
                                </ul>
                            </div>
                        </div> */}

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget contact-widget">
                                <div className="widget-title">
                                    <h3>Contact Us</h3>
                                </div>
                                <ul>
                                    <li><Image src={Shape1} alt="" /><span>info@techhira.com</span>
                                    </li>
                                    <li><FaWhatsapp className='whtasaaplogo'/> <span>+917087979193
                                        <br /></span></li>
                                    <li><Image src={News2} alt="" /><span>I-Thum Tower Sector-62<br />
                                    , Noida Uttar Pradesh</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row g-0">
                        <div className="footer-page">
                            <p className="copyright"> Copyright &copy; 2024 Techhira by <Link onClick={ClickHandler} href="/">Techhira</Link>. All
                                Rights Reserved.</p>
                        </div>
                        {/* <div className="col col-lg-6 col-12">
                            <ul>
                                <li><Link onClick={ClickHandler} href="/">privacy & Policy</Link></li>
                                <li><Link onClick={ClickHandler} href="/">Terms</Link></li>
                                <li><Link onClick={ClickHandler} href="/login">Login</Link></li>
                            </ul>

                        </div> */}
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;

