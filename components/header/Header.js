import React from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import Image from 'next/image'
import ContactUsModal from '../ModalContactUs/ContactUsModal'
import { useState } from "react";

const Header = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
            <header id="header" >
                <ContactUsModal
                    isModalOpen={isModalOpen}
                    handleCancel={handleCancel}
                />
                <div className={" " + props.hclass}>
                    <nav className="navigation navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                    <MobileMenu />
                                </div>
                                <div className="col-lg-2 col-md-6 col-6">
                                    <div className="navbar-header">
                                        <Link className="navbar-brand" href="/">
                                            <Image src={props.Logo} alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-1 col-1">
                                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                        <ul className="nav navbar-nav mb-2 mb-lg-0">
                                            <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} href="/">Home</Link>
                                                {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler}  href="/">Home style 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-2">Home style 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-3">Home style 3</Link></li>
                                            </ul> */}
                                            </li>
                                            <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                            <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} href="#">Services</Link>
                                                <ul className="sub-menu">
                                                    {/* <li><Link onClick={ClickHandler} href="/services">Services</Link></li> */}
                                                    <li><Link onClick={ClickHandler} href="/service-app/app-development">App Development</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/service-web/web-development">Web Development</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/service-ui/ui-design">UI/UX Design</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/service-ecommerce/ecommerce">Ecommerce</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} href="/project">Portfolio</Link>
                                                {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/project">Portfolio</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="#">Project details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/project-food-fling/foodfling">Food Fling App</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/project-meetsy-app/meetsy">Meetsy App</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/project-truckifind-app/truckifind">Truckifind App</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/project-auto-us-direct/autous">Auto Us Direct App</Link></li>
                                                    </ul>
                                                </li>
                                            </ul> */}
                                            </li>
                                            {/* <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="#">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="#">Blog details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation">Blog details right sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/15-Secrets-Of-Digital-Transformation">Blog details left
                                                            sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/15-Secrets-Of-Digital-Transformation">Blog details
                                                            fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li> */}
                                            <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} href="/testimonials">Testimonial</Link>
                                                {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/testimonials">testimonials</Link></li>
                                                <li><Link onClick={ClickHandler} href="/login">Login</Link></li>
                                                <li><Link onClick={ClickHandler} href="/register">Register</Link></li>
                                                <li><Link onClick={ClickHandler} href="/404">404 Error</Link></li>
                                            </ul> */}
                                            </li>
                                            {/* <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li> */}
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-2 col-2">
                                    <div className="header-right">
                                        <a className="call-number">
                                            <div className="text">
                                                <span className="title" onClick={showModal}>Request Quote</span>
                                            </div>
                                            {/* <div className="icon">
                                            <Image src={props.telephone} alt="" />
                                        </div> */}
                                            {/* <div className="text">
                                            <span className="title">Hotline 24/7</span>
                                            <span className="number">+917087979193</span>
                                        </div> */}

                                        </a>
                                        {/* <div className="login">
                                            <Link href="/login">Login</Link>
                                        </div>
                                        <div className="close-form">
                                            <Link className="theme-btn" href="/contact">Start Free Trial</Link>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
    )
}

export default Header;


