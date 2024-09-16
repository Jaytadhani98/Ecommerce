import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1>Digital Gadgets <span className="d-block">& Computer System</span></h1>
                            <p className="mb-4">"Empowering Your Digital World with the latest in cutting-edge technology. Discover top-tier computers, gadgets, and accessories that elevate your digital experience.".</p>
                            <p><Link to='/login' className="btn btn-secondary me-2">Shop Now</Link>
                                <Link to='/login' className="btn btn-white-outline">Explore</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img-wrap">
                            <img src="../Assets/keyboardback.png" className="img-fluid" alt='' style={{ marginTop: 100, transform: 'rotate(5deg)' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
