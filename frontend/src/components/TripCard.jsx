import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import { Card } from "react-bootstrap";
import "./TripCard.css";
import FunctionBook from "./BookedTrips"
import axios from "axios";


export default class TripCard extends Component {
  //  ----------------New -------------------
  state = {
    clicked: false,
    booked: this.props.trip.passengers.includes(this.props.user._id)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.trip !== this.props.trip) {
      this.setState({
        booked: this.props.trip.passengers.includes(this.props.user._id)
      })
    }
  }

  handleClick = (id) => {
    this.requestBooking(id)
    this.setState({
      clicked: !this.state.clicked
    })
  }


  requestBooking = async (id) => {
    console.log(id, "ID")
    try {
      await axios.post(`/api/bookTrip/${id}`
      )
      return (<Redirect to="/dashboard" />)

    } catch (err) {
      console.log('Error:' + err);
    }
  };

  handleDelete = async (id) => {
    console.log(id, "ID")
    try {
      await axios.post(`/api/bookTrip/unbook/${id}`
      )
      return (<Redirect to="/dashboard" />)

    } catch (err) {
      console.log('Error:' + err);
    }
  };
  // -----------------Hasta aquí ---------------------
  render() {
    return (
      <div>
        <Card style={{ width: "17rem", backgroundColor: "#ffffff" }}>
          <Card.Img variant="top" src={this.props.trip.image} />
          <Card.Body>
            <Card.Title>Title:  {this.props.trip.title}</Card.Title>
            <Card.Text>Description: {this.props.trip.description}</Card.Text>
            <Card.Text>Start: {this.props.trip.locationStart}</Card.Text>
            <Card.Text>End: {this.props.trip.locationEnd}</Card.Text>
            <Card.Text>Date: {this.props.trip.date}</Card.Text>
            <Card.Text>Name of boat: {this.props.trip.boatName}</Card.Text>
            <Card.Text>Price: {this.props.trip.price}</Card.Text>
            <Card.Text>Available slots: {this.props.trip.slotsAvailable}</Card.Text>
            <Card.Text><Link to={'/profile/' + this.props.trip.user}>Boat Owner Profile</Link></Card.Text>
          </Card.Body>
          {/* ..........................Botón debajo */}
          {this.state.booked ?
            <button onClick={() => this.handleDelete(this.props.trip._id)}>Unbook trip</button> :
            <button onClick={() => this.handleClick(this.props.trip._id)}>Book trip</button>}
        </Card>

      </div>
    );
  }
};

