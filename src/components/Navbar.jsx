import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navRef = useRef(null);
    const [activeLinkReady, setActiveLinkReady] = useState(false);
    const [lettersVisible, setLettersVisible] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setLettersVisible(0);
            const interval = setInterval(() => {
                setLettersVisible(prev => {
                    if (prev >= 20) {
                        clearInterval(interval);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 50);
            setTimeout(() => setActiveLinkReady(true), 300);
        } else {
            setActiveLinkReady(false);
            setLettersVisible(0);
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
        setActiveLinkReady(false);
        setLettersVisible(0);
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            closeMenu();
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < lastScrollY.current) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
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

    const renderAnimatedText = (text) => {
        return text.split('').map((letter, index) => (
            <span 
                key={index} 
                style={{ 
                    opacity: index < lettersVisible ? 1 : 0,
                    transition: `opacity 0.1s ${index * 0.05}s ease-in`
                }}
            >
                {letter}
            </span>
        ));
    };

    return (
        <nav className="navbar" ref={navRef}>
            <div className="nav-header">
                <Link to="/" className="logo desktop-logo" onClick={closeMenu}>
                    <img src="/logo.png" alt="Logo" className="logo-image" />
                </Link>

                <div className="mobile-social-icons">
                    <div className="social-icon">
                        <a href="https://github.com/kennygray-dev" target="_blank" rel="noopener noreferrer" className="icon-circle">
                            <FaGithub className="icon" />
                            <div className="shine"></div>
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/ken-agbapuonwu-3134bab5/" target="_blank" rel="noopener noreferrer" className="icon-circle">
                            <FaLinkedin className="icon" />
                            <div className="shine"></div>
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="mailto:kenagbapuonwu@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-circle">
                            <FaEnvelope className="icon" />
                            <div className="shine"></div>
                        </a>
                    </div>
                </div>

                <button className="hamburger-menu" onClick={toggleMenu} aria-label="Menu">
                    <div className={`line ${isOpen ? "open" : ""}`}></div>
                    <div className={`line ${isOpen ? "open" : ""}`}></div>
                    <div className={`line ${isOpen ? "open" : ""}`}></div>
                </button>
            </div>

            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li className="mobile-logo">
                    <Link to="/" onClick={closeMenu}>
                        <img src="/logo.png" alt="Logo" className="logo-image" />
                    </Link>
                </li>
                <li className="main-nav-link">
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className={`${location.pathname === "/" ? "active" : ""} ${activeLinkReady ? "ready" : ""}`}
                    >
                        {isOpen ? renderAnimatedText("Home") : "Home"}
                    </Link>
                </li>
                <li className="main-nav-link">
                    <Link
                        to="/about"
                        onClick={closeMenu}
                        className={`${location.pathname === "/about" ? "active" : ""} ${activeLinkReady ? "ready" : ""}`}
                    >
                        {isOpen ? renderAnimatedText("About Me") : "About Me"}
                    </Link>
                </li>
                <li className="main-nav-link">
                    <Link
                        to="/projects"
                        onClick={closeMenu}
                        className={`${location.pathname === "/projects" ? "active" : ""} ${activeLinkReady ? "ready" : ""}`}
                    >
                        {isOpen ? renderAnimatedText("Portfolio") : "Portfolio"}
                    </Link>
                </li>
                <li className="external-nav-link">
                    <a
                        href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Call+with+Ken+Agbapuonwu&details=Looking+forward+to+speaking+with+you!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-link"
                    >
                        Book a Call <FiExternalLink />
                    </a>
                </li>
                <li className="external-nav-link">
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
