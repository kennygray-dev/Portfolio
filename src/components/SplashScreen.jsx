import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./SplashScreen.css"; 

function SplashScreen({ onComplete }) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 500); // Wait for fade out to complete
        }, 2000); // Show splash for 2 seconds

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="splash-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="splash-name"
                    >
                        KENNEDY AGBAPUONWU
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default SplashScreen;
