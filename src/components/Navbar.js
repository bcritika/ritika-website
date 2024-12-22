import React from "react";
import "./Navbar.css"; // Optional: Create a separate CSS file for Navbar styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-item">Home</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#passions" className="nav-item">Passions</a>
        <a href="#resume" className="nav-item">Resume</a>
        <a href="#contact" className="nav-item">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
