import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar3 = () => {
  return (
    <header className="header">
      <span className="span1">
        <NavLink to="home">Home</NavLink>
        <br></br>
        <NavLink to="signup">Signup</NavLink>
        <NavLink to="login">Login</NavLink>
      </span>
      <span className="span2">
        <NavLink to="fake1">fake1</NavLink>
      </span>
    </header>
  );
};

export default Navbar3;
