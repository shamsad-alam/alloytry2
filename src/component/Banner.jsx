import React from 'react';
import './Banner.css';

function Hero() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="http://localhost:3000/images/banner-1.jpg" className="d-block w-100" alt="Banner 1" />
                        <div className="carousel-caption d-md-block">
                            <h5>Smith Alloy Wire</h5>
                            <p className='heroPara'>Smith Alloy is used for electric heating elements in home appliances and industrial furnaces.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/banner-2.jpg" className="d-block w-100" alt="Banner 2" />
                        <div className="carousel-caption d-md-block">
                            <h5>Smith Alloy Strip</h5>
                            <p className='heroPara'>Smith Alloy is used in electric heating element material in domestic appliances.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/banner-1.jpg" className="d-block w-100" alt="Banner 3" />
                        <div className="carousel-caption d-md-block">
                            <h5>Smith Alloy 255A</h5>
                            <p className='heroPara'>This is a high-temperature FeCrAl alloy for element temperatures up to 1300°C.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Hero;