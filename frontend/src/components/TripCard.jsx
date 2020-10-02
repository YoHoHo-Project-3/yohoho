import React from "react";
import { Card } from "react-bootstrap";

const TripCard = ({ trip }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={trip.image} />
        <Card.Body>
          <Card.Title> {trip.title}</Card.Title>
          <Card.Text>{trip.description}</Card.Text>
          <Card.Text>{trip.locationStart}</Card.Text>
          <Card.Text>{trip.locationEnd}</Card.Text>
          <Card.Text>{trip.date}</Card.Text>
          <Card.Text>{trip.boatName}</Card.Text>
          <Card.Text>{trip.price}</Card.Text>
          <Card.Text>{trip.slotsAvailable}</Card.Text>
        </Card.Body>
        <button>Book now</button>
      </Card>
   
    </div>
  );
};

export default TripCard;
