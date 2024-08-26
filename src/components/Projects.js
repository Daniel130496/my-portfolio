import React from "react";
import "./css/Projects.css";
import projectList from "./projectData";
const Projects = () => {
  return (
    <div id='projects' className="projects">
      <h2>My Project</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-item">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
