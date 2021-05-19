import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { lightTheme, darkTheme } from "./Themes";

const Navbar = ({ theme }) => {
  return (
    <Wrapper>
      <LogoWrapper theme={theme}>
        <Logo theme={theme}>mcb.</Logo>
      </LogoWrapper>
      <MenuWrapper>
        <StyledLink theme={theme} exact to="/">
          about me
        </StyledLink>
        <StyledLink theme={theme} to="/projects">
          my projects
        </StyledLink>
        <StyledLink theme={theme} to="/contact">
          contact me
        </StyledLink>
      </MenuWrapper>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  flex-wrap: wrap;
  justify-content: center;
  width: calc(100% - 16px);
  margin: 8px;
  padding: 10px;
  top: 0;
  left: 0;
`;

const LogoWrapper = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? darkTheme.body : lightTheme.body};
`;

const Logo = styled.p`
  margin: 0;
  padding: 5px;
  font-family: "Abril Fatface", cursive;
  font-size: 2rem;
  color: ${(props) =>
    props.theme === "light" ? darkTheme.text : lightTheme.text};
`;

const MenuWrapper = styled.div`
  width: 100%;
  padding-top: 10px;
  text-align: center;
`;

const StyledLink = styled(NavLink)`
  position: relative;
  padding: 10px;
  color: ${(props) =>
    props.theme === "light" ? lightTheme.text : darkTheme.text};
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    color: ${(props) =>
      props.theme === "light" ? lightTheme.text : darkTheme.text};
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: #df2687;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover {
    &:before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

const LinkAnimation = styled.span``;
