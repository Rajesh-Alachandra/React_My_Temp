// src/layout/Footer.js
import React from 'react';
import './css/Footer.css'; // Create and style your Footer.css file
import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <img className='footer-logo' src={assets.logo} alt="" />
                    <p className="footer-tagline">
                        Where passion for flavour meets the art of indulgence, offering
                        handcrafted treats and culinary delights for every moment.
                    </p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>OUTLETS</li>
                        <li>CAKES</li>
                        <li>WORKSHOPS</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <p>📞 +91-7661971432</p>
                    <p>✉️ rajeshalachandra@gmail.com</p>
                    <div className="footer-social-icons">
                        <span>🌐</span>
                        <span>🔗</span>
                        <span>💬</span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p> &copy; COPYRIGHT 2024, ALL RIGHTS RESERVED</p>
            </div>
        </footer>
    );
};

export default Footer;
