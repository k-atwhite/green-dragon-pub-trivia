import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink exact to="/trivia" className="nav-link">
        Quote Trivia
      </NavLink>
      <NavLink exact to="/heroes" className="nav-link">
        Heroes
      </NavLink>
      <NavLink exact to="/wise-words" className="nav-link">
        Wise Words
      </NavLink>
    </nav>
  );
};

export default NavBar;
