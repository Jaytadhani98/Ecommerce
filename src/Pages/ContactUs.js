import React from 'react';
import './All.css';

const ContactUs = () => {
    const handleButtonClick = () => {
        window.open('https://www.linkedin.com/in/jay-tadhani-a27b832b8/', '_blank');
    };

    return (
        <div className="contact-form">
            <div className="contact-info">
                <div className="icon-container">
                    <i className="fas fa-map-marker-alt"></i>
                </div>
                <p>Rajkot</p>
            </div>
            <div className="contact-info">
                <div className="icon-container">
                    <i className="fas fa-envelope"></i>
                </div>
                <p>jaytadhani.jt@gmail.com</p>
            </div>
            <div className="contact-info">
                <div className="icon-container">
                    <i className="fas fa-phone-alt"></i>
                </div>
                <p>+91 9898681172</p>
            </div>
            <button type="button" onClick={handleButtonClick}>Send Message</button>
        </div>
    );
};

export default ContactUs;
