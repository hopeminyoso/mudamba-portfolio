import React, { useState } from 'react';
import './home.css';
import backgroundImage from './background.jpg'; // Import the image

const Home = () => {
  const [isLeft, setIsLeft] = useState(false); // State to track cursor position

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const screenWidth = window.innerWidth;
    const threshold = 0.5; // Adjust this value as needed

    setIsLeft(x < screenWidth * threshold); // Update state based on cursor position
  };

  return (
    <div className={`home ${isLeft ? 'left' : 'right'}`} onMouseMove={handleMouseMove}>
      <div className="creative">Creative</div>
      <div className="image-container">
        {/* Use the imported image directly */}
        <img src={backgroundImage} alt="Main Image" />
      </div>
      <div className="admin">Admin</div>
    </div>
  );
};

export default Home;
