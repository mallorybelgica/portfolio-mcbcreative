import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <h1>{project.name}</h1>
      <h2>{project.tools} </h2>
      {project.description.map((desc) => (
        <p key={desc}>{desc}</p>
      ))}
      <a href={project.link}>Check out {project.name}</a>
      <p></p>
    </div>
  );
};

export default ProjectCard;
