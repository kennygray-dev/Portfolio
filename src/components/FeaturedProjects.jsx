import { motion } from "framer-motion";
import { useState } from "react";
import {
    FiClock,
    FiChevronDown,
    FiChevronUp,
    FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./FeaturedProjects.css";

const projects = [
    {
        title: "Taaleema",
        description:
            "Taaleema is an AI-powered educational platform that supports African migrants by providing culturally-informed learning resources and guidance on Gulf country practices. From IELTS preparation to cultural integration, Taaleema equips users with the knowledge and skills needed for a smooth migration journey.",
        readTime: "1 min read",
        image: "https://i.imgur.com/2o8BlgL.png",
        link: "#",
    },
    {
        title: "Awa Source",
        description:
            "AWA Source is a modern job-seeking platform that connects top-tier talents with clients across various industries. It streamlines the hiring process through curated matches, skill-based filtering, and a user-friendly interface tailored for both freelancers and businesses",
        readTime: "1 min read",
        image: "https://i.imgur.com/3TNFuz5.png",
        link: "#",
    },
    {
        title: "Dakestel",
        description:
            "Dakestel is a company specializing in the retail and personalization of home and car care resources. I developed a full-stack analytics dashboard for Dakestel that tracks user behavior and sales performance over time, providing insights into product trends, customer engagement, and revenue growth.",
        readTime: "1 min read",
        image: "https://i.imgur.com/T4i7bZU.png",
        link: "#",
    },
];

function FeaturedProjects() {
    const [lockedIndex, setLockedIndex] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(null);

    const toggleLock = (index) => {
        setLockedIndex(lockedIndex === index ? null : index);
    };

    return (
        <div className="featured-projects-container">
            <h2 className="featured-projects-title">FEATURED PROJECTS</h2>

            <div className="projects-stack">
                {projects.map((project, index) => {
                    const isOpen =
                        lockedIndex === index ||
                        (lockedIndex === null && hoverIndex === index);

                    return (
                        <motion.div
                            key={index}
                            className={`project-card ${isOpen ? "active" : ""}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: index * 0.1 },
                            }}
                        >
                            <div
                                className="project-header"
                                onClick={() => toggleLock(index)}
                            >
                                <h3 className="project-title">
                                    {project.title}
                                </h3>
                                {isOpen ? (
                                    <FiChevronUp className="expand-icon" />
                                ) : (
                                    <FiChevronDown className="expand-icon" />
                                )}
                            </div>

                            {isOpen && (
                                <motion.div
                                    className="project-content"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="project-info">
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
                                            View Project{" "}
                                            <FiArrowRight className="arrow-icon" />
                                        </motion.a>
                                    </div>
                                    <div className="project-image-container">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="project-image"
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* View More Projects Button */}
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
