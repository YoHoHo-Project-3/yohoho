import React, { Component } from "react";
import "./BookForm.css";
import axios from "axios";
 
import TripCard from "./../components/TripCard";
 

export default class BookForm extends Component {
  state = {
    trips: [],
    loading: true,
    locationStart: "",
    locationEnd: "",
    date: "",
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get("/api/trips").then((response) => {
      this.setState({
        trips: response.data,
        loading: false,
      });
    });
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading.....</h1>;
    }
    let filtered = this.state.trips.filter((trip) => {
      return (
        trip.locationStart
          .toLowerCase()
          .includes(this.state.locationStart.toLowerCase()) &&

        trip.locationEnd
          .toLowerCase()
          .includes(this.state.locationEnd.toLowerCase()) &&

        trip.date.includes(this.state.date)
      );
    });
    return (
      <div className="book">
        <h1> All Trips</h1>
        <div className="inputGroup">
          <input
            type="text"
            name="locationStart"
            value={this.state.locationStart}
            placeholder="Location Start"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="locationEnd"
            value={this.state.locationEnd}
            placeholder="Location End"
            onChange={this.handleChange}
          />
          <input
            type="date"
            name="date"
            value={this.state.date}
            placeholder="date"
            onChange={this.handleChange}
          />
        </div>
 
        <div>
          {filtered.map((trip) => {
            return <TripCard key={trip._id} trip={trip} user={this.props.user} />;
          })}
 
        </div>
        {filtered.length === 0 && <h1>Sorry, we couldn't find any trips</h1>}
      </div>
    );
  }
}
