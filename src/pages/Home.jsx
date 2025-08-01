import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";
import { parseISO, isAfter } from "date-fns";
import "./Home.css";
import Companies from "../components/Companies";
import FeaturedProjects from "../components/FeaturedProjects";
import Testimonials from "../components/Testimonials";
import FourDs from "../components/FourDs";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const iconVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.8 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 200,
        },
    },
};

function Home({ splashComplete }) {
    const companiesRef = useRef(null);
    const [animationsEnabled, setAnimationsEnabled] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);

    useEffect(() => {
        if (splashComplete) {
            setAnimationsEnabled(true);
        }
    }, [splashComplete]);

    const scrollToCompanies = () => {
        companiesRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-info">
                    <motion.div
                        className="name-section"
                        initial={{ opacity: 0, y: 100 }}
                        animate={animationsEnabled ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <motion.h2
                            className="name"
                            initial={{ opacity: 0, y: 40 }}
                            animate={
                                animationsEnabled ? { opacity: 1, y: 0 } : {}
                            }
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            Ken Agbapuonwu.
                        </motion.h2>
                        <motion.h2
                            className="title"
                            initial={{ opacity: 0, y: 40 }}
                            animate={
                                animationsEnabled ? { opacity: 1, y: 0 } : {}
                            }
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Creative Engineer
                        </motion.h2>
                        <motion.h1
                            className="title"
                            initial={{ opacity: 0, y: 40 }}
                            animate={
                                animationsEnabled ? { opacity: 1, y: 0 } : {}
                            }
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            & Designer.
                        </motion.h1>
                        <p className="description">
                            A front-end heavy fullstack Software engineer, I
                            support designers and agencies with creative
                            development.
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
                        animate={animationsEnabled ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            className="hologram-wrapper"
                            animate={
                                animationsEnabled ? { y: [0, -10, 0] } : {}
                            }
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{
                                filter: "drop-shadow(0 0 15px rgba(0, 255, 255, 0.4)) brightness(1.1)",
                            }}
                        >
                            <img
                                src="https://i.imgur.com/cxvks6I.png"
                                alt="Kennedy Agbapuonwu"
                                className="profile-image"
                            />
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            className="social-links"
                            variants={containerVariants}
                            initial="hidden"
                            animate={animationsEnabled ? "visible" : "hidden"}
                        >
                            <motion.div
                                className="github-preview-wrapper"
                                onMouseEnter={() => setShowCalendar(true)}
                                onMouseLeave={() => setShowCalendar(false)}
                            >
                                <motion.a
                                    href="https://github.com/kennygray-dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    variants={iconVariants}
                                >
                                    <div className="icon-circle">
                                        <FaGithub className="icon" />
                                        <div className="shine"></div>
                                    </div>
                                </motion.a>

                                {showCalendar && (
                                    <motion.div
                                        className="calendar-preview"
                                        initial={{
                                            opacity: 0,
                                            scale: 0.95,
                                            y: -10,
                                        }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.95,
                                            y: -10,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <GitHubCalendar
                                            username="kennygray-dev"
                                            blockSize={10}
                                            blockMargin={4}
                                            color="#ff5b04"
                                            fontSize={14}
                                            fullYear={false}
                                            weeks={17}
                                            transformData={(contributions) => {
                                                const marchStart = new Date(
                                                    new Date().getFullYear(),
                                                    2,
                                                    1
                                                ); // March 1
                                                return contributions.filter(
                                                    (day) =>
                                                        parseISO(day.date) >=
                                                        marchStart
                                                );
                                            }}
                                        />
                                    </motion.div>
                                )}
                            </motion.div>

                            <motion.a
                                href="https://www.linkedin.com/in/ken-agbapuonwu-3134bab5/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                variants={iconVariants}
                            >
                                <div className="icon-circle">
                                    <FaLinkedin className="icon" />
                                    <div className="shine"></div>
                                </div>
                            </motion.a>

                            <motion.a
                                href="mailto:kenagbapuonwu@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                variants={iconVariants}
                            >
                                <div className="icon-circle">
                                    <FaEnvelope className="icon" />
                                    <div className="shine"></div>
                                </div>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>

                {animationsEnabled && (
                    <motion.div
                        className="down-arrow-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.div
                            className="down-arrow"
                            onClick={scrollToCompanies}
                            animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{ scale: 1.2 }}
                        >
                            <FaArrowDown className="arrow-icon" />
                        </motion.div>
                    </motion.div>
                )}
            </div>

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
