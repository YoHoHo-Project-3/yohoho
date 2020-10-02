import React, { Component } from "react";
import "./BookForm.css";
import axios from "axios";
import TripCard from "./../components/TripCard";
export default class BookForm extends Component {
  state = {
    trips: [],
    loading: true,
  };

  componentDidMount() {
    axios.get("/api/trips").then((response) => {
      this.setState({
        trips: response.data,
        loading: false,
      });
    });
  }
  render() {
    console.log("trips should be here ", this.state.trips);
    if (this.state.loading) {
      return <h1>Loading.....</h1>;
    }
    return (
      <div className="book">
        <h1>list of trips</h1>
        <div className="tripWrapper"> 
          {this.state.trips.map((trip) => {
            return <TripCard key={trip._id} trip={trip} />;
          })}
        </div>
      </div>
    );
  }
}
