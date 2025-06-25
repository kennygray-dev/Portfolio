// Adjusted FeaturedProjects.js with better alignment, categorized stacks in badges, improved paragraph structure, and scrollable info
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FiClock, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./FeaturedProjects.css";

const projects = [
    {
        title: "Awa Source",
        shortDescription:
            "Brand authentication & anti-counterfeit platform for consumers.",
        fullDescription: {
            role: "Frontend Developer",
            stack: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
            description:
                "Developed multiple mission-critical modules for AwaSource, a brand authentication platform. Led implementation of the in-app messaging feature, support ticketing admin dashboard, real-time notification system, and the subscription billing UI. Collaborated with the backend team to integrate secure endpoints for verification and user feedback capture. Ensured multi-language support to enhance accessibility for diverse user groups.",
            highlights: [
                "Built internal messaging interface and threaded support ticketing system from scratch",
                "Integrated live notification system tied to backend events and updates",
                "Developed secure QR product validation flow with detailed UI feedback",
                "Handled API integrations for multilingual toggles and subscription tier management",
            ],
        },
        readTime: "1 min read",
        image: "https://i.imgur.com/3TNFuz5.png",
        link: "#",
    },
    {
        title: "Taaleema",
        shortDescription:
            "AI-powered learning dashboard for African migrants to Gulf countries.",
        fullDescription: {
            role: "Lead Frontend Developer",
            stack: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
            description:
                "Architected and developed a learning platform tailored for African migrants, focusing on certification prep like IELTS. Engineered a fully responsive dashboard with localization support for various languages and cultures. Conducted extensive research on similar platforms to design intuitive onboarding flows, dynamic assessments, and eligibility-based course rendering. Built reusable components with smooth UX and API-driven content delivery.",
            highlights: [
                "Created user experience tailored to various language and regional needs",
                "Built assessment engine and eligibility tracking logic",
                "Designed mobile-first guided learning modules and progress trackers",
                "Researched and benchmarked IELTS features for accurate implementation",
            ],
        },
        readTime: "1 min read",
        image: "https://i.imgur.com/2o8BlgL.png",
        link: "#",
    },
    {
        title: "Dakestel",
        shortDescription:
            "E-commerce platform for personalized home & car care resources.",
        fullDescription: {
            role: "Full Stack Developer",
            stack: [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JavaScript",
                "Tailwind CSS",
                "Context API",
                "REST APIs",
            ],
            description:
                "Spearheaded the end-to-end development of Dakestel’s e-commerce platform. Built the admin and customer dashboards that power the business’ growth and analytics. Implemented core features including product inventory management, category filtering, dynamic pricing, order tracking, and real-time cart updates. Designed APIs for seamless data flow and ensured that the platform scales with business needs.",
            highlights: [
                "Engineered scalable dashboard supporting business operations and analytics",
                "Implemented quantity-controlled cart system with real-time price recalculations",
                "Integrated REST APIs to manage users, products, and transactions",
                "Crafted responsive admin interface with custom analytics and CRUD support",
            ],
        },
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
                                    <motion.h3
                                        className="project-title"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.2,
                                        }}
                                        viewport={{ once: true, amount: 0.3 }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <div className="project-info-content scrollable">
                                        <div className="read-time">
                                            <FiClock className="clock-icon" />
                                            <span>{project.readTime}</span>
                                        </div>
                                        <p className="project-role">
                                            <strong>Role:</strong>{" "}
                                            {project.fullDescription.role}
                                        </p>
                                        <div className="project-stack">
                                            {project.fullDescription.stack.map(
                                                (tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="stack-badge"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                        <p className="project-description">
                                            {
                                                project.fullDescription
                                                    .description
                                            }
                                        </p>
                                        <ul className="project-highlights">
                                            {project.fullDescription.highlights.map(
                                                (point, i) => (
                                                    <li key={i}>{point}</li>
                                                )
                                            )}
                                        </ul>
                                        <motion.a
                                            href={project.link}
                                            className="project-link"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FiArrowRight className="arrow-icon-featured" />
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
