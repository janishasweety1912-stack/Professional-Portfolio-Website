import "./ProjectCard.css";

import { FaGithub } from "react-icons/fa";

function ProjectCard({
  title,
  description,
  technologies,
  github,
  image,
}) {
  return (
    <div className="project-card">

      <div className="project-image">

        <img
          src={image}
          alt={title}
        />

        <div className="project-overlay">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            <span>View Source</span>
          </a>
        </div>

      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="tech-stack">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="tech-badge"
          >
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
}

export default ProjectCard;