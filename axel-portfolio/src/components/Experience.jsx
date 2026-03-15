import React from "react";

const experiences = [
  {
    id: 1,
    role: "Développeur Logiciel & Support Technique",
    company: "Orabank Bénin",
    type: "Stage",
    period: "Nov 2024 - Mars 2025",
    location: "Cotonou, Bénin",
    description: [
      "Scripts PHP pour extraction automatisée de données bancaires",
      "Intégration SQL et tests sur plateforme reporting",
      "Configuration réseau (IP/MAC) et infrastructure",
      "Support technique niveau 1 & 2 (sur site/à distance)",
      "Applications bancaires : XRT, Genero, Voyager"
    ],
    tags: ["PHP", "SQL", "Réseau", "Support", "Bancaire"]
  },
  {
    id: 2,
    role: "Développeur Logiciel",
    company: "Biris Technologie",
    type: "Alternance",
    period: "2023 - 2024",
    location: "Bénin",
    description: [
      "Système d'authentification complet (Laravel, sécurité)",
      "API REST avec gestion MySQL et tests endpoints",
      "Upload et gestion d'images via API",
      "CI/CD, tests, déploiement et support production"
    ],
    tags: ["Laravel", "PHP", "MySQL", "API REST", "Auth"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="experience-content">
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <span className="company">{exp.company}</span>
                <span className="badge">{exp.type}</span>
              </div>
              
              <div className="meta">
                <span>📅 {exp.period}</span>
                <span>📍 {exp.location}</span>
              </div>
              
              <ul>
                {exp.description.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              
              <div className="tags">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;