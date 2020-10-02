import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navigator.css';

export default class Navigator extends Component {
  render() {
    return (
      <div className='background'>       
        <Link to="/book-trip">Whant to book a Trip?</Link>

        <Link to="/offer-trip">Do You offer a Trip</Link>
       
      </div>
    );
  }
}