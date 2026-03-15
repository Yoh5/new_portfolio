import React from "react";

const certifications = [
  {
    name: "Oracle Database",
    provider: "Coursera",
    year: "2024",
    icon: "🗄️"
  },
  {
    name: "Gestion de Projet",
    provider: "Coursera",
    year: "2024",
    icon: "📊"
  },
  {
    name: "TOEFL",
    provider: "ETS",
    year: "2024",
    score: "70/120",
    icon: "🌍"
  },
  {
    name: "HackerLab CEDEAO",
    provider: "Cybersecurité",
    year: "2022",
    note: "Qualifications nationales",
    icon: "🔒"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="cert-icon">{cert.icon}</div>
            <h3>{cert.name}</h3>
            <p className="provider">{cert.provider}</p>
            <p className="year">{cert.year}</p>
            {cert.score && <p className="score">Score: {cert.score}</p>}
            {cert.note && <p className="note">{cert.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;