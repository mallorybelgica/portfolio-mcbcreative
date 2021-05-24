import React from "react";
import styled from "styled-components";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <ProjectName>{project.name}</ProjectName>
      <Tools>
        {project.tools.map((tool) => (
          <Tool>✳ {tool}</Tool>
        ))}
      </Tools>
      {project.description.map((desc) => (
        <Description key={desc}>{desc}</Description>
      ))}
      <DemoLink href={project.link} target="_blank">
        Check out {project.name} ➔
      </DemoLink>
    </div>
  );
};

export default ProjectCard;

const ProjectName = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 2.75rem;
  margin-bottom: 0;
`;

const Tools = styled.div`
  display: flex;
  color: #df2687;
`;

const Tool = styled.h2`
  color: #df2687;
  margin-top: 0;
  padding-right: 15px;
`;

const Description = styled.p`
  margin-top: 0;
`;

const DemoLink = styled.a`
  font-family: "Montserrat", sans-serif;
  color: #0090c5;
  font-size: 1.15rem;
  font-weight: 600;
  text-decoration: none;
`;
