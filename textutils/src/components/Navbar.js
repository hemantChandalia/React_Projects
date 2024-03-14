
import React, { useState } from "react";

import PropTypes from "prop-types";

function Navbar(props) {
  const [mode, setMode] = useState("light");
  // const [redModeChecked, setRedModeChecked] = useState(false);
  // const [greenModeChecked, setGreenModeChecked] = useState(false);
  // const [blueModeChecked, setBlueModeChecked] = useState(false);
  // const [toggleModeChecked, setToggleModeChecked] = useState(false);

  // function handleMultipleThemeState(_type) {
  //   if (_type == "green") {
  //     setGreenModeChecked(!greenModeChecked);
  //     // make unchecked all others
  //     setRedModeChecked(false);
  //     setBlueModeChecked(false);
  //     setToggleModeChecked(false);
  //   } else if (_type == "red") {
  //     setRedModeChecked(!redModeChecked);
  //     // make unchecked all others
  //     setGreenModeChecked(false);
  //     setBlueModeChecked(false);
  //     setToggleModeChecked(false);
  //   } else if (_type == "blue") {
  //     setBlueModeChecked(!blueModeChecked);
  //     // make unchecked all others
  //     setGreenModeChecked(false);
  //     setRedModeChecked(false);
  //     setToggleModeChecked(false);
  //   } else if (_type == "dark") {
  //     setToggleModeChecked(!toggleModeChecked);
  //     // make unchecked all others
  //     setGreenModeChecked(false);
  //     setRedModeChecked(false);
  //     setBlueModeChecked(false);
  //   } else {
  //     setToggleModeChecked(false);
  //     setGreenModeChecked(false);
  //     setRedModeChecked(false);
  //     setBlueModeChecked(false);
  //   }
  // }

  const toggleMode = (colorTheme) => {
    console.log("colorTheme >>> ", colorTheme);
    // handleMultipleThemeState(colorTheme);
    if (mode === colorTheme) {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.getElementById("text-area-bg").style.backgroundColor = "white";
      document.getElementById("text-area-bg").style.color = "black";
      props.showAlert(": Light mode has been enabled.", "success");
      document.title = "TextUtils - Light Mode";
    } else {
      setMode(colorTheme);
      document.body.style.backgroundColor = colorTheme;
      document.getElementById("text-area-bg").style.backgroundColor =
        colorTheme;
      document.getElementById("text-area-bg").style.color = "white";
      document.title = `TextUtils - ${colorTheme} Mode`;
    }
  };
  // function redHandler(_colorType) {
  //   toggleMode(_colorType);
  // }

  // function greenHandler(_colorType) {
  //   toggleMode(_colorType);
  // }

  // function blueHandler(_colorType) {
  //   toggleMode(_colorType);
  // }

  // function toggleHandler(_colorType) {
  //   toggleMode(_colorType);
  // }

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} 
     `}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>

          <div className="form-check form-switch">
            <input
              // className="form-check-input"
              // onClick={() => {
              //   redHandler("red");
              // }}
              // type="checkbox"
              // role="switch"
              // id="flexSwitchCheckDefault"
              // checked={redModeChecked}
              // checked={true}

              // disabled={"dark" ? true : false}
            />

            <label
              // className="form-check-label"
              // htmlFor="flexSwitchCheckDefault"
            >
              Red Mode
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              // onClick={() => greenHandler("green")}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              // checked={greenModeChecked}
              // disabled={"dark" ? true : false}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Green Mode
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              // onClick={() => blueHandler("blue")}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              // checked={blueModeChecked}
              // disabled={"dark" ? true : false}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Blue Mode
            </label>
          </div>
          <div
            className={`form-check form-switch text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              // onClick={() => toggleHandler("dark")}
              type="checkbox"
              role="switch"
              checked={toggleModeChecked}
              id="flexSwitchCheckDefault"
              // disabled={"light" ? true : false}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {mode} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "set title here",
  aboutText: "About text here",
};
