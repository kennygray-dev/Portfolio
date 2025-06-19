import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FiClock, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./FeaturedProjects.css";

const projects = [
    {
        title: "Awa Source",
        description:
            "AWA Source is a modern job-seeking platform that connects top-tier talents with clients across various industries.",
        readTime: "1 min read",
        image: "https://i.imgur.com/3TNFuz5.png",
        link: "#",
    },
    {
        title: "Taaleema",
        description:
            "Taaleema is an AI-powered educational platform that supports African migrants by providing culturally-informed learning resources and guidance on Gulf country practices.",
        readTime: "1 min read",
        image: "https://i.imgur.com/2o8BlgL.png",
        link: "#",
    },
    {
        title: "Dakestel",
        description:
            "Dakestel specializes in the retail and personalization of home and car care resources.",
        readTime: "1 min read",
        image: "https://i.imgur.com/T4i7bZU.png",
        link: "#",
    },
];

function FeaturedProjects() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [hoveringIndex, setHoveringIndex] = useState(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    const handleDoubleClick = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    const handleMouseMove = (e, cardRef) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setCursorPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div className="featured-projects-container">
            <h2 className="featured-projects-title">FEATURED PROJECTS</h2>

            <div className="projects-stack">
                {projects.map((project, index) => {
                    const isActive = activeIndex === index;
                    const cardRef = useRef(null);

                    return (
                        <div
                            key={index}
                            className="project-card"
                            onMouseEnter={() => setHoveringIndex(index)}
                            onMouseLeave={() => setHoveringIndex(null)}
                        >
                            <motion.h3
                                className="project-title"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {project.title}
                            </motion.h3>

                            <div
                                ref={cardRef}
                                className={`project-image-container ${
                                    hoveringIndex === index && !isActive
                                        ? "custom-cursor"
                                        : ""
                                }`}
                                onDoubleClick={() => handleDoubleClick(index)}
                                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />

                                {hoveringIndex === index && !isActive && (
                                    <div
                                        className="drag-hint-circle"
                                        style={{
                                            left: `${cursorPos.x}px`,
                                            top: `${cursorPos.y}px`,
                                        }}
                                    >
                                        Double Click for More
                                    </div>
                                )}
                            </div>

                            {isActive && (
                                <motion.div
                                    className="project-info-drawer"
                                    initial={{ opacity: 0, x: "100%" }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: "100%" }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                >
                                    <div className="project-info-content">
                                        <div className="read-time">
                                            <FiClock className="clock-icon" />
                                            <span>{project.readTime}</span>
                                        </div>
                                        <p className="project-description">
                                            {project.description}
                                        </p>
                                        <motion.a
                                            href={project.link}
                                            className="project-link"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                        {" "}
                                            <FiArrowRight className="arrow-icon" />
                                        </motion.a>
                                    </div>
                                    <button
                                        className="close-drawer"
                                        onClick={() => setActiveIndex(null)}
                                    >
                                        &times;
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    );
                })}
            </div>

            <motion.div
                className="view-more-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <Link to="/projects" className="view-more-link">
                    <motion.button
                        className="view-more-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View More Projects{" "}
                        <FiArrowRight className="arrow-icon" />
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
}

export default FeaturedProjects;
