import { useState } from "react";



const Accordion = () => {
    const [OpenItem, setOpenItem] = useState(null);


    const handleItemClick = (itemId) => {
        setOpenItem(OpenItem === itemId ? null : itemId);
    };

    const AccordionData = [
        {
            id: "heading1",
            title: "Why is UI/UX design important?",
            content: "UI/UX design is crucial because it directly affects user satisfaction and engagement. Well-designed interfaces and experiences lead to higher user retention, increased efficiency, and better overall impressions of the product."
        },
        {
            id: "heading2",
            title: "What does a typical UI/UX design process involve?",
            content: "The process usually includes user research, wireframing, prototyping, visual design, user testing, and iterative design improvements based on feedback."
        },
        {
            id: "heading3",
            title: "How long does a UI/UX design project take?",
            content: "The timeline depends on the complexity of the project, but a typical UI/UX design project can range from a few weeks to several months. Factors influencing the timeline include the scope, the number of features, and the amount of research required."
        },
        {
            id: "heading4",
            title: "What are wireframes and prototypes?",
            content: "Wireframes are basic, low-fidelity layouts that outline the structure and content of a product. Prototypes are interactive, high-fidelity models that simulate the user experience and allow for testing and feedback before final development."
        },
        {
            id: "heading5",
            title: "How do you ensure a design meets user needs?",
            content: "We conduct user research, including surveys, interviews, and usability testing, to understand user needs and preferences. This information guides the design decisions and helps ensure the final product meets user expectations."
        },
        {
            id: "heading6",
            title: "Can you work with existing products or redesigns?",
            content: "Yes, we can work on designing new products or redesigning existing ones. Our approach involves assessing the current product, identifying areas for improvement, and implementing design changes to enhance the user experience."
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