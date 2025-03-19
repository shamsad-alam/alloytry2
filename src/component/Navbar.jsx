import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

function Navbar() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const formRef = useRef(null);

    const handleButtonClick = () => {
        setIsFormOpen(!isFormOpen);
    };

    const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
            setIsFormOpen(false);
        }
    };

    useEffect(() => {
        if (isFormOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isFormOpen]);

    return (
        <>
            <header>
                <div className="container">
                    <div className='navitems'>
                        <a className="navbar-brand" href="#">
                            <img src={`${process.env.PUBLIC_URL}/images/smith-alloy-logo.png`} alt="smithalloy logo" />
                        </a>
                        <div className="navlink">
                            <button className="getInTouch" onClick={handleButtonClick}>Get In Touch</button>
                        </div>
                    </div>
                </div>
            </header>
            {isFormOpen && (
                <div className="modal-overlay">
                    <div className="modal1" ref={formRef}>
                        <div className="modal-content1">
                            <span className="close-button" onClick={handleButtonClick}>×</span>
                            <h4 style={{ textAlign: 'center' }}>Contact Us</h4>
                            <iframe aria-label='Contact Us' frameBorder="0"
                                style={{ height: '630px', width: '100%', border: 'none' }}
                                src='https://forms.zohopublic.in/smiththerm/form/ContactUs1/formperma/MD8O2zKIK-b0ucMBUlQAK4YsbSDpXdbv4W-dY-vAO5U'></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
