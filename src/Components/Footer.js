import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container relative">

                <div className="footerimg">
                    <img src="../Assets/laptopwith.jpg" alt="" className="img-fluid" />
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="subscription-form">
                            <h3 className="d-flex align-items-center">
                                <span className="me-1">
                                    <img src="../Assets/envelope-outline.svg" alt="Envelope" className="img-fluid" />
                                </span>
                                <span>Subscribe to Our Newsletter</span>
                            </h3>

                            <form action="submit" className="row g-3">
                                <div className="col-auto">
                                    <input type="text" className="form-control" placeholder="Enter your name" />
                                </div>
                                <div className="col-auto">
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary">
                                        <span className="fa fa-paper-plane"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row g-5 mb-5">
                    <div className="col-lg-4">
                        <div className="mb-4 footer-logo-wrap">
                            <a href="/" className="footer-logo">The Shopping Mart<span>.</span></a>
                        </div>
                        <p className="mb-4" style={{ color: 'black' }}>
                            Discover our wide range of computer and digital gadgets designed to meet your needs. From cutting-edge laptops to stylish accessories, we have it all.
                        </p>

                        <ul className="list-unstyled custom-social">
                            <li><a href="https://www.facebook.com"><span className="fa fa-brands fa-facebook-f"></span></a></li>
                            <li><a href="https://twitter.com"><span className="fa fa-brands fa-twitter"></span></a></li>
                            <li><a href="https://www.instagram.com"><span className="fa fa-brands fa-instagram"></span></a></li>
                            <li><a href="https://www.linkedin.com"><span className="fa fa-brands fa-linkedin"></span></a></li>
                        </ul>
                    </div>

                    <div className="col-lg-8">
                        <div className="row links-wrap">
                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li><a href="/products">Products</a></li>
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="/contact">Contact Us</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li><a href="/support">Support</a></li>
                                    <li><a href="/knowledge-base">Knowledge Base</a></li>
                                    <li><a href="/live-chat">Live Chat</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li><a href="/team">Our Team</a></li>
                                    <li><a href="/leadership"> Consumer Helpline </a></li>
                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="border-top copyright">
                    <div className="row pt-4">
                        <div className="col-lg-6">
                            <p>
                                &copy; The Shopping Mart. All Rights Reserved. &mdash;
                                Designed with care by <a href="https://www.linkedin.com/in/jay-tadhani-a27b832b8/">Jay Tadhani</a>
                            </p>
                        </div>

                        <div className="col-lg-6 text-center text-lg-end">
                            <ul className="list-unstyled d-inline-flex ms-auto">
                                <li className="me-4"><a href="/terms">Terms & Conditions</a></li>
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
