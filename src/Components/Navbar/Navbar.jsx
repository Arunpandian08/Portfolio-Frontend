import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="container-fluid navy sticky-top">
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand animate__animated animate__slideInUp" to="/" href="/">d.Arunpandian</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav animate__animated animate__slideInUp ms-auto mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link" to="home" smooth={true} duration={500}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about" smooth={true} duration={500}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="skills" smooth={true} duration={500}>Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="projects" smooth={true} duration={500}>Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="resume" smooth={true} duration={500}>Resume</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
