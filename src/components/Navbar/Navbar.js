import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <p className="left brand-logo hide-on-med-and-down">
            <Link to="/">Logo</Link>
          </p>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="/#">
                <i className="material-icons">search</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
