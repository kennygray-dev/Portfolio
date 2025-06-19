import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navRef = useRef(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            closeMenu();
        }
    };
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY.current) {
                setShowNavbar(true); // scrolling up
            } else {
                setShowNavbar(false); // scrolling down
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <nav
            className={`navbar ${showNavbar ? "show-nav" : "hide-nav"}`}
            ref={navRef}
        >
            <div className="nav-header">
                {/* Desktop Logo */}
                <Link to="/" className="logo desktop-logo" onClick={closeMenu}>
                    <img src="/logo.png" alt="Logo" className="logo-image" />
                </Link>

                {/* Mobile Social Icons */}
                <div className="mobile-social-icons">
                    <div className="social-icon">
                        <a
                            href="https://github.com/kennygray-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-circle"
                        >
                            <FaGithub className="icon" />
                            <div className="shine"></div>
                        </a>
                    </div>
                    <div className="social-icon">
                        <a
                            href="https://www.linkedin.com/in/ken-agbapuonwu-3134bab5/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-circle"
                        >
                            <FaLinkedin className="icon" />
                            <div className="shine"></div>
                        </a>
                    </div>
                    <div className="social-icon">
                        <a
                            href="mailto:kenagbapuonwu@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-circle"
                        >
                            <FaEnvelope className="icon" />
                            <div className="shine"></div>
                        </a>
                    </div>
                </div>

                {/* Hamburger Menu */}
                <button
                    className="hamburger-menu"
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <div className={`line ${isOpen ? "open" : ""}`}></div>
                    <div className={`line ${isOpen ? "open" : ""}`}></div>
                    <div className={`line ${isOpen ? "open" : ""}`}></div>
                </button>
            </div>

            {/* Drawer Menu */}
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                {/* Mobile Logo */}
                <li className="mobile-logo">
                    <Link to="/" onClick={closeMenu}>
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="logo-image"
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className={location.pathname === "/" ? "active" : ""}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        onClick={closeMenu}
                        className={
                            location.pathname === "/about" ? "active" : ""
                        }
                    >
                        About Me
                    </Link>
                </li>
                <li>
                    <Link
                        to="/projects"
                        onClick={closeMenu}
                        className={
                            location.pathname === "/projects" ? "active" : ""
                        }
                    >
                        Portfolio
                    </Link>
                </li>
                <li>
                    <a
                        href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Call+with+Ken+Agbapuonwu&details=Looking+forward+to+speaking+with+you!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-link"
                    >
                        Book a Call <FiExternalLink />
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:kenagbapuonwu@gmail.com?subject=Hello%20Ken&body=Hi%20Ken,"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-link"
                    >
                        Message <FiExternalLink />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
