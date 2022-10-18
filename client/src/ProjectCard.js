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
  font-size: 32px;
  margin-bottom: 0;
`;

const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #df2687;
  margin: 5px 0;
`;

const Tool = styled.h2`
  color: #df2687;
  margin-top: 0;
  padding-right: 15px;
  font-size: 21px;
`;

const Description = styled.p`
  margin-top: 0;
`;

const DemoLink = styled.a`
  font-family: "Montserrat", sans-serif;
  color: #0090c5;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
`;
