import React from "react";
import "./css/Projects.css";
const Projects = () => {
  const projectList = [
    {
      title: "Project One",
      description:
        "A brief description of Project One. This project demonstrates my skills in HTML, CSS, and JavaScript.",
      imageUrl: "path/to/project-one-image.jpg",
      link: "https://github.com/yourusername/project-one",
    },
    {
      title: "Project Two",
      description:
        "A brief description of Project Two. This project showcases my ability to work with React and build dynamic web applications.",
      imageUrl: "path/to/project-two-image.jpg",
      link: "https://github.com/yourusername/project-two",
    },
  ];

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
