import React from 'react';
import Hero from '../Pages/Hero';
import Navbar from '../Components/Navbar';
import ProductSection from '../Pages/Productselection';
import WhyChooseUs from '../Pages/WhyChooseUs';
import Services from '../Pages/Services';
import Testimonials from '../Pages/Testimonials';
import Footer from '../Components/Footer';
import { Element } from 'react-scroll';
import ContactUs from '../Pages/ContactUs';
import '../Pages/All.css'
function Home() {
    return (
        <div className='home'>
            <Navbar />
            <Element name="home" className="element">
                <Hero />
            </Element>
            <Element name="product" className="element">
                <ProductSection />
            </Element>
            <Element name="why-choose-us" className="element">
                <WhyChooseUs />
            </Element>
            <Element name="services" className="element">
                <Services />
            </Element>
            <Element name="contactus" className="element">
                <ContactUs />
            </Element>
            <Element name="testimonials" className="element">
                <Testimonials />
            </Element>
            <Element name="footer" className="element">
                <Footer />
            </Element>
        </div>
    );
}

export default Home;
