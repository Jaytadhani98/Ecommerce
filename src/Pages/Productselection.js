import React from 'react';
import { Link } from 'react-router-dom';

const ProductSection = () => {
    return (
        <div className="product-section">
            <div className="container">
                <div className="row">


                    <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                        <p className="mb-4">"Built with premium materials to ensure top-notch quality and longevity. Each product is designed for both elegance and performance." </p>
                        <p><Link className="btn btn-primary">Explore</Link></p>
                    </div>



                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a className="product-item" href="./login">
                            <img src="../Assets/headphones.png" className="img-fluid product-thumbnail" alt='' />
                            <h3 className="product-title">Head Phones</h3>
                            <strong className="product-price">₹ 500.00</strong>

                            <span className="icon-cross">
                                <img src="../Assets/cross.svg" className="img-fluid" alt='' />
                            </span>
                        </a>
                    </div>



                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a className="product-item" href="./login">
                            <img src="../Assets/amazon.png" className="img-fluid product-thumbnail" alt='' />
                            <h3 className="product-title">Wireless Mouse</h3>
                            <strong className="product-price">₹ 300.00</strong>

                            <span className="icon-cross">
                                <img src="../Assets/cross.svg" className="img-fluid" alt='' />
                            </span>
                        </a>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a className="product-item" href="./login">
                            <img src="../Assets/intel.png" className="img-fluid product-thumbnail" alt='' />
                            <h3 className="product-title">Processor</h3>
                            <strong className="product-price"> ₹ 4300.00</strong>

                            <span className="icon-cross">
                                <img src="../Assets/cross.svg" className="img-fluid" alt='' />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
