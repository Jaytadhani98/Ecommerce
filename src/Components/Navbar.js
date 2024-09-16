import React from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import PersonIcon from '@mui/icons-material/Person';
import '../Pages/All.css'

export default function Navbar() {
    return (
        <div>
            <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="navigation bar">
                <div className="container">
                    <RouterLink className="navbar-brand" to="/"><img src='../Assets/logo.png' alt='logo' id='logo'></img>The Shopping Mart</RouterLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbars">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item active">
                                <ScrollLink
                                    className="nav-link"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    Home
                                </ScrollLink>
                            </li>

                            <li className="nav-item">
                                <ScrollLink
                                    className="nav-link"
                                    to="product"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    Shop
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink
                                    className="nav-link"
                                    to="why-choose-us"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    About Us
                                </ScrollLink>
                            </li>

                            <li className="nav-item">
                                <ScrollLink
                                    className="nav-link"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    Services
                                </ScrollLink>
                            </li>

                            <li className="nav-item">
                                <ScrollLink
                                    className="nav-link"
                                    to="contactus"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    Contact Us
                                </ScrollLink>
                            </li>
                        </ul>

                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li className="nav-link" ><Link to='/login'><PersonIcon />Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
