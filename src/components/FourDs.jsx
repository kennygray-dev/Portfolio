import { motion } from "framer-motion";
import "./FourDs.css";

function FourDs() {
    const lines = [
        "Fueled by Desire,",
        "Forged by Decision,",
        "Sustained by Dedication,",
        "Perfected through Discipline.",
    ];

    return (
        <div className="four-ds-container">
            <div className="four-ds-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="four-ds-quote"
                >
                    {lines.map((line, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="four-ds-line"
                        >
                            {line}
                        </motion.p>
                    ))}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="four-ds-signature"
                    >
                        — Ken Agbapuonwu
                    </motion.p>
                </motion.div>

                <div className="four-ds-grit-overlay"></div>
            </div>
        </div>
    );
}

export default FourDs;
