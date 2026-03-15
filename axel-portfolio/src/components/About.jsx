import React from "react";

const About = () => {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="about-image">
          <img src="/profile.png" alt="Axel" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>

          <p>
            I'm Axel, a Computer Science student passionate about Artificial 
            Intelligence, Machine Learning and Data Science.
          </p>

          <p>
            I enjoy building intelligent systems, analyzing datasets and 
            developing scalable backend solutions using modern technologies.
          </p>

          <p>
            My goal is to use AI and data to solve real-world problems and 
            create impactful technological solutions.
          </p>

        </div>

      </div>

    </section>
  );
};

export default About;