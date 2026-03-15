import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Automated Web Deployment",
      description: "Déploiement automatisé d'applications web avec Ansible sur AWS EC2. Configuration CI/CD complète avec Docker et Nginx.",
      tech: ["Ansible", "AWS", "Docker", "Nginx", "CI/CD"],
      github: "https://github.com/Yoh5/DevOps_cloud_proje",
      demo: null, // Pas de demo pour un projet DevOps
      icon: "☁️",
      color: "linear-gradient(135deg, #ff6b6b, #ee5a24)"
    },
    {
      title: "Diabetes Prediction ML",
      description: "Modèle de régression logistique interprétable pour prédire le diabète. AUC-ROC de 0.83 avec analyse clinique des odds ratios.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      github: "https://github.com/Yoh5/ML_projects",
      demo: null,
      icon: "🩺",
      color: "linear-gradient(135deg, #4ecdc4, #44a3aa)"
    },
    {
      title: "KNN Classification",
      description: "Système de classification Machine Learning utilisant l'algorithme KNN. Évaluation complète des performances du modèle.",
      tech: ["Python", "KNN", "Machine Learning", "NumPy"],
      github: "https://github.com/Yoh5/ML_projects",
      demo: null,
      icon: "🤖",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)"
    },
    {
      title: "Bank Reporting System",
      description: "Scripts PHP et intégration SQL pour la plateforme reporting d'Orabank. Extraction et traitement de données bancaires.",
      tech: ["PHP", "SQL", "Oracle", "Reporting"],
      github: null, // Projet privé entreprise
      demo: null,
      icon: "🏦",
      color: "linear-gradient(135deg, #fdcb6e, #e17055)"
    },
    {
      title: "Auth API Laravel",
      description: "Système d'authentification complet avec Laravel. Gestion sécurisée des sessions, upload d'images et API REST.",
      tech: ["Laravel", "PHP", "MySQL", "API REST"],
      github: "https://github.com/Yoh5/", // Mets le vrai lien
      demo: null,
      icon: "🔐",
      color: "linear-gradient(135deg, #fd79a8, #e84393)"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div 
              className="project-image" 
              style={{ background: project.color }}
            >
              {project.icon}
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    GitHub
                  </a>
                )}
                {project.demo ? (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Live Demo
                  </a>
                ) : (
                  <button className="btn btn-secondary" disabled style={{ opacity: 0.5 }}>
                    Private
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;