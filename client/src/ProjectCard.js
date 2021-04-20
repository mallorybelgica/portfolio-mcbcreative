import React from "react";

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <div>
      <h1>{project.title}</h1>
      <h2>{project.tools}</h2>
      {/* {project.description.map((desc) => desc)} */}
      <p></p>
    </div>
  );
};

export default ProjectCard;
