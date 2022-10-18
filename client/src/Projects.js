import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import { projects } from "./projectsData";

const Projects = () => {
  return (
    <div>
      <Highlights>project highlights</Highlights>
      {Object.values(projects).map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};

export default Projects;

const Highlights = styled.h1`
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  font-weight: 600;
  margin-top: 50px;
`;
