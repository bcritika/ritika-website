import React from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component
import "./App.css";
import profileImage from "./images/profile_img.jpg";

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <div className="content">
        <div className="intro">
          <h1>
            <span className="name-highlight">Ritika</span>
          </h1>
          <h1 className="last-name">Brahmadesam</h1>
          <p>
           Math and Computer Science at RPI
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
