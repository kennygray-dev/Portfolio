import { useState, useEffect } from "react";
import { FaTh, FaListUl } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
    const [viewType, setViewType] = useState("grid");

    useEffect(() => {
        // Force list view for mobile devices
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setViewType("list");
            }
        };

        handleResize(); // Check on mount
        window.addEventListener("resize", handleResize); // Update on resize

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const projectData = [
        {
            links: "#",
            image: "https://i.imgur.com/3TNFuz5.png",
            title: "Awa Source",
            details:
                "AWA Source is a modern job-seeking platform that connects top-tier talents with clients across various industries. It streamlines the hiring process through curated matches, skill-based filtering, and a user-friendly interface tailored for both freelancers and businesses. ",
        },
        {
            links: "#",
            image: "https://i.imgur.com/2o8BlgL.png",
            title: "Taaleema",
            details:
                "Taaleema is an AI-powered educational platform that supports African migrants by providing culturally-informed learning resources and guidance on Gulf country practices. From IELTS preparation to cultural integration, Taaleema equips users with the knowledge and skills needed for a smooth migration journey.",
        },
        {
            links: "#",
            image: "https://i.imgur.com/T4i7bZU.png",
            title: "Dakestel",
            details:
                "Dakestel is a company specializing in the retail and personalization of home and car care resources. I developed a full-stack analytics dashboard for Dakestel that tracks user behavior and sales performance over time, providing insights into product trends, customer engagement, and revenue growth.",
        },
        {
            links: "https://grayshub.vercel.app/",
            image: "https://i.imgur.com/a67bQWT.jpeg",
            title: "Wallpaper/Inspo App",
            details:
                "A wallpaper and inspiration app with system-based light/dark mode.",
        },
        /*{
            links: "https://eventticketken.vercel.app/",
            image: "https://i.imgur.com/T4i7bZU.png",
            title: "Dakestel",
            details:
                "Dakestel is a company specializing in the retail and personalization of home and car care resources. I developed a full-stack analytics dashboard for Dakestel that tracks user behavior and sales performance over time, providing insights into product trends, customer engagement, and revenue growth.",
        },
        {
            links: "https://craft9ja.vercel.app/",
            image: "/Craft.jpg",
            title: "Craft9JA",
            details:
                "An E-commerce, Fully responsive interior/Furniture services Web application.",
        },
        {
            links: "https://kennygraysgymapp.vercel.app/",
            image: "/gym.jpg",
            title: "WorkoutTracking App",
            details:
                "Muscle group selection, curated workouts, set tracking, and downloadable summaries — built for every gym buddy.",
        },
        {
            links: "https://dakestel.vercel.app/",
            image: "/dakestell.png",
            title: "Dakestel Home/Car Care",
            details:
                "An eCommerce site for home and car care products with cart functionality and sleek responsive design.",
        },
        {
            links: "https://ben-payments.vercel.app/",
            image: "/offering.png",
            title: "Online Payment App",
            details:
                "Users can make donations to a church using the Paystack payment gateway.",
        },
       
         {
            links: "https://todo-progress.vercel.app/",
            image: "/mkuo.png",
            title: "To-do list app w/ Progress Bar",
            details:
                "React-based app with a progress bar that tracks task completion.",
        },
        {
            links: "https://tic-tac-toe-two-nine.vercel.app/",
            image: "/tic.png",
            title: "Tic Tac Toe",
            details: "A classic Tic-Tac-Toe game built with React.",
        },*/
    ];

    return (
        <div className="projects-wrapper">
            <h1 className="portfolio-title">Portfolio</h1>

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

            <div
                className={
                    viewType === "grid"
                        ? "projects-container grid-view"
                        : "projects-container list-view"
                }
            >
                {projectData.map((project, index) => (
                    <div key={index} className="project-card">
                        {viewType === "list" ? (
                            <>
                                <div className="text-side">
                                    <h3>{project.title}</h3>
                                    <p>{project.details}</p>
                                    <a
                                        href={project.links}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="view-btn"
                                    >
                                        View Project →
                                    </a>
                                </div>
                                <a
                                    href={project.links}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="image-side"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />
                                </a>
                            </>
                        ) : (
                            <div className="grid-card">
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
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
