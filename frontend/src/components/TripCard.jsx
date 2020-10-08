 
import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import image from '../images/boat1.jpeg';
 
import "./TripCard.css";

import axios from "axios";


export default class TripCard extends Component {
 
  state = {
    clicked: false,
    booked: this.props.trip.passengers.includes(this.props.user._id) || "",
    owner: this.props.trip.user === this.props.user._id,
     
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
      clicked: !this.state.clicked,
      booked: true,
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

  handleUnbook = async (id) => {
    console.log(id, "ID")
    try {
      await axios.post(`/api/bookTrip/unbook/${id}`
      )

      this.setState({
        booked: false,
      })
  
      return (<Redirect to="/dashboard" />)

    } catch (err) {
      console.log('Error:' + err);
    }
  };

  handleDelete = async (id) => {
    console.log(id, "ID")
    try {
      await axios.delete(`/api/trips/${id}`
      )
      return (<Redirect to="/dashboard" />)

    } catch (err) {
      console.log('Error:' + err);
    }
  };
 render(){
      return (
        <section className='tripCardList'>
          <div className="tripCard">
                {this.props.trip.image ? <img src={this.props.trip.image} alt=""/> : 
                <img src={image} alt="default img"/>
                
              }
            
    
            <div className='cardInfo'>
              <div className='tripOwnerLink'>
                <p>{this.props.trip.boatName}</p>
                <Link id='linkToTripOwner' to={'/profile/'+this.props.trip.user}>Boat Owner Profile</Link>
              </div>
                <h5>{this.props.trip.title}</h5>
                <p>{this.props.trip.description}</p>
    
              <div className='tripDates'>
                <p>From {this.props.trip.locationStart} to {this.props.trip.locationEnd}</p>
                <p>Date: {this.props.trip.date}</p>
              </div>
    
              <div className="tripFigures">
                <p>Spots: {this.props.trip.slotsAvailable}</p>
                <p>{this.props.trip.price}€ / Ride</p>
              </div>
              
              <div className='bookNowButton'>
              
                {this.state.owner ? <button className='btn btn-danger' onClick={() => this.handleDelete(this.props.trip._id)}>Delete Trip</button> :
                this.state.booked ?
                  <button className='btn btn-danger' onClick={() => this.handleUnbook(this.props.trip._id)}>Unbook trip</button> :
                  <button className='btn btn-danger'  onClick={() => this.handleClick(this.props.trip._id)}>Book trip</button>}
              </div>
            </div>
          </div>
        </section>
    
        )
      };
      }
    
 

