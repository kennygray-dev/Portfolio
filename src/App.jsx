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
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {!splashComplete && (
          <div className="splash-container">
            <SplashScreen onComplete={() => setSplashComplete(true)} />
          </div>
        )}

        <div className="main-content">
          <Navbar />
          <Routes>
            <Route 
              path="/" 
              element={<Home splashComplete={splashComplete} />} 
            />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;