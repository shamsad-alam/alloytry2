import React from 'react';
import './About.css'; // Import the CSS file for styling

function About() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="about-content my-lg-5 my-4">
                        <div className="about-image">
                            <img src="http://localhost:3000/images/about-image.jpg" alt="About Us" className="img-fluid rounded" />
                        </div>
                        <div className="about-text">
                            <h2 className="about-title">About Us</h2>
                            <p>
                                We are experts in industrial electric heating technology and resistance materials, providing products and
                                solutions to a wide range of industries on a global scale. Our extensive investments in R&D and eagerness
                                to collaborate ensure that we remain in the forefront of technological development.
                            </p>
                            <p> 
                                We believe in delivering the best services to our customers with a focus on quality and customer satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
