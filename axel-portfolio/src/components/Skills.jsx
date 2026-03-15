import React from "react";
import "../index.css";

const Skills = () => {

  const skillsData = [
    {
      title: "AI / Machine Learning",
      skills: ["Python", "TensorFlow", "Scikit-learn", "Pandas"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Laravel", "Java"]
    },
    {
      title: "Data Analysis",
      skills: ["Pandas", "NumPy", "Matplotlib", "SQL"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Docker", "Git", "Linux", "AWS"]
    }
  ];

  return (
    <section id="skills" className="skills-section">

      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">

        {skillsData.map((category, index) => (
          <div className="skills-card" key={index}>

            <h3>{category.title}</h3>

            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Skills;