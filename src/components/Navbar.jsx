import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="app__navbar navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}><span className="h1 text-primary">A</span><span className="h1 text-danger">S</span></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-3">
              <NavLink className="nav-link h4 text-dark" to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink className="nav-link h4 text-dark" to={"/about"}>About</NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink className="nav-link h4 text-dark" to={"/contact"}>Contact</NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink className="nav-link h4 text-dark" to={"/project"}>Projects</NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink className="nav-link h4 text-dark" to={"/skill"}>Skills</NavLink>
            </li>
          </ul>
          <button className="btn btn-primary">Resume</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
