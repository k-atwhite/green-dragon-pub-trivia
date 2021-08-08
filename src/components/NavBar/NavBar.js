import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to="/" className="nav-link home">
        Home
      </NavLink>
      <NavLink exact to="/trivia" className="nav-link trivia">
        Quote Trivia
      </NavLink>
      <NavLink exact to="/heroes" className="nav-link heroes">
        Heroes
      </NavLink>
    </nav>
  );
};

export default NavBar;
