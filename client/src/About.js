import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <Greeting>
        <Hover>Hello, I'm Mallory!</Hover>
      </Greeting>
      <p>
        I'm a full-stack web developer passionate about building websites and
        apps that are fast, simple and easy to use. People say that everyone has
        at least two careers in their lifetime. After ten years experience in
        product management, I've transitioned into my second career as a web
        developer. My number one mission is to make life simpler and to deliver
        quality work from beginning to end.
      </p>
      <Skills>I'm skilled in...</Skills>
      <ul>
        <li>Frontend: React, Redux, Javascript, HTML, CSS</li>
        <li>Backend: Node, Express, MongoDB</li>
        <li>Tools: Git & GitHub</li>
      </ul>
    </>
  );
};

export default About;

const Greeting = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 4.75rem;
`;

const Skills = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 2rem;
  color: #df2687;
`;

const Hover = styled.span`
  background-image: linear-gradient(to right, transparent 50%, #df2687 50%);
  background-position: 0;
  background-size: 200%;
  transition: all 0.4s;
  &:hover {
    color: white;
    background-position: -100%;
  }
`;
