import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./SplashScreen.css";

function SplashScreen({ onComplete }) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [show, setShow] = useState(true);
  const [lettersVisible, setLettersVisible] = useState([]);
  const [canExit, setCanExit] = useState(false);
  const name = "KENNEDY AGBAPUONWU";
  const letters = name.split("");

  useEffect(() => {
    // Fast letter reveal (150ms per character)
    const letterInterval = setInterval(() => {
      setLettersVisible((prev) => {
        if (prev.length < letters.length) {
          return [...prev, true];
        }
        clearInterval(letterInterval);
        return prev;
      });
    }, 20);

    // Slower progress counter (total 5s)
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 100) {
          return prev + 25;
        }
        clearInterval(progressInterval);
        setCanExit(true);
        return prev;
      });
    }, 1000);

    return () => {
      clearInterval(letterInterval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (canExit && loadingProgress === 100 && lettersVisible.length === letters.length) {
      const exitTimer = setTimeout(() => {
        setShow(false);
        setTimeout(onComplete, 800);
      }, 500);
      
      return () => clearTimeout(exitTimer);
    }
  }, [canExit, loadingProgress, lettersVisible.length]);

  const renderProgressDigits = () => {
    const progressStr = loadingProgress.toString();
    return (
      <>
        {progressStr.split('').map((digit, i) => (
          <motion.span
            key={`digit-${i}-${progressStr}`}
            initial={{ opacity: 0, y: i % 2 === 0 ? 10 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: i % 2 === 0 ? -10 : 10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="progress-digit"
          >
            {digit}
          </motion.span>
        ))}
        <span className="percent-symbol">%</span>
      </>
    );
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="splash-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="center-container">
            <div className="name-container">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -15, filter: "blur(2px)" }}
                  animate={{
                    opacity: lettersVisible[index] ? 1 : 0,
                    x: lettersVisible[index] ? 0 : -15,
                    filter: lettersVisible[index] ? "blur(0px)" : "blur(2px)"
                  }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.16, 0.77, 0.47, 0.97] 
                  }}
                  className="name-letter"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="ball-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div
                className="loader-ball"
                initial={{ scale: 0.8 }}
                animate={{
                  scale: [1, 1.05, 1],
                  y: [0, -15, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  },
                  y: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                style={{
                  boxShadow: `
                    0 0 ${10 + loadingProgress * 0.2}px 
                    rgba(255, 91, 4, ${0.3 + loadingProgress * 0.005}),
                    inset 0 3px 6px rgba(255, 255, 255, 0.1)
                  `,
                  background: `
                    radial-gradient(
                      circle at 30% 30%,
                      rgba(255, 255, 255, 0.7) 0%,
                      rgba(255, 91, 4, 1) 50%,
                      rgba(197, 60, 0, 1) 100%
                    )
                  `
                }}
              />
            </motion.div>
          </div>

          <motion.div
            className="progress-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                className="loader-progress"
                key={`progress-${loadingProgress}`}
              >
                {renderProgressDigits()}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SplashScreen;