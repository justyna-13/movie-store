import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <nav>
          <img className="logo" src="" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    );
  }
}
