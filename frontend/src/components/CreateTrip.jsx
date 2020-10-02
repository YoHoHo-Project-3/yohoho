import React, { Component } from "react";
import "./CreateTrip.css";

export default class BookForm extends Component {
  state = {
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

  handleSubmit = (event) => {};
  render() {
      console.log(this.state)
    return (
      <div className="create">
        <div className="formCreate">
          <form onSubmit={this.handleSubmit}>
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
              <label htmlFor="locationStrart">From: </label>
              <input
                type="text"
                name="locationStrart"
                id="locationStrart"
                value={this.state.locationStrart}
                onChange={this.handleChange}
              />{" "}
            </div>
            <div>
              <label htmlFor="locationEnd">To: </label>
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
                type="file"
                name="image"
                id="image"
                value={this.state.image}
                onChange={this.handleChange}
              />{" "}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
