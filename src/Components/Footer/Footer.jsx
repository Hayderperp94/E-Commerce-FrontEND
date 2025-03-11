import React from "react";
import './Footer.css';
import img from '../../assets/logo.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import whatsapp from '../../assets/whatsapp.png';

const Footer = () => {
    return (
        <div className="footer-all">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={img} alt="Logo" width="100px" />
                </div>
                <div className="footer-text">
                    <h1 className="fs-6 mt-5 pt-3">
                        Developed by <span className="text-primary fs-3 fw-bold">Hayder A. Abdullah</span>
                    </h1>
                </div>
                <div className="footer-socials">
                    <div>
                        <img className="footer-img" src={facebook} alt="Facebook" width="50px" />
                    </div>
                    <div>
                        <img className="footer-img" src={instagram} alt="Instagram" width="50px" />
                    </div>
                    <div>
                        <img className="footer-img" src={whatsapp} alt="Whatsapp" width="50px" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
