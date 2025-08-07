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
            links: "#",
            image: "https://i.imgur.com/3TNFuz5.png",
            title: "Awa Source",
            details:
                "AWA Source is a modern job-seeking platform that connects top-tier talents with clients across various industries. It streamlines the hiring process through curated matches, skill-based filtering, and a user-friendly interface tailored for both freelancers and businesses.",
            shortDescription: "Modern job-seeking platform connecting talents with clients across industries.",
            tags: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
        },
        {
            links: "https://ben-resources.vercel.app/",
            image: "/ben-demo-thumbnail.jpg",
            title: "BEN Church Resource Center",
            details:
                "A digital church platform offering sermon recordings, Bible access, prayer requests, birthdays, and meeting resources. Built with Firebase and integrated with a live Bible API for scripture access.",
            shortDescription: "Digital platform for accessing sermons, Bible, prayer requests, and church resources.",
            tags: ["Next.js", "Firebase", "Church", "Fullstack"],
        },
        {
            links: "#",
            image: "https://i.imgur.com/2o8BlgL.png",
            title: "Taaleema",
            details:
                "AI-powered educational platform supporting African migrants with culturally-informed learning resources.",
            shortDescription: "AI-powered learning platform for African migrants with cultural adaptation.",
            tags: ["AI", "Education", "React", "Localization"],
        },
        {
            links: "#",
            image: "https://i.imgur.com/T4i7bZU.png",
            title: "Dakestel",
            details:
                "Full-stack analytics dashboard for tracking user behavior and sales performance.",
            shortDescription: "Full-stack analytics dashboard for tracking user behavior and sales.",
            tags: ["Dashboard", "Analytics", "Fullstack", "MongoDB"],
        },
        {
            links: "https://grayshub.vercel.app/",
            image: "https://i.imgur.com/a67bQWT.jpeg",
            title: "Wallpaper App",
            details:
                "A wallpaper and inspiration app with system-based light/dark mode.",
            shortDescription: "Wallpaper and inspiration app with system-based theming.",
            tags: ["React", "UI/UX", "Responsive", "Theme"],
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
                                <p>{project.details}</p>
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
                                    <p className="project-description">
                                        {isMobile ? project.shortDescription : project.details}
                                    </p>
                    

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