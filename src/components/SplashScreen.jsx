import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./SplashScreen.css";

function SplashScreen({ onComplete }) {
  const bounceStages = [1, 20, 40, 60, 80, 100];
  const [stage, setStage] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (stage < bounceStages.length - 1) {
        setStage((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShow(false);
          setTimeout(onComplete, 800);
        }, 1000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [stage, onComplete]);

  const bounceHeight = [-30, -60, -90, -120, -150, -180]; // Higher each time

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="splash-screen"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="splash-name"
          >
            KENNEDY AGBAPUONWU
          </motion.h1>

          <div className="center-loader">
            <motion.div
              key={stage}
              className="loader-ball"
              animate={{
                y: [bounceHeight[stage], 0],
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              style={{
                boxShadow: `0 0 ${5 + stage * 6}px rgba(255, 91, 4, ${0.3 + stage * 0.1})`,
              }}
            />
            <div className="loader-progress">{bounceStages[stage]}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SplashScreen;
