import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { IconContext } from "react-icons";
import { FcStart } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import Mapbox from './MapBox/Mapbox';



const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="subscribe">
                    <h4>Tourist<span className="brandpart">Territory</span></h4>
                    <p>Subscibe to get latest newsletter</p>
                    <input type="text" placeholder="Email address" />
                    <button>Subscribe Now</button>
                    <div className="social-icon">
                        <ul>
                            <li><Link to="/"><IconContext.Provider value={{size:40}}>
                            <FcStart />
                            </IconContext.Provider></Link></li>
                            <li><Link to=""><IconContext.Provider value={{size:40 ,color: "blue"}}>
                                <FaFacebookSquare />
                            </IconContext.Provider></Link></li>
                            <li><Link to=""><IconContext.Provider value={{size:40 ,color: "RoyalBlue"}}>
                                <AiFillLinkedin />
                            </IconContext.Provider></Link></li>
                            <li><Link to=""><IconContext.Provider value={{size:40 ,color: "DodgerBlue"}}>
                                <FaTwitter />
                            </IconContext.Provider></Link></li>
                        </ul>
                        
                    </div>
                </div>
                <div className="footer-about">
                    <h4>About Us</h4>
                    <ul>
                        <li><Link to="/">Terms</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/mapbox">Our Location</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h2>Contact Us</h2>
                    <p>178 West 27th Street, Suite 527</p>
                    <p>New York NY 10012,</p>
                    <p>USA</p>
                    <p>+1 000 10 87 00</p>
                    <p>tourist.territory@gmail.com</p>
                </div>
            </div>
            <p> &copy; Copyright {(new Date()).getFullYear()} || All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;