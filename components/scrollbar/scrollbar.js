import React, { useState } from 'react';
import Image from 'next/image';
import whatsapp from '/public/images/whatsaap.gif';
import ContactUsModal from '../ModalContactUs/ContactUsModal';
// import { motion } from 'framer-motion';
// import chatbox from '/public/images/chat.gif';

const Scrollbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showFullText, setShowFullText] = useState(true);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const toggleButtonText = () => {
        setShowFullText(!showFullText);
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <>
            <ContactUsModal
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
            />
            <div className="col-lg-12">
                <div className="header-menu">
                    <ul className="smothscroll">
                        <li className='li-arrow-icon'>
                            <a
                                href="https://api.whatsapp.com/send?phone=7087979193"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image src={whatsapp} alt="whatsapp" />
                            </a>
                        </li>
                        {/* <li className='li-arrow-icon'>
                            <div
                                onClick={() => {
                                    showModal();
                                    toggleButtonText();
                                }}
                            >
                                <Image src={chatbox} alt="Telephone" />
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Scrollbar;
