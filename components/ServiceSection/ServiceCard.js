import React from "react";
import Link from 'next/link'

const ServiceCard = ({ img, title, sdescription, slug, spanNumber,backgroundImage }) => {
    const ClickHandler = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div className="relative services-card" >
        
        {/* style={{
            background: `url(${backgroundImage.src}) no-repeat center top / cover`,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'relative',
            zIndex: 1
        }}
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                background: '#242633',
                opacity: 0.65,
                zIndex: -1
            }}></div> */}
        
            <div className="number-shape">
                <span>{spanNumber}</span>
                <div className="shape">
                    <svg viewBox="0 0 112 107" fill="none">
                        <path id="Bg5"
                            d="M67.9706 0.555039C89.2118 -0.484865 110.489 16.3952 111.529 37.6365C112.568 58.8777 92.9541 105.645 71.7129 106.685C50.4716 107.725 1.72311 63.4921 0.683209 42.2509C-0.356694 21.0097 46.7293 1.59494 67.9706 0.555039Z" />
                    </svg>
                </div>
            </div>
            <div className="icon">
                <img src={img} alt="" />
            </div>
            <h2>{title}</h2>
            <span >{sdescription}</span>
            <h3>
                <Link href={slug} onClick={ClickHandler}>
                    <span>Learn More</span>
                    <i className="ti-arrow-right"></i>
                </Link>
            </h3>
        </div>
    )
}


export default ServiceCard;

