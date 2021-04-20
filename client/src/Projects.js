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

  console.log(projects);

  return (
    <div>
      {/* {projects.map((project) => (
        <ProjectCard project={project} />
      ))} */}
    </div>
  );
};

export default Projects;
