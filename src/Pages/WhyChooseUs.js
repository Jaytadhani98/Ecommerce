import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className="why-choose-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <h2 className="section-title">Why Choose Us</h2>
                        <p>Discover the ultimate destination for top-quality computers and digital gadgets. Our commitment to excellence ensures you receive the best in technology and service.</p>

                        <div className="row my-5">
                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src="../Assets/truck.svg" alt="" className="img-fluid" />
                                    </div>
                                    <h3>Reliable Delivery</h3>
                                    <p>Experience timely and dependable delivery of the latest tech products right to your doorstep.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src="../Assets/bag.svg" alt="" className="img-fluid" />
                                    </div>
                                    <h3>Seamless Shopping</h3>
                                    <p>Enjoy a smooth and intuitive shopping experience with our user-friendly website and secure checkout process.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src="../Assets/support.svg" alt="" className="img-fluid" />
                                    </div>
                                    <h3>Expert Support</h3>
                                    <p>Get expert assistance and support 24/7 for all your tech needs, ensuring you make the most out of your products.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src="../Assets/return.svg" alt="" className="img-fluid" />
                                    </div>
                                    <h3>Easy Returns</h3>
                                    <p>Enjoy hassle-free returns and exchanges, making your shopping experience worry-free.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="img-wrap">
                            <img src="../Assets/desktop2.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
