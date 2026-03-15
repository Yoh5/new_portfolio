// Hero.jsx corrigé
import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero">  {/* Ajoute id="home" */}
      <h1>Hi, I'm <span className="highlight">Axel AHO</span></h1>
      <h2>AI & Data Engineer | Cloud & DevOps Enthusiast</h2>  {/* Titre plus complet */}

      <p>
        Ingénieur IA & Data en formation. Je combine <strong>Machine Learning</strong>, 
        <strong> Cloud Computing</strong> et <strong>DevOps</strong> pour construire 
        des solutions intelligentes et scalables.
      </p>

      <div className="buttons">
        <button className="btn-primary">View Projects</button>
        <button className="btn-secondary">Download CV</button>
      </div>
    </section>
  );
};

export default Hero;