import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo">
                    <img src="http://localhost:3000/images/smith-alloy-logo.png" alt="Logo" />
                </div>
                <div className="footer-contact">
                    <p className="contact-info">
                        <span><span className='info-d'>Mobile No : </span> +91 8084710336</span>
                        <span><span className='info-d'>Email: </span>  info@smiththerm.com</span>
                    </p>
                    <p> <span className='info-d'>Address:</span> Argha Ghat Road, Giridih - 815301</p>
                </div>
                <div className="footer-border"></div>
                <div className="footer-copyright">
                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;