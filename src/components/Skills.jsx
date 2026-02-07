import "./Skills.css";
import { FaNodeJs, FaPython } from "react-icons/fa6";

function Skills() {
  const skills = [
    {
      name: "Node.js",
      description:
        "Building scalable backend services and RESTful APIs with Express and modern Node.js frameworks.",
      icon: <FaNodeJs />,
    },
    {
      name: "React",
      description:
        "Creating dynamic, responsive user interfaces with React, hooks, context, routes.",
      icon: "⚛️",
    },
    {
      name: "Python",
      description:
        "Building scalable backend services and RESTful APIs using Python and Flask.",
      icon: <FaPython />,
    },
    {
      name: "C#",
      description:
        "Developing backend RESTful APIs with .NET, Object-Oriented Programming (OOP) and SQL databases.",
      icon: "💻",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">What I Do</h2>
        <div className="title-underline"></div>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">
              {skill.icon}
              <h3 className="skill-name">{skill.name}</h3>
            </div>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
