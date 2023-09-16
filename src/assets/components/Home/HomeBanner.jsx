import React from 'react';
import './home.css';

const HomeBanner = () => {
    return (
        <div className="banner-container">
            <div className="left-container banner-image-mobile">
                <div className="fresh-box">
                    <p className="fresh">Fresh</p>
                </div>
                <div className="two-box">
                    <p className="two">2022</p>
                </div>
                <div className="look-box">
                    <p className="look">Look</p>
                    <p className='star-bottom-banner'>
                        <svg width="64" height="91" viewBox="0 0 64 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Star 4" d="M32 0.972351L34.0365 42.6785L64 45.5131L34.0365 48.3476L32 90.0538L29.9635 48.3476L0 45.5131L29.9635 42.6785L32 0.972351Z" fill="white" />
                        </svg>
                    </p>
                </div>
            </div>
            <div className="right-container">
                <div className='banner-image'></div>
                <div className='oregon-text-box'>
                    <p>OREGON JACKET</p>
                    <p>$125</p>
                </div>
            </div>
            <div className='orange-container '></div>
        </div>
    );
};

export default HomeBanner;
