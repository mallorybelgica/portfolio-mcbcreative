import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink exact to="/">
        about me
      </NavLink>
      <NavLink to="/projects">my projects</NavLink>
      <NavLink to="/contact">contact me</NavLink>
    </div>
  );
};

export default Navbar;
