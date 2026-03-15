import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container reveal" ref={sectionRef}>
        <div className="about-image">
          {/* Remplace par ta vraie photo */}
          <img src="/profile.jpg" alt="Axel AHO" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>

          <p>
            Je suis Axel, étudiant ingénieur en <strong>Intelligence Artificielle et Data</strong> à HESTIM Maroc. 
            Passionné par les technologies de pointe, je développe des solutions orientées backend 
            combinant data science et infrastructure cloud.
          </p>

          <p>
            Mon parcours à <strong>EPITECH Bénin</strong> et mon expérience en entreprise (Orabank, Biris Technologie) 
            m'ont permis de maîtriser le cycle complet de développement : de l'analyse des besoins 
            au déploiement en production.
          </p>

          <p>
            Je suis particulièrement intéressé par le <strong>MLops</strong>, l'automatisation CI/CD 
            et l'architecture cloud scalable. Toujours curieux, je cherche continuellement à 
            apprendre et à relever de nouveaux défis techniques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;