import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";


function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        © {currentYear} Designed and Developed by Ken Agbapuonwu.
      </div>

      <div className="footer-right">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/ken-agbapuonwu-3134bab5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/kennygray-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:kenagbapuonwu@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
