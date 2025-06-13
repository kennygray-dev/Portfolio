import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Companies.css";

const companies = [
    { name: "Company 1", logo: "/company1-logo.png" },
    { name: "Company 2", logo: "/company2-logo.png" },
    { name: "Company 3", logo: "/company3-logo.png" }
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
            <h1 className="companies-title">Some companies I've worked with</h1>
            
            <div className="companies-grid">
                {companies.map((company, index) => (
                    <motion.div
                        key={index}
                        className="company-card"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
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