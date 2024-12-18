import React from "react";
import "./App.css"; // Import your CSS file
import profileImage from "./images/profile_img.jpg"; // Import the image

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-item">Home</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#passions" className="nav-item">Passions</a>
          <a href="#resume" className="nav-item">Resume</a>
          <a href="#contact" className="nav-item">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content">
        <div className="intro">
          <h1>
            <span className="name-highlight">Ritika</span>
          </h1>
          <h1 className="last-name">Brahmadesam</h1>
          <p>
            I am majoring in Math and Computer Science and minoring in Economics at Rensselaer
            Polytechnic Institute. I am passionate about AI, Machine Learning and
            mathematical modeling.
          </p>
        </div>
        {/* Image */}
        <div className="circle-image">
          <img src={profileImage} alt="Ritika's Profile" />
        </div>
      </div>
    </div>
  );
}

export default App;
