import React from "react";

function Nav() {
  return (
    <nav className="d-flex navbar navbar-expand-lg navbar-light bg-light justify-content-between px-5 fixed-top shadow">
      <a className="navbar-brand" href="#">
        El's Portfolio
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#aboutme">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contactme">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
