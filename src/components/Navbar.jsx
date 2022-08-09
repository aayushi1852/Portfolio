import React, { useState } from "react";
import "./navfg.css";
import resume from "../img/resume.pdf";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="app__navbar navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home"><span className="h1 text-primary">A</span><span className="h1 text-danger">S</span></a>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="">
          <ul className="navbar-nav mx-auto d-inline">
            <a className="mx-md-4 mx-2 h4 text-dark linkhover" href="#home">Home</a>
            <a className="mx-md-4 mx-2 h4 text-dark linkhover" href="#about">About</a>
            <a className="mx-md-4 mx-2 h4 text-dark linkhover" href="#skill">Skills</a>
            
            <a className="mx-md-4 mx-2 h4 text-dark linkhover" href="#project">Projects</a>
          
            <a className="mx-md-4 mx-2 h4 text-dark linkhover" href="#contact">Contact</a>
          </ul>
        </div>
        <a href={resume} target={'_blank'} className="d-md-block d-none resume__btn btn btn-primary">Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;
