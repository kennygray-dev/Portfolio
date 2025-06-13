import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
    const [showSplash, setShowSplash] = useState(true);

    return (
        <div className="App">
            <BrowserRouter>
                {showSplash ? (
                    <SplashScreen onComplete={() => setShowSplash(false)} />
                ) : (
                    <>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                        <Footer />
                    </>
                )}
            </BrowserRouter>
        </div>
    );
}

export default App;
