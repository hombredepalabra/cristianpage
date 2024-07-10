import { useState } from 'react';
import { MountainIcon, MenuIcon } from './Icons';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        <a href="#" className="logo">
          <MountainIcon />
          <span>Ariel Castro</span>
        </a>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="mobile-menu">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon />
          </button>
          {isMenuOpen && (
            <div className="mobile-nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#certifications">Certifications</a>
              <a href="#contact">Contact</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;