import React from "react";
import "./Hero.css";

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Travel" className="hero__image" />
      <h1 className="hero__title">Earthy means Eco's Friend</h1>
      <p className="hero__para">Welcome to our eco-friendly e-commerce site! We believe that it's important to protect the planet and live sustainably, and that starts with the products we use every day. That's why we've curated a collection of environmentally 
        conscious products that are good for both you and the planet.</p>
    </div>
  );
};

export default Hero;
