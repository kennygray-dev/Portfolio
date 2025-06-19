import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiMapPin, FiMail, FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaUserTie } from "react-icons/fa";
import "./About.css";

function About() {
    const [showSidePanel, setShowSidePanel] = useState(false);
    const [activeTab, setActiveTab] = useState("me");

    const handlePanelToggle = () => setShowSidePanel(!showSidePanel);
    const handleTabChange = (tab) => setActiveTab(tab);

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

    const variantsFromLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1 } },
    };

    const variantsFromRight = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1 } },
    };

    const variantsFromTop = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    };

    const variantsFromBottom = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    };

    const toolVariants = {
        hover: {
            scale: 1.1,
            filter: "none",
            opacity: 1,
            transition: { type: "spring", stiffness: 400 },
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
                    variants={variantsFromTop}
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
                        </p>
                        <p>
                            His implementations are usually classified as
                            pixel-perfect & eye-candy due to his experience in
                            his Artsy side through photography. He factors
                            intuitive human-centered experiences with a well
                            thought-out business logic.
                        </p>
                        <button
                            className="read-more-btn"
                            onClick={handlePanelToggle}
                        >
                            Read more about me{" "}
                            <FiArrowRight className="article-arrow" />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    className="about-box left"
                    variants={variantsFromLeft}
                >
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

                <motion.div
                    className="about-box right"
                    variants={variantsFromRight}
                >
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
                            {
                                name: "Github",
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
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

                <motion.div
                    className="about-box left"
                    variants={variantsFromLeft}
                >
                    <p className="experience-count">
                        <span>{diffYears}+</span>
                    </p>
                    <p>Years of Experience</p>
                </motion.div>

                <motion.div
                    className="about-box right"
                    variants={variantsFromRight}
                >
                    <h3>Something Cool</h3>
                    <p>
                        I write code like I compose a photo: balanced, detailed,
                        and with a story behind every interaction.
                        <br />
                        <br /> Engineering taught me precision; photography
                        taught me feel.
                    </p>
                </motion.div>

                <motion.div
                    className="about-box full"
                    variants={variantsFromBottom}
                >
                    <h3>Read My Articles</h3>
                    <div className="article-carousel">
                        {[
                            {
                                title: "How I Build: My Journey and Workflow as a Frontend Developer",
                                image: "https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?w=1000&auto=format&fit=crop&q=60",
                                link: "https://kennygray.hashnode.dev/how-i-build-my-journey-and-workflow-as-a-frontend-developer",
                            },
                            {
                                title: "The Beginning Wasn't Code. It Was a Connection",
                                image: "https://images.unsplash.com/photo-1732067606788-6b0661b7cdef?w=1000&auto=format&fit=crop&q=60",
                                link: "https://kennygray.hashnode.dev/the-beginning-wasnt-code-it-was-a-connection",
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

            {/* Side Panel */}
            <AnimatePresence>
                {showSidePanel && (
                    <motion.div
                        className="side-panel-overlay"
                        onClick={handlePanelToggle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="side-panel-content"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                        >
                            <button
                                className="close-panel-btn"
                                onClick={handlePanelToggle}
                            >
                                <FiX />
                            </button>

                            <div className="panel-navigation">
                                <motion.div
                                    className={`nav-item ${
                                        activeTab === "me" ? "active" : ""
                                    }`}
                                    onClick={() => handleTabChange("me")}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span>Me</span>
                                </motion.div>
                                <motion.div
                                    className={`nav-item ${
                                        activeTab === "hobbies" ? "active" : ""
                                    }`}
                                    onClick={() => handleTabChange("hobbies")}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span>Hobbies</span>
                                </motion.div>
                            </div>

                            <div className="panel-content">
                                {activeTab === "me" && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3>About Me</h3>
                                        <p>
                                            I'm a frontend-focused fullstack
                                            developer with a background in
                                            Electrical and Information
                                            Engineering. My journey into
                                            software development began when I
                                            discovered my passion for creating
                                            intuitive user interfaces that solve
                                            real problems.
                                        </p>
                                        <p>
                                            With over {diffYears} years of
                                            experience, I've worked on various
                                            projects ranging from small business
                                            websites to complex web
                                            applications. My engineering
                                            background gives me a unique
                                            perspective on problem-solving and
                                            system design.
                                        </p>
                                        <p>
                                            When approaching a project, I focus
                                            on creating solutions that are not
                                            only technically sound but also
                                            deliver exceptional user
                                            experiences. I believe the best
                                            products come from combining
                                            technical excellence with thoughtful
                                            design.
                                        </p>
                                    </motion.div>
                                )}

                                {activeTab === "hobbies" && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3>My Hobbies</h3>
                                        <p>
                                            When I'm not coding, you can find
                                            me:
                                        </p>
                                        <ul>
                                            <li> Doing photography </li>
                                            <li>
                                                {" "}
                                                Listening to and discovering new
                                                music
                                            </li>
                                            <li>
                                                Writing about tech and creative
                                                processes
                                            </li>
                                            <li>At the Gym</li>
                                            <li>
                                                Reading books on design,
                                                psychology, and technology
                                            </li>
                                        </ul>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default About;
