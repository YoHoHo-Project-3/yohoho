import React from "react";
import { Card } from "react-bootstrap";
import "./TripCard.css";
const TripCard = ({ trip }) => {
  return (
    <div>
      <Card style={{ width: "17rem" }}>
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
        </Card.Body>
        <button>Book now</button>
      </Card>
   
    </div>
  );
};

export default TripCard;
