import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import './home.css'; // Import the CSS file

const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -500]); // Adjust the range as needed

  return (
    <div className="home">
      {/* Background image with parallax effect */}
      <motion.div
        className="background"
        style={{
          backgroundImage: 'url("../../assets/Mudas.png")', // Adjust the image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: yRange, // Apply the parallax effect
        }}
      />

      {/* Text elements */}
      <motion.div className="creative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        Creative
      </motion.div>
      <motion.div className="admin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        Admin
      </motion.div>
    </div>
  );
};

export default Home;






  








 