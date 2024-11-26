import React from 'react';
import './Hero.css';
import logo from '../Assets/Images/Big-Img.png';  

const Hero = () => (
  <section className="hero">
    <h2 className="san-serif">Welcome to</h2>
    <h1 className="san-serif">EduSage.</h1>
    <img src={logo} alt="EduSage Bg" className="logo" />
    <p>Unlock your full potential with our innovative educational platform.</p>
    <div className="hero-buttons">
      <button className="btn-primary">Sign Up.</button>
      <button className="btn-secondary">Learn More</button>
    </div>
  </section>
);

export default Hero;
