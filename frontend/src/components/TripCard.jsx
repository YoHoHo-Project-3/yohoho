import React from "react";
import { Link } from 'react-router-dom';
import { Card, Button } from "react-bootstrap";
import "./TripCard.css";

const TripCard = ({ trip }) => {
  return (
    <section className='tripCardList'>
      <div className="tripCard">
            {trip.image ? <img src={trip.image} alt=""/> : 
            <div className='noImage'>
            no image
            </div>
          }
        

        <div className='cardInfo'>
          <div className='tripOwnerLink'>
            <p>{trip.boatName}</p>
            <Link id='linkToTripOwner' to={'/profile/'+trip.user}>Boat Owner Profile</Link>
          </div>
            <h5>{trip.title}</h5>
            <p>{trip.description}</p>

          <div className='tripDates'>
            <p>From {trip.locationStart} to {trip.locationEnd}</p>
            <p>Date: {trip.date}</p>
          </div>

          <div className="tripFigures">
            <p>Spots: {trip.slotsAvailable}</p>
            <p>{trip.price}€ / Ride</p>
          </div>
          
          <div className='bookNowButton'>
            <button className='btn btn-danger'>Book now</button>
          </div>
        </div>
      </div>
    </section>

    );
};

export default TripCard;
