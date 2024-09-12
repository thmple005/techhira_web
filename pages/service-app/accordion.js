import { useState } from "react";



const Accordion = () => {
    const [OpenItem, setOpenItem] = useState(null);


    const handleItemClick = (itemId) => {
        setOpenItem(OpenItem === itemId ? null : itemId);
    };

    const AccordionData = [
        {
            id: "heading1",
            title: "What platforms do you develop mobile apps for?",
            content: "We develop mobile apps for iOS and Android platforms, including cross-platform solutions."
        },
        {
            id: "heading2",
            title: "What is the typical development timeline for a mobile app?",
            content: "The timeline varies based on the project's complexity, but typically ranges from 3 to 6 months."
        },
        {
            id: "heading3",
            title: "Do you provide post-launch support?",
            content: "Yes, we offer post-launch support and maintenance to ensure optimal performance and updates."
        },
        {
            id: "heading4",
            title: "Can you help with app store submission?",
            content: "Absolutely, we assist with the entire app store submission process, ensuring compliance with guidelines."
        },
        {
            id: "heading5",
            title: "What technologies do you use for mobile app development?",
            content: "We use a range of technologies including Swift, Kotlin, React Native, and Flutter."
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