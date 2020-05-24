import React, { Component } from 'react';
import { Link } from "../../../node_modules/react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              to="/"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gallery"
              className={window.location.pathname === "/gallery" ? "nav-link active" : "nav-link"}
            >
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
  export default NavBar;