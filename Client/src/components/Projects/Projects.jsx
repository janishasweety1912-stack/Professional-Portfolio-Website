import "./Projects.css";

import SectionTitle from "../Common/SectionTitle/SectionTitle";
import ProjectCard from "../Common/ProjectCard/ProjectCard";
import { useEffect, useState } from "react";
import { getProjects } from "../../services/projectService";
import Loader from "../Common/Loader/Loader";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError("Failed to load projects");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects">
        <div className="container">
          <Loader />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects">
        <div className="container">
          <h2>{error}</h2>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section id="projects">
        <div className="container">
          <SectionTitle
            subtitle="My Work"
            title="Featured Projects"
          />

          <div className="no-projects">
            <h3>No Projects Found</h3>
            <p>Projects will be added soon.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects">
      <div className="container">
        <SectionTitle
          subtitle="My Work"
          title="Featured Projects"
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.githubLink}
              image={project.image}
              category={project.category}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;