import "./About.css";
import hike from "../assets/hike.jpeg";
import programmingImage from "../assets/programmingImage.jpg";
import resumePdf from "../assets/resume.pdf";
import { FaFileDownload } from "react-icons/fa";

function About() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Chen_Brown_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h3 className="about-name">Chen Brown</h3>
          <p className="about-role">Software Engineer</p>
          <p className="about-paragraph">
            I’m a software engineer focused on front-end and back-end
            development of scalable web applications. I share insights on
            software development on my blog. Learn how I can help your project
            by viewing my portfolio and resume.
          </p>
          <button onClick={handleDownloadResume} className="resume-button">
            <FaFileDownload />
            Review Resume
          </button>
        </div>

        <div className="about-image">
          <img src={programmingImage} alt="Workspace" />
        </div>
      </div>
    </section>
  );
}

export default About;
