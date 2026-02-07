import "./Projects.css";
import plantRecognition from "../assets/plantRecognition.jpeg";
import news from "../assets/news.jpeg";

function Projects() {
  const projects = [
    {
      title: "Plant Recognition",
      description:
        "a cloud-based web application that allows users to identify plants by uploading images.",
      image: plantRecognition,
      tags: ["React", "Lambda", "AWS"],
      link: "https://plant-recognition-frontend-20261701-123456789.s3.us-east-1.amazonaws.com/index.html",
    },
    {
      title: "News App",
      description:
        "A news application that delivers real-time headlines and articles from multiple sources with a clean.",
      image: news,
      tags: ["HTML5", "JS", "C#", "MYSQL"],
      link: "https://proj.ruppin.ac.il/cgroup6/test2/tar5/index.html",
    },
    {
      title: "Movies",
      description:
        "Real-time weather application with forecasts, interactive maps, and location-based alerts.",
      image:
        "https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["HTML5", "API Integration", "C#"],
      link: "https://proj.ruppin.ac.il/cgroup6/test2/tar3/index.html",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <div className="title-underline"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.link} target="_blank" className="project-link">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
