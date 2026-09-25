import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* LOGO */}
        <a href="#" className="nav-logo" onClick={closeMenu}>
          STRIKE
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="nav-links">
          <a href="#" className="active">
            Home
          </a>

          <a href="#courses">
            Courses
          </a>

          <a href="#practice">
            Practice
          </a>

          <a href="#codearena">
            CodeArena
          </a>

          <a href="#quiz">
            Quiz
          </a>

          <a href="#system-design">
            System Design
          </a>

          <a href="#contests">
            Contests
          </a>
        </div>

        {/* DESKTOP GET STARTED */}
        <div className="nav-actions">
          <a href="#pricing" className="start-btn">
            Get Started
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`menu-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>

        <a href="#" onClick={closeMenu}>
          Home
        </a>

        <a href="#courses" onClick={closeMenu}>
          Courses
        </a>

        <a href="#practice" onClick={closeMenu}>
          Practice
        </a>

        <a href="#codearena" onClick={closeMenu}>
          CodeArena
        </a>

        <a href="#quiz" onClick={closeMenu}>
          Quiz
        </a>

        <a href="#system-design" onClick={closeMenu}>
          System Design
        </a>

        <a href="#contests" onClick={closeMenu}>
          Contests
        </a>

        <a href="#pricing" className="mobile-start" onClick={closeMenu}>
          Get Started →
        </a>

      </div>
    </header>
  );
}

export default Navbar;