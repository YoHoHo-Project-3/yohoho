import React from "react";
import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap";
import "./TripCard.css";
const TripCard = ({ trip }) => {
  return (
    <div>
      <Card style={{ width: "17rem", backgroundColor: "#ffffff" }}>
        <Card.Img variant="top"   src={trip.image} />
        <Card.Body>
          <Card.Title>Title:  {trip.title}</Card.Title>
          <Card.Text>Description: {trip.description}</Card.Text>
          <Card.Text>Start: {trip.locationStart}</Card.Text>
          <Card.Text>End: {trip.locationEnd}</Card.Text>
          <Card.Text>Date: {trip.date}</Card.Text>
          <Card.Text>Name of boat: {trip.boatName}</Card.Text>
          <Card.Text>Price: {trip.price}</Card.Text>
          <Card.Text>Available slots: {trip.slotsAvailable}</Card.Text>
          <Card.Text><Link to={'/profile/'+trip.user}>Boat Owner Profile</Link></Card.Text>
        </Card.Body>
        <button>Book now</button>
      </Card>
   
    </div>
  );
};

export default TripCard;
