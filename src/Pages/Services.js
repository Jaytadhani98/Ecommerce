import React from 'react';
import './All.css';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="we-help-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <div className="imgs-grid">
                            <div className="grid grid-1"><img src="../Assets/mobile.jpg" alt="Mobile" /></div>
                            <div className="grid grid-2"><img src="../Assets/laptop.jpg" alt="Laptop" /></div>
                            <div className="grid grid-3"><img src="../Assets/apple.jpg" alt="Apple Product" /></div>
                        </div>
                    </div>
                    <div className="col-lg-5 ps-lg-5">
                        <h2 className="section-title mb-4"> Our Premium Tech Products</h2>
                        <p>Explore our selection of high-performance computers, cutting-edge gadgets, and essential accessories. We offer top-quality products designed to enhance your digital experience and meet your technology needs.</p>

                        <ul className="list-unstyled custom-list my-4">
                            <li>Latest laptops and desktops for all your computing needs</li>
                            <li>Innovative gadgets to stay ahead in technology</li>
                            <li>High-quality accessories for an enhanced experience</li>
                            <li>Expert support to help you choose the right products</li>
                        </ul>
                        <p><Link to='/login' className="btn btn-secondary">Explore More</Link></p>
                    </div>
                </div>
            </div>

            <div className="popular-product">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="product-item-sm d-flex">
                                <div className="thumbnail">
                                    <img src="../Assets/keyboard2.jpg" alt="High-Performance Keyboard" className="img-fluid" />
                                </div>
                                <div className="pt-3">
                                    <h3>High-Performance Keyboard</h3>
                                    <p>Enhance your typing experience with our high-performance keyboard, designed for precision and comfort.</p>
                                    <p><a href="/">Read More</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="product-item-sm d-flex">
                                <div className="thumbnail">
                                    <img src="../Assets/laptop2.jpg" alt="Ultra-Thin Laptop" className="img-fluid" />
                                </div>
                                <div className="pt-3">
                                    <h3>Ultra-Thin Laptop</h3>
                                    <p>Experience powerful performance and portability with our ultra-thin laptop, perfect for professionals and students alike.</p>
                                    <p><a href="/">Read More</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="product-item-sm d-flex">
                                <div className="thumbnail">
                                    <img src="../Assets/laptopfold.jpg" alt="Versatile Foldable Laptop" className="img-fluid" />
                                </div>
                                <div className="pt-3">
                                    <h3>Versatile Foldable Laptop</h3>
                                    <p>Our foldable laptop combines flexibility with advanced features, offering a unique and versatile computing experience.</p>
                                    <p><a href="/">Read More</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
