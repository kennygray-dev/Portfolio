import { useState, useEffect } from "react";
import { FaTh, FaListUl, FaChevronDown } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
    const [viewType, setViewType] = useState("grid");
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth <= 768) {
                setViewType("list");
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMobileCardClick = (index) => {
        if (isMobile) {
            setActiveIndex((prev) => (prev === index ? null : index));
        }
    };

    const projectData = [
        {
            links: "https://dev.awasource.com/",
            image: "https://i.imgur.com/4UgtYQl.png",
            title: "Awasource",
            details:
                "Engineered and delivered several core modules for AwaSource, a brand authentication and consumer engagement platform. Spearheaded the design and implementation of a full-featured in-app messaging system with real-time updates and state persistence. Architected a scalable, admin-facing support ticketing dashboard with threaded conversations and role-based access control. Integrated a real-time notification engine using WebSockets for instant user feedback on system events. Designed and implemented a responsive subscription billing UI with dynamic tier handling and multilingual support. Collaborated closely with the backend team to consume and secure RESTful and WebSocket endpoints, with emphasis on product verification, user actions, and internationalization.",
            shortDescription:
                "Modern job-seeking platform connecting talents with clients across industries.",
            tags: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
        },
        {
            links: "https://ben-resources.vercel.app/",
            image: "https://i.imgur.com/T5A57F9.png",
            title: "BEN Church Resource Center",
            details:
                "A digital church platform offering sermon recordings, Bible access, prayer requests, birthdays, and meeting resources. Built with Firebase and integrated with a live Bible API for scripture access. ",
            shortDescription:
                "Digital platform for accessing sermons, Bible, prayer requests, and church resources.",
            tags: ["Next.js", "Firebase", "Tailwind CSS", "Rest APIs"],
        },
        {
            links: "https://www.adsvase.com/",
            image: "https://i.imgur.com/Hj7VZQt.png",
            title: "AdsVase",
            details:
                "AdsVase helps people selling products or services advertise, gather engagement, and drive sales in a unique way.",
            shortDescription:
                "AdsVase helps people selling products or services advertise, gather engagement, and drive sales in a unique way.",
            tags: ["Next.js", "TypeScript", "Tailwind", "Rest APIs"],
        },
        {
            links: "https://dakestel-sales-management-application-p4fz.onrender.com/",
            image: "https://i.imgur.com/ppxIssI.png",
            title: "Dakestel",
            details:
                "Full-stack analytics dashboard for tracking user behavior and sales performance.",
            shortDescription:
                "Full-stack analytics dashboard for tracking user behavior and sales.",
            tags: ["React", "Figma", "Typescript", "Cascaded Style Sheets"],
        },
    ];

    return (
        <div className="projects-wrapper">
            <h1 className="portfolio-title">Portfolio</h1>

            {!isMobile && (
                <div className="view-toggle">
                    <button
                        onClick={() => setViewType("grid")}
                        className={viewType === "grid" ? "active" : ""}
                        title="Grid View"
                    >
                        <FaTh />
                        <span>Grid View</span>
                    </button>
                    <button
                        onClick={() => setViewType("list")}
                        className={viewType === "list" ? "active" : ""}
                        title="List View"
                    >
                        <FaListUl />
                        <span>List View</span>
                    </button>
                </div>
            )}

            <div className={`projects-container ${viewType}-view`}>
                {projectData.map((project, index) =>
                    viewType === "grid" ? (
                        <div key={index} className="grid-card">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="grid-image"
                            />
                            <div className="grid-text">
                                <h3>{project.title}</h3>
                                <div className="grid-scrollable-content">
                                    <p>{project.details}</p>
                                </div>
                                <a
                                    href={project.links}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="grid-view-btn"
                                >
                                    VIEW PROJECT →
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div key={index} className="project-wrapper">
                            <div className="list-card" onClick={() => handleMobileCardClick(index)}>
                                <div className="list-image-container">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="list-image"
                                    />
                                    {/* Mobile expand icon */}
                                    {isMobile && (
                                        <div className={`mobile-expand-icon ${activeIndex === index ? 'rotated' : ''}`}>
                                            <FaChevronDown size={16} />
                                        </div>
                                    )}
                                </div>
                                <div className="list-content">
                                    <h3>{project.title}</h3>
                                    <div className="scrollable-text">
                                        <p className="project-description">
                                            {isMobile ? project.shortDescription : project.details}
                                        </p>
                                    </div>
                                    
                                    {!isMobile && (
                                        <a
                                            href={project.links}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="view-button"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            View Project →
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Mobile expanded content */}
                            {isMobile && activeIndex === index && (
                                <div className="mobile-expanded-content">
                                    <div className="mobile-expanded-inner">
                                        <div className="project-stack">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="stack-badge">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <div className="project-link-wrapper">
                                            {project.links && project.links !== "#" ? (
                                                <a
                                                    href={project.links}
                                                    className="project-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Link to Project
                                                </a>
                                            ) : (
                                                <div className="project-link-disabled">
                                                    <span>🔒 Private Project</span>
                                                </div>
                                            )}
                                        </div>
                                        
                                        <p className="full-project-description">
                                            {project.details}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Projects;