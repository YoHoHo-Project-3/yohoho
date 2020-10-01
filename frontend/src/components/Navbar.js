import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import Logo from "./../images/Logo.png";
export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <img src={Logo} alt='yohoho' />
        </Link>
        <div className="link-wrapper">
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    );
  }
}
