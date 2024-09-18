import React, { useState } from 'react';
import ContactUsModal from '../ModalContactUs/ContactUsModal';

const CtaSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: 'Your Company*'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <ContactUsModal
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
            />
            <section className="cta-section">
                <div className="container">
                    <div className="cta-wrap">
                        <div className="content">
                            <h2>Want to discuss your new project?</h2>
                        </div>
                        <div>
                            <p className="cta-text" >Are you looking for some reliable development partners for your business needs? Get in touch with us!
                                Our highly qualified and experience team will discuss all ins and outs of your project and guide you on
                                the right path of development. Talk to us now!</p>
                        </div>
                        {/* <form className="cta-form" onSubmit={handleSubmit}>
                        <div className="input-filled">
                            <input type="text" placeholder="Your Name*" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="input-filled">
                            <input type="text" placeholder="Your Email*" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="input-filled">
                            <select name="company" value={formData.company} onChange={handleChange}>
                                <option disabled>Your Company*</option>
                                <option>Techhira</option>
                                <option>Manit</option>
                            </select>
                            <h2>Techhira</h2>
                        </div>
                        <div className="input-filled">
                            <button type="submit">Free Consultancy</button>
                        </div>
                    </form> */}
                        <div className="cta-form">
                            <div className="input-filled">
                                    <button type="submit" onClick={showModal}>Get a Free Consultancy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CtaSection;
