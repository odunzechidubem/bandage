import { FaCartShopping, FaHeart, FaUser } from 'react-icons/fa6';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaSearch, FaTwitter,  } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-top">
                <div className="navbar-contact">
                    <span><FaPhoneAlt /> (225) 555-0118</span>
                    <span>michelle.rivera@example.com</span>
                </div>
                <div className="navbar-promo">
                    <span>Follow Us and get a chance to win 80% off</span>
                </div>
                <div className="social-media">
                    <span>Follow Us :</span>
                    <a href="/"><FaInstagram /></a>
                    <a href="/"><FaFacebook /></a>
                    <a href="/"><FaTwitter /></a>
                </div>
            </div>
            <div className="navbar-main">
                <div className="navbar-logo">Bandage</div>
                <nav className="navbar-links">
                    <a href="/">Home</a>
                    <a href="/">Shop</a>
                    <a href="/">About</a>
                    <a href="/">Blog</a>
                    <a href="/">Contact</a>
                    <a href="/">Pages</a>
                </nav>
                <div className="navbar-icons">
                    <a href="/"> <FaUser /> Login / Register</a>
                    <a href="/"><FaSearch /></a>
                    <a href="/"><FaCartShopping /></a>
                    <a href="/"><FaHeart /></a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
