import React from "react";

const Projects = () => {
  return (
    <div>
      <h1>highlighted projects</h1>
      <h2>pair my wine</h2>
      <h3>#React #Redux #Node #Express #MongoDB</h3>
      <p>
        PAIR MY WINE is an app created to recommend the perfect wine pairing
        your dinner. Users can choose up to three ingredients with an option to
        include a preparation technique to narrow down to the best possible wine
        pairing. In addition to the pairing tool, users are able to create their
        own cellars in which they are able to upload their favorite wines.
      </p>
      <p>
        This was my final project for Concordia University's web development
        bootcamp. The frontend is built with React and Redux. While, the backend
        is built with Node and Express. I built the database on MongoDb on my
        own based on a poster I found while doing research for my project.
      </p>
      <p>Highlights:</p>
      <ul>
        <li>Designed and built front-end and back-end</li>
        <li>Built wine pairing tool using Javascript.</li>
        <li>
          Built and implemented cellar feature - users are able to save and
          access all their wines.
        </li>
      </ul>
    </div>
  );
};

export default Projects;
