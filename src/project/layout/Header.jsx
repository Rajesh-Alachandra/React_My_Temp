import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./css/Header.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [showUserPopup, setShowUserPopup] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleMegaMenu = () => {
        setShowMegaMenu(!showMegaMenu);
    };

    const toggleUserPopup = (state) => {
        setShowUserPopup(state);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    let navbarClasses = ["my-navbar"];
    if (scrolled) {
        navbarClasses.push("my-scrolled");
    }

    const getLinkClass = (path) => {
        return location.pathname === path ? "my-active" : "";
    };

    return (
        <div className="my-navbar-container">
            <header className={navbarClasses.join(" ")}>
                <img
                    src={assets.logo}
                    alt="Logo"
                    className="my-logo"
                    onClick={() => navigate("/")}
                />

                <div className="my-navbar-right">
                    <ul className={`my-navbar-menu ${isMenuOpen ? "show" : ""}`}>
                        <li className={getLinkClass("/pages")} onClick={toggleMegaMenu}>
                            PAGES
                            <span className="my-plus-icon">
                                {showMegaMenu ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </span>
                            {showMegaMenu && (
                                <div className="my-mega-menu">
                                    <div className="my-column">
                                        <h4>Pages</h4>
                                        <Link to="/home">Home</Link>
                                        <Link to="/about">About Us</Link>
                                        <Link to="/services">Services</Link>
                                        <Link to="/contact">Contact Us</Link>
                                    </div>
                                    <div className="my-column">
                                        <h4>Components</h4>
                                        <Link to="/header">Header</Link>
                                        <Link to="/footer">Footer</Link>
                                        <Link to="/slider">Slider</Link>
                                        <Link to="/gallery">Gallery</Link>
                                    </div>
                                </div>
                            )}
                        </li>
                        <Link to="/products">
                            <li className={getLinkClass("/products")}>PRODUCTS</li>
                        </Link>
                        <Link to="/projects">
                            <li className={getLinkClass("/projects")}>PROJECTS</li>
                        </Link>
                        <Link to="/contact">
                            <li className={getLinkClass("/contact")}>CONTACT</li>
                        </Link>
                    </ul>
                    <div className="my-icons">
                        <Link to="/cart" className="my-cart-icon">
                            <IoCartOutline className="my-icon" />
                        </Link>
                        |
                        <div
                            className="my-user-icon"
                            onMouseEnter={() => toggleUserPopup(true)}
                            onMouseLeave={() => toggleUserPopup(false)}
                        >
                            <FiUser className="my-icon" />
                            {showUserPopup && (
                                <div className="my-user-popup">
                                    <Link to="/login">Sign In</Link>
                                    <Link to="/register">Register</Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <IoIosMenu className="my-menu-icon" onClick={toggleMenu} />
                </div>
            </header>
        </div>
    );
};

export default Navbar;
