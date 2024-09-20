import React from "react";
// import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navabr-${
          props.mode
        } text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <div className={`container-fluid`}>
          <a
            className={`navbar-brand text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
            href="#"
          >
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link active text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                  aria-current="page"
                  href="#"
                >
                  {props.home}
                </a>
              </li>
              {/*<li className="nav-item">
                <a
                  className={`nav-link text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                  href="/About"
                >
                  About
                </a>
              </li> */}
            </ul>
            <div className="form-check mx-2">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onClick={props.togglelight}
                defaultChecked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Light Mode
              </label>
            </div>

            <div className={`form-check mx-2`}>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onClick={props.toggledark}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
