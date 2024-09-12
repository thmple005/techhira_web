import React from 'react'
import Link from 'next/link'

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="col-lg-4 col-md-8">
            <div className="app-sidebar">
                <div className="service-widget widget">
                    <h2>All Services</h2>
                    <ul>
                        <li><Link onClick={ClickHandler} href={'/service-app/app-development'} as={`/service-app/app-development`}>App Development</Link></li>
                        <li><Link onClick={ClickHandler} href={'/service-Web/web-development'} as={`/service-web/web-development`}>Web Development</Link></li>
                        <li><Link onClick={ClickHandler} href={'/service-ui/ui-design'} as={`/service-ui/ui-design`}>UI/UX Design</Link></li>
                        <li><Link onClick={ClickHandler} href={'/service-ecommerce/ecommerce'} as={`/service-ecommerce/ecommerce`}>Ecommerce</Link></li>
                    </ul>
                </div>
                <div className="instagram-widget widget">
                    <h2>Languages</h2>
                    <ul>
                        <li>Swift</li>
                        <li>Kotlin</li>
                        <li>JAVA</li>
                        <li>ReactJS</li>
                        <li>Next JS</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div className="instagram-widget widget">
                    <h2>CMS</h2>
                    <ul>
                        <li>Magento</li>
                        <li>Shopify</li>
                        <li>Cs-Cart</li>
                        <li>WooCommerce</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ServiceSidebar;

