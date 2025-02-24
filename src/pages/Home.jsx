import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import About from './About';
import Projects from './Projects';

function Home() {
  const handleDownload = () => {
    const url = '/Cvee.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Cvee.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-container">
      <div className="home-info">
        <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h2 className="me">KEN</h2>
          <h1 className='name'>AGBAPUONWU</h1>
          <h2 className="subtitle">Frontend Developer</h2>
          <div className='home-links'>
            <button onClick={handleDownload} className='cv-button'>Download CV</button>
            <div className='proffessional'>
              <a href="https://github.com/kennygray-dev" target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ken-agbapuonwu-3134bab5/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <a href="/#about" className='pointer-links'><button className='pointers-button'><h3 className='pointers'>ABOUT ME</h3></button></a>
          <a href="/#projects" className='pointer-links'><button className='pointers-button'><h3 className='pointers'>MY WORKS</h3></button></a>
          <About />
          <Projects />
        </motion.div>
      </div>
      
    </div>
  );
}

export default Home;
