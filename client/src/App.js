import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
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
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  return (
    <BrowserRouter>
     <ThemeProvider theme={ theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={themeToggler}>{theme === "light" ? <FiMoon /> : <FiSun />}</button>
      <Navbar />
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
