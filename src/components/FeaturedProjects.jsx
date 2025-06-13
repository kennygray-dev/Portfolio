import { motion } from "framer-motion";
import { useState } from "react";
import { FiClock, FiChevronDown, FiChevronUp, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./FeaturedProjects.css";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store with payment integration, product management, and user authentication systems built with React and Node.js.",
        readTime: "1 min read",
        image: "https://i.imgur.com/e3q5JYp.jpg",
        link: "#"
    },
    {
        title: "Portfolio Website Builder",
        description: "Drag-and-drop interface for creating professional portfolios with customizable templates and real-time previews.",
        readTime: "1 min read",
        image: "https://i.imgur.com/p47VOyK.png",
        link: "#"
    },
    {
        title: "Health Tracking App",
        description: "Mobile application for monitoring fitness metrics, nutrition intake, and sleep patterns with data visualization.",
        readTime: "1 min read",
        image: "https://i.imgur.com/J5qYc3d.jpg",
        link: "#"
    }
];

function FeaturedProjects() {
    const [lockedIndex, setLockedIndex] = useState(null);
    const [hoverIndex, setHoverIndex] = useState(null);

    const toggleLock = (index) => {
        setLockedIndex(lockedIndex === index ? null : index);
    };

    return (
        <div className="featured-projects-container">
            <h2 className="featured-projects-title">FEATURED PROJECTS</h2>
            
            <div className="projects-stack">
                {projects.map((project, index) => {
                    const isOpen = lockedIndex === index || (lockedIndex === null && hoverIndex === index);
                    
                    return (
                        <motion.div 
                            key={index}
                            className={`project-card ${isOpen ? 'active' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ 
                                opacity: 1, 
                                y: 0,
                                transition: { delay: index * 0.1 }
                            }}
                            onHoverStart={() => setHoverIndex(index)}
                            onHoverEnd={() => setHoverIndex(null)}
                        >
                            <div 
                                className="project-header"
                                onClick={() => toggleLock(index)}
                            >
                                <h3 className="project-title">{project.title}</h3>
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
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="project-info">
                                        <p className="project-description">{project.description}</p>
                                        <div className="read-time">
                                            <FiClock className="clock-icon" />
                                            <span>{project.readTime}</span>
                                        </div>
                                        <motion.a
                                            href={project.link}
                                            className="project-link"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            View Project <FiArrowRight className="arrow-icon" />
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
                        View More Projects <FiArrowRight className="arrow-icon" />
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
}

export default FeaturedProjects;