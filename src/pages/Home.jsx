import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Companies from "../components/Companies";
import FeaturedProjects from "../components/FeaturedProjects";
import Testimonials from "../components/Testimonials";
import FourDs from "../components/FourDs";

function Home() {
    const companiesRef = useRef(null);

    const scrollToCompanies = () => {
        companiesRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className="home-container">
            {/* Main Home Content */}
            <div className="home-content">
                <div className="home-info">
                    <motion.div
                        className="name-section"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="title">CHILL ENGINEER</h2>
                        <h1 className="title">AND DESIGNER</h1>
                        <h2 className="name">KEN AGBAPUONWU</h2>

                        <p className="description">
                            A front-end heavy fullstack Software engineer with
                            over 2 years of experience converting challenges &
                            ideas into intuitive and scalable solutions.
                        </p>

                        <div className="home-links">
                            <Link
                                to="/about"
                                className="pointer-links about-link"
                            >
                                <motion.button
                                    className="pointers-button about-button"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <h3 className="pointers">ABOUT ME</h3>
                                </motion.button>
                            </Link>

                            <Link
                                to="/projects"
                                className="pointer-links works-link"
                            >
                                <motion.button
                                    className="pointers-button works-button"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <h3 className="pointers">MY WORKS</h3>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="image-social-section"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src="https://i.imgur.com/p47VOyK.png"
                            alt="Kennedy Agbapuonwu"
                            className="profile-image"
                        />

                        <div className="social-links">
                            <a
                                href="https://github.com/kennygray-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <div className="icon-circle">
                                    <FaGithub className="icon" />
                                    <div className="shine"></div>
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ken-agbapuonwu-3134bab5/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <div className="icon-circle">
                                    <FaLinkedin className="icon" />
                                    <div className="shine"></div>
                                </div>
                            </a>
                            <a
                                href="mailto:kenagbapuonwu@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <div className="icon-circle">
                                    <FaEnvelope className="icon" />
                                    <div className="shine"></div>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Pulsing Arrow */}
                <motion.div
                    className="down-arrow-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <motion.div
                        className="down-arrow"
                        onClick={scrollToCompanies}
                        animate={{
                            y: [0, 10, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        whileHover={{ scale: 1.2 }}
                    >
                        <FaArrowDown className="arrow-icon" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Companies Section */}
            <div ref={companiesRef} className="companies-wrapper">
                <Companies />
            </div>
            <div className="featured-projects-wrapper">
                <FeaturedProjects />
            </div>
            <div className="testimonials-wrapper">
              <Testimonials />
            </div>
            <div className="four-ds-wrapper">
              <FourDs />
            </div>
        </div>
    );
}

export default Home;
