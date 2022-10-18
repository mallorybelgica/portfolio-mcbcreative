import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";
import { FiMoon, FiSun } from "react-icons/fi";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Button theme={theme} onClick={themeToggler}>
          {theme === "light" ? <FiMoon size={25} /> : <FiSun size={25} />}
        </Button>
        <Navbar theme={theme} />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

const Button = styled.button`
  position: absolute;
  margin: 16px;
  top: 0;
  right: 0;
  z-index: 10;
  color: ${(props) =>
    props.theme === "light" ? lightTheme.text : darkTheme.text};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
