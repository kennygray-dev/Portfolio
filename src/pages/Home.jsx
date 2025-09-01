import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";
import { parseISO } from "date-fns";
import "./Home.css";
import Companies from "../components/Companies";
import FeaturedProjects from "../components/FeaturedProjects";
import Testimonials from "../components/Testimonials";
import FourDs from "../components/FourDs";

// Move variants outside component to prevent recreation
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
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (splashComplete) {
            setAnimationsEnabled(true);
        }
    }, [splashComplete]);

    // Simplified data fetching - removed unnecessary state
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    // Memoized callbacks to prevent recreations
    const scrollToCompanies = useCallback(() => {
        companiesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    const handleCalendarHover = useCallback(() => {
        if (!isLoading) {
            setShowCalendar(true);
        }
    }, [isLoading]);

    const handleCalendarLeave = useCallback(() => {
        setShowCalendar(false);
    }, []);

    // Memoized calendar transform function
    const transformCalendarData = useMemo(() => {
        return (contributions) => {
            const marchStart = new Date(new Date().getFullYear(), 2, 1);
            return contributions.filter((day) => parseISO(day.date) >= marchStart);
        };
    }, []);

    // Memoized animation props to prevent object recreation
    const nameAnimationProps = useMemo(() => ({
        initial: { opacity: 0, y: 100 },
        animate: animationsEnabled ? { opacity: 1, y: 0 } : {},
        transition: { duration: 1, ease: "easeOut" }
    }), [animationsEnabled]);

    const titleAnimationProps = useMemo(() => ({
        initial: { opacity: 0, y: 40 },
        animate: animationsEnabled ? { opacity: 1, y: 0 } : {},
        transition: { duration: 1, delay: 0.2 }
    }), [animationsEnabled]);

    const nameTextAnimationProps = useMemo(() => ({
        initial: { opacity: 0, y: 40 },
        animate: animationsEnabled ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.6, delay: 0.8 }
    }), [animationsEnabled]);

    const designerAnimationProps = useMemo(() => ({
        initial: { opacity: 0, y: 40 },
        animate: animationsEnabled ? { opacity: 1, y: 0 } : {},
        transition: { duration: 1, delay: 0.7 }
    }), [animationsEnabled]);

    const imageAnimationProps = useMemo(() => ({
        initial: { opacity: 0, x: 50 },
        animate: animationsEnabled ? { opacity: 1, x: 0 } : {},
        transition: { duration: 0.8, delay: 0.2 }
    }), [animationsEnabled]);

    const hologramAnimationProps = useMemo(() => ({
        animate: animationsEnabled ? { y: [0, -10, 0] } : {},
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        }
    }), [animationsEnabled]);

    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-info">
                    <motion.div
                        className="name-section"
                        {...nameAnimationProps}
                    >
                        <motion.h2
                            className="name"
                            {...nameTextAnimationProps}
                        >
                            Ken Agbapuonwu.
                        </motion.h2>
                        <motion.h2
                            className="title"
                            {...titleAnimationProps}
                        >
                            Creative Engineer
                        </motion.h2>
                        <motion.h1
                            className="title"
                            {...designerAnimationProps}
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
                        {...imageAnimationProps}
                    >
                        <motion.div
                            className="hologram-wrapper"
                            {...hologramAnimationProps}
                        >
                            <img
                                src="https://i.imgur.com/cxvks6I.png"
                                alt="Kennedy Agbapuonwu"
                                className="profile-image"
                            />
                        </motion.div>

                        <div className="social-arrow-container">
                            <motion.div
                                className="social-links"
                                variants={containerVariants}
                                initial="hidden"
                                animate={animationsEnabled ? "visible" : "hidden"}
                            >
                                <motion.div
                                    className="github-preview-wrapper"
                                    onMouseEnter={handleCalendarHover}
                                    onMouseLeave={handleCalendarLeave}
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
                                            {isLoading && (
                                                <div className="loading-indicator"></div>
                                            )}
                                        </div>
                                    </motion.a>

                                    {showCalendar && (
                                        <motion.div
                                            className="calendar-preview glassmorphic"
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
                                            transition={{ 
                                                duration: 0.3,
                                                ease: "easeOut"
                                            }}
                                        >
                                            <div className="calendar-header">
                                                <h4>GitHub Activity</h4>
                                                <span className="github-username">@kennygray-dev</span>
                                            </div>
                                            <GitHubCalendar
                                                username="kennygray-dev"
                                                blockSize={10}
                                                blockMargin={4}
                                                color="#5ea085"
                                                fontSize={14}
                                                fullYear={false}
                                                weeks={17}
                                                transformData={transformCalendarData}
                                            />
                                            <div className="calendar-footer">
                                                <div className="activity-stats">
                                                    <div className="stat">
                                                        <span className="stat-number">120+</span>
                                                        <span className="stat-label">Contributions</span>
                                                    </div>
                                                    <div className="stat">
                                                        <span className="stat-number">15</span>
                                                        <span className="stat-label">Repositories</span>
                                                    </div>
                                                </div>
                                            </div>
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

                            <div className="down-arrow-container">
                                <div
                                    className="down-arrow"
                                    onClick={scrollToCompanies}
                                >
                                    <FaArrowDown className="arrow-icon" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Tools Marquee Section */}
            <motion.div 
                className="tools-marquee-section"
                initial={{ opacity: 0 }}
                animate={animationsEnabled ? { opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                <div className="tools-marquee-container">
                    <div className="tools-marquee">
                        {[
                            {
                                name: "React",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                            },
                            {
                                name: "TypeScript",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                            },
                            {
                                name: "JavaScript",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                            },
                            {
                                name: "Node.js",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                            },
                            {
                                name: "Jira",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
                            },
                            {
                                name: "Figma",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                            },
                            {
                                name: "Next.js",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                            },
                            {
                                name: "MongoDB",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                            },
                            {
                                name: "Photoshop",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
                            },
                            {
                                name: "Github",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                            },
                        ].map((tool, index) => (
                            <div key={index} className="marquee-tool-item" title={tool.name}>
                                <img src={tool.src} alt={tool.name} />
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {[
                            {
                                name: "React",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                            },
                            {
                                name: "TypeScript",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                            },
                            {
                                name: "JavaScript",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                            },
                            {
                                name: "Node.js",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                            },
                            {
                                name: "Jira",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
                            },
                            {
                                name: "Figma",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                            },
                            {
                                name: "Next.js",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                            },
                            {
                                name: "MongoDB",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                            },
                            {
                                name: "Photoshop",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
                            },
                            {
                                name: "Github",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                            },
                        ].map((tool, index) => (
                            <div key={`duplicate-${index}`} className="marquee-tool-item" title={tool.name}>
                                <img src={tool.src} alt={tool.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

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