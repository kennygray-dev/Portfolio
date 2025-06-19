import { motion } from "framer-motion";
import "./Companies.css";

const companies = [
    { name: "Company 1", logo: "https://i.imgur.com/KH6WYl4.png" },
    { name: "Company 2", logo: "https://i.imgur.com/1xxQz08.png" },
];

function Companies() {
    return (
        <motion.div
            className="companies-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="companies-title">Some companies I've helped shape</h1>

            <div className="companies-grid">
                {companies.map((company, index) => (
                    <motion.div
                        key={index}
                        className="company-card"
                    >
                        <img
                            src={company.logo}
                            alt={company.name}
                            className="company-logo"
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Companies;
