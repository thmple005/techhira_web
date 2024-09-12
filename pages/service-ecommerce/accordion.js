import { useState } from "react";



const Accordion = () => {
    const [OpenItem, setOpenItem] = useState(null);


    const handleItemClick = (itemId) => {
        setOpenItem(OpenItem === itemId ? null : itemId);
    };

    const AccordionData = [
        {
            id: "heading1",
            title: "What is eCommerce development?",
            content: "eCommerce development involves creating and managing online stores to sell products or services. It includes website design, platform integration, payment gateway setup, and optimizing user experience."
        },
        {
            id: "heading2",
            title: "What eCommerce platforms do you work with?",
            content: "We work with various eCommerce platforms, including Magento, Shopify, WooCommerce, BigCommerce, and CS-Cart, among others."
        },
        {
            id: "heading3",
            title: "How long does it take to develop an eCommerce website?",
            content: "The timeline varies based on complexity and requirements. Generally, it ranges from a few weeks to several months. Factors include design complexity, functionality, and content requirements."
        },
        {
            id: "heading4",
            title: "Can you integrate payment gateways into my eCommerce site?",
            content: "Yes, we can integrate various payment gateways to ensure secure and smooth transactions. This includes options like PayPal, Stripe, Square, and others."
        },
        {
            id: "heading5",
            title: "Do you provide ongoing support and maintenance?",
            content: "Yes, we offer ongoing support and maintenance services to ensure your eCommerce site runs smoothly, including updates, bug fixes, and troubleshooting."
        },
        {
            id: "heading6",
            title: "How do you ensure the security of my eCommerce website?",
            content: "We implement robust security measures, including SSL certificates, secure payment gateways, and regular updates to protect against vulnerabilities and threats."
        },
    ]


    return (
        <div className="accordion">
            {AccordionData.map((item =>
                <div className="accordion-item" key={item.id} >
                    <h3 className="accordion-header" id={item.id}>
                        <button className={`accordion-button ${OpenItem === item.id ? '' : 'collapsed'}`} type="button" onClick={() => handleItemClick(item.id)}>
                            {item.title}
                        </button>
                    </h3>
                    <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${OpenItem === item.id ? 'show' : ''}`} aria-labelledby={item.id}>
                        <div className="accordion-body">
                            <p>{item.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Accordion;