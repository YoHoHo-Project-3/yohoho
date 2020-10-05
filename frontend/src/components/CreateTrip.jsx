import React, { Component } from "react";
import "./CreateTrip.css";
import axios from "axios";
import { withRouter } from "react-router";


 class BookForm extends Component {
  state = {
    user: this.props.userId,
    title: "",
    description: "",
    locationStart: "",
    locationEnd: "",
    date: "",
    boatName: "",
    price: "",
    slotsAvailable: "",
    image: "",
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked");
    axios
      .post("/api/trips", this.state)
      .then((response) => {
          this.props.history.push("/profile")
        console.log(response);

      })
      .catch((err) => {
        console.log("posting failed", err);
      });
  };
  render() {
    console.log(this.props);
    return (
      <div className="create">
        <div className="formCreate">
          <form>
            <div>
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                name="title"
                id="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="description">Description: </label>
              <input
                type="text"
                name="description"
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
              />{" "}
            </div>

            <div>
              <label htmlFor="locationStart">Start: </label>
              <input
                type="text"
                name="locationStart"
                id="locationStart"
                value={this.state.locationStart}
                onChange={this.handleChange}
              />{" "}
            </div>
            <div>
              <label htmlFor="locationEnd">End: </label>
              <input
                type="text"
                name="locationEnd"
                id="locationEnd"
                value={this.state.locationEnd}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="date">Date: </label>
              <input
                type="date"
                name="date"
                id="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="slotsAvailable">Available slots: </label>
              <input
                type="number"
                name="slotsAvailable"
                id="slotsAvailable"
                value={this.state.slotsAvailable}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="price">Price: </label>
              <input
                type="number"
                name="price"
                id="price"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="boatName">Name of yor Boat: </label>
              <input
                type="text"
                name="boatName"
                id="boatName"
                value={this.state.boatName}
                onChange={this.handleChange}
              />
            </div>

            <div>
              <label htmlFor="image">Photo: </label>
              <input
                type="text"
                name="image"
                id="image"
                value={this.state.image}
                onChange={this.handleChange}
              />
            </div>
            <button onClick={this.handleSubmit}> Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(BookForm)
