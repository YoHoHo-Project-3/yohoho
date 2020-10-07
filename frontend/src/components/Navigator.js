import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navigator.css';

export default class Navigator extends Component {
  render() {
    return (
      <div className='background'>  
        <div className='main-links'>    
          <Link className='blue' to="/book-trip">Want to book a Trip?</Link>
          <Link className='red' to="/offer-trip">Do You offer a Trip</Link>
        </div> 
      </div>
    );
  }
}