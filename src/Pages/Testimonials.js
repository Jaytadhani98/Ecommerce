import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <span className="fa fa-chevron-right"></span>,
        prevArrow: <span className="fa fa-chevron-left"></span>,
    };

    return (
        <div className="testimonial-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 mx-auto text-center">
                        <h2 className="section-title">What Our Clients Are Saying</h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="testimonial-slider-wrap text-center">
                            <Slider {...settings}>
                                <div className="item">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8 mx-auto">
                                            <div className="testimonial-block text-center">
                                                <blockquote className="mb-5">
                                                    <p>&ldquo;The quality of the electronics is top-notch. The fast shipping and excellent customer service made the whole experience seamless. I’ll definitely be returning for more!&rdquo;</p>
                                                </blockquote>
                                                <div className="author-info">
                                                    <h3 className="font-weight-bold">Ajay Patel</h3>
                                                    <p>Regular Customer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8 mx-auto">
                                            <div className="testimonial-block text-center">
                                                <blockquote className="mb-5">
                                                    <p>&ldquo;The latest laptop I bought is incredible. It’s powerful and stylish, and the purchasing process was straightforward. This store really knows how to treat its customers!&rdquo;</p>
                                                </blockquote>
                                                <div className="author-info">
                                                    <h3 className="font-weight-bold">Sanjay Patel</h3>
                                                    <p>Tech Enthusiast</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8 mx-auto">
                                            <div className="testimonial-block text-center">
                                                <blockquote className="mb-5">
                                                    <p>&ldquo;I’m thrilled with my new tablet. It’s exactly what I needed, and the service from start to finish was impeccable. I’ll definitely recommend this shop to my friends and family!&rdquo;</p>
                                                </blockquote>
                                                <div className="author-info">
                                                    <h3 className="font-weight-bold">Jay Patel</h3>
                                                    <p>Happy Buyer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
