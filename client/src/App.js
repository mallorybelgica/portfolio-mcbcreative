import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
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
    </BrowserRouter>
  );
};

export default App;
