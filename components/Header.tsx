import { useState } from 'react';
import './header.css';
import logo from '../assets/logo.png'; // ajuste o caminho conforme necessário

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <nav className="nav">
          <ul className={`permalinks ${isOpen ? 'open' : ''}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Experience</a></li>
            <li><a href="#experience">Contact</a></li>
          </ul>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* Onda SVG abaixo do Header */}
      <div className="header__wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#421869" fillOpacity="1" d="M0,288L40,256C80,224,160,160,240,128C320,96,400,96,480,96C560,96,640,96,720,122.7C800,149,880,203,960,197.3C1040,192,1120,128,1200,85.3C1280,43,1360,21,1400,10.7L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" />
        </svg>
      </div>
    </>
  );
};

export default Header;
