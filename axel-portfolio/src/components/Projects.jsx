import React from "react";

const Projects = () => {

  const projects = [
    {
      title: "AI Failure Prediction System",
      description:
        "Machine learning system that predicts potential failures using historical data.",
      tech: ["Python", "Scikit-learn", "Pandas"],
      github: "#",
      demo: "#"
    },
    {
      title: "Fake News Detection",
      description:
        "Natural Language Processing model that detects fake news articles.",
      tech: ["Python", "NLP", "TensorFlow"],
      github: "#",
      demo: "#"
    },
    {
      title: "Patient Management System",
      description:
        "Web application for managing patients, appointments and medical records.",
      tech: ["Laravel", "MySQL", "PHP"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">

      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.github}>GitHub</a>
              <a href={project.demo}>Live Demo</a>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Projects;