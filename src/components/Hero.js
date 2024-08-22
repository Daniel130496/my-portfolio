import React from "react";
import "./css/Hero.css";
import MatrixEffect from "./MatrixRain";

const Hero = () => {
  return (
    <div id='home' className="hero">
      <header className="hero-header">
        <h1>WELCOME TO MY PORTFOLIO</h1>
        <h2>HI, I'M DANIEL</h2>
        <p>EXPLORE MY PROJECTS AND GET KNOW ABOUT ME</p>
      </header>

      <section className="hero-intro">
        <div className="matrix-rain">
          <MatrixEffect />
        </div>
        <p>
          I'm specialize in creating dynamic and beautiful web pages. I have
          experience in HTML, CSS, JavaScript and React. Check out my projects
          to see what I've been working on!
        </p>
      </section>
    </div>
  );
};

export default Hero;
