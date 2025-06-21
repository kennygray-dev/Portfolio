import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
    const [showSplash, setShowSplash] = useState(true);

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Footer />

                {showSplash && (
                    <div className="splash-overlay">
                        <SplashScreen onComplete={() => setShowSplash(false)} />
                    </div>
                )}
            </BrowserRouter>
        </div>
    );
}

export default App;
