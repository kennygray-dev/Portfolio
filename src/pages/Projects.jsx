import { useState, useEffect } from "react";
import { FaTh, FaListUl } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
    const [viewType, setViewType] = useState("grid");
    const [isMobile, setIsMobile] = useState(false);

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

    const projectData = [
        {
            links: "#",
            image: "https://i.imgur.com/3TNFuz5.png",
            title: "Awa Source",
            details:
                "AWA Source is a modern job-seeking platform that connects top-tier talents with clients across various industries. It streamlines the hiring process through curated matches, skill-based filtering, and a user-friendly interface tailored for both freelancers and businesses.",
        },
        {
            links: "#",
            image: "https://i.imgur.com/2o8BlgL.png",
            title: "Taaleema",
            details:
                "AI-powered educational platform supporting African migrants with culturally-informed learning resources.",
            tags: ["AI", "Education", "React"],
        },
        {
            links: "#",
            image: "https://i.imgur.com/T4i7bZU.png",
            title: "Dakestel",
            details:
                "Full-stack analytics dashboard for tracking user behavior and sales performance.",
            tags: ["Dashboard", "Analytics", "Fullstack"],
        },
        {
            links: "https://grayshub.vercel.app/",
            image: "https://i.imgur.com/a67bQWT.jpeg",
            title: "Wallpaper App",
            details:
                "A wallpaper and inspiration app with system-based light/dark mode.",
            tags: ["React", "UI/UX", "Responsive"],
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
                        <div key={index} className="list-card">
                            <div className="list-image-container">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="list-image"
                                />
                            </div>
                            <div className="list-content">
                                <h3>{project.title}</h3>
                                <p>{project.details}</p>
                                <a
                                    href={project.links}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="view-button"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Projects;
