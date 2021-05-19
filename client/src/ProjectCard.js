import React from "react";
import styled from "styled-components";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <ProjectName>{project.name}</ProjectName>
      <Tools>{project.tools} </Tools>
      {project.description.map((desc) => (
        <p key={desc}>{desc}</p>
      ))}
      <a href={project.link}>Check out {project.name}</a>
      <p></p>
    </div>
  );
};

export default ProjectCard;

const ProjectName = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 2.75rem;
`;

const Tools = styled.h2`
  color: #f172a1;
`;
