import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiMapPin, FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaUserTie } from "react-icons/fa";
import "./About.css";

function About() {
    const [showModal, setShowModal] = useState(false);

    const handleModalToggle = () => setShowModal(!showModal);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    const toolVariants = {
        hover: {
            scale: 1.1,
            filter: "none",
            opacity: 1,
            transition: { type: "spring", stiffness: 300 },
        },
    };

    const startDate = new Date("2023-01-01");
    const now = new Date();
    const diffYears =
        now.getFullYear() -
        startDate.getFullYear() +
        (now.getMonth() >= startDate.getMonth() ? 0 : -1);

    return (
        <motion.div
            id="about"
            className="about-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h2 className="meet-heading">
                Meet Kennedy Agbapuonwu
            </motion.h2>

            <motion.div
                className="about-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="about-box full my-story-row"
                    variants={itemVariants}
                >
                    <div className="story-title">
                        <h3>My Story</h3>
                    </div>

                    <div className="story-divider"></div>

                    <div className="story-content">
                        <p>
                            With a background in Electrical and Information
                            Engineering, I evolved into a self-taught Frontend
                            Heavy Fullstack Software Engineer passionate about
                            creating clean, user-centric experiences.
                            <br />
                            <p>
                                His implementations are usually classified as
                                pixel-perfect & eye-candy due to his experience
                                in his Artsy side through photography,he factors
                                intuitive human-centered experiences with a well
                                thought-out business logic.
                            </p>
                            <button
                                className="read-more-btn"
                                onClick={handleModalToggle}
                            >
                                Read more about me{" "}
                                <FiArrowRight className="arrow-icon" />
                            </button>
                        </p>
                    </div>
                </motion.div>

                <motion.div className="about-box left" variants={itemVariants}>
                    <div className="profile-highlight">
                        <img
                            src="https://i.imgur.com/7J5vEvM.jpeg"
                            alt="Kennedy Agbapuonwu"
                            className="about-profile-image"
                        />
                        <div className="profile-details">
                            <p>
                                <FaUserTie /> Software Engineer
                            </p>
                            <p>
                                <FiMapPin /> Nigeria
                            </p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/ken-agbapuonwu-3134bab5/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://github.com/kennygray-dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="mailto:kenagbapuonwu@gmail.com"
                                    aria-label="Email"
                                >
                                    <FiMail />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="about-box right" variants={itemVariants}>
                    <h3>Favorite Tools</h3>
                    <div className="tools-wrapper">
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
                        ].map((tool, idx) => (
                            <motion.span
                                key={idx}
                                className="tool-item"
                                variants={toolVariants}
                                whileHover="hover"
                                title={tool.name}
                            >
                                <img src={tool.src} alt={tool.name} />
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                <motion.div className="about-box left" variants={itemVariants}>
                    <p className="experience-count">
                        <span>{diffYears}+</span>
                    </p>
                    <p>Years of Experience</p>
                </motion.div>

                <motion.div className="about-box right" variants={itemVariants}>
                    <h3>Something Cool</h3>
                    <p>
                        I write code like I compose a photo: balanced, detailed,
                        and with a story behind every interaction.
                        <br />
                        <br /> Engineering taught me precision; photography
                        taught me feel.
                    </p>
                </motion.div>

                <motion.div className="about-box full" variants={itemVariants}>
                    <h3>Read My Articles</h3>
                    <div className="article-carousel">
                        {[
                            {
                                title: "Building Accessible Interfaces with React",
                                image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
                                link: "https://yourblog.com/article-1",
                            },
                            {
                                title: "Framer Motion for Smooth UI Transitions",
                                image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
                                link: "https://yourblog.com/article-2",
                            },
                            {
                                title: "Designing with Developer Empathy",
                                image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
                                link: "https://yourblog.com/article-3",
                            },
                        ].map((article, index) => (
                            <motion.div
                                key={index}
                                className="article-card"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="article-image"
                                />
                                <div className="article-content">
                                    <h4>{article.title}</h4>
                                    <a
                                        href={article.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FiArrowRight className="article-arrow" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay" onClick={handleModalToggle}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-btn"
                            onClick={handleModalToggle}
                        >
                            ×
                        </button>
                        <h3>More About Me</h3>
                        <p>
                            I’m a frontend-focused fullstack developer with a
                            background in Electrical and Information
                            Engineering. My journey into tech has been anything
                            but one-dimensional—shaped by a blend of freelance
                            projects, impactful startups, and a creative lens
                            from photography.
                            <br />
                            <br />
                            I’ve worked with{" "}
                            <a
                                href="https://taaleema.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Taaleema
                            </a>
                            , an EdTech platform helping bridge immigration gaps
                            between Africa and the Gulf (GCC) countries. I also
                            contributed to{" "}
                            <a
                                href="https://awasource.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Awasource
                            </a>
                            , a job connection platform that empowers talent and
                            clients alike.
                            <br />
                            <br />
                            My freelance work includes projects like{" "}
                            <a
                                href="https://craft9ja.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Craft9ja
                            </a>
                            , where I developed a product showcase site for
                            handcrafted furniture and art, and{" "}
                            <a
                                href="https://dakestel-dashboard.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Dakestel Dashboard
                            </a>
                            , a logistics and records system for a cleaning
                            package retail company.
                            <br />
                            <br />
                            Beyond development, I’m a photographer — a skill
                            that helps me bring depth, perspective, and beauty
                            into every interface I create.
                        </p>
                    </div>
                </div>
            )}
        </motion.div>
    );
}

export default About;
