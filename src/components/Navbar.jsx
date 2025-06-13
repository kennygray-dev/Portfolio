import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className='navbar' ref={navRef}>
      <div className='nav-header'>
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Logo" className="logo-image" />
        </Link>
        
        {location.pathname === '/contact' ? (
          <Link to="/" className="home-icon-link" onClick={closeMenu}>
            <FontAwesomeIcon icon={faHome} className="home-icon" />
          </Link>
        ) : (
          <button className='hamburger-menu' onClick={toggleMenu} aria-label="Menu">
            <div className={`line ${isOpen ? 'open' : ''}`}></div>
            <div className={`line ${isOpen ? 'open' : ''}`}></div>
            <div className={`line ${isOpen ? 'open' : ''}`}></div>
          </button>
        )}
      </div>

      {location.pathname === '/contact' ? null : (
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu} className={location.pathname === '/about' ? 'active' : ''}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu} className={location.pathname === '/projects' ? 'active' : ''}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu} className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;