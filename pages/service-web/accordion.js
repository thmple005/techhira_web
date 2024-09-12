import { useState } from "react";



const Accordion = () => {
    const [OpenItem, setOpenItem] = useState(null);


    const handleItemClick = (itemId) => {
        setOpenItem(OpenItem === itemId ? null : itemId);
    };

    const AccordionData = [
        {
            id: "heading1",
            title: "What is a web application development company?",
            content: "A web application development company specializes in creating interactive web applications that run on web browsers. These applications are designed to engage users, perform specific tasks, and provide a seamless user experience."
        },
        {
            id: "heading2",
            title: "How does a web application differ from a website?",
            content: "While a website is typically informational and static, a web application is interactive and dynamic, allowing users to perform tasks such as filling out forms, managing data, and interacting with various elements in real-time."
        },
        {
            id: "heading3",
            title: "What services do web application development companies offer?",
            content: "Services typically include custom web application development, UI/UX design, backend development, database management, API integration, testing and quality assurance, maintenance, and support."
        },
        {
            id: "heading4",
            title: "Why should I choose a custom web application over off-the-shelf solutions?",
            content: "Custom web applications are tailored to meet your specific business needs, providing flexibility, scalability, and a competitive edge. They can be designed to integrate seamlessly with your existing systems and processes."
        },
        {
            id: "heading5",
            title: " What technologies are used in web application development?",
            content: "Common technologies include HTML, CSS, JavaScript, TypeScript, React, Angular, Vue.js, Node.js, Python (Django, Flask), Ruby on Rails, PHP (Laravel), Java (Spring Boot), and C# (ASP.NET), among others."
        },
        {
            id: "heading6",
            title: " How long does it take to develop a web application?",
            content: "The timeline for web application development varies depending on the project's complexity, scope, and requirements. A simple application might take a few weeks, while a more complex solution could take several months."
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