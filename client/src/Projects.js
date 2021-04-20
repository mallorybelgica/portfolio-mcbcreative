import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState("");

  useEffect(() => {
    fetch("/projects")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        setProjects(json.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {Object.values(projects).map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};

export default Projects;
