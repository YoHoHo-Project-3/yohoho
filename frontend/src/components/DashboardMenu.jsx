import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function DashboardMenu(props) {
  return (
   <div>
   <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.user.picture} />
  <Card.Body>
    <Card.Title>{props.user.name}</Card.Title>
    <Card.Text>
      {props.user.experience}
    </Card.Text>
    <ListGroup className="list-group-flush">
    <ListGroupItem><Card.Link href="#" onClick={props.showOwnTrips}>Owned Trips</Card.Link></ListGroupItem>
    <ListGroupItem><Card.Link href="#" onClick={props.showBookedTrips}>Booked Trips</Card.Link></ListGroupItem>
    <ListGroupItem><Card.Link href="#" onClick={props.showProfile}>Profile</Card.Link></ListGroupItem>
  </ListGroup>
  </Card.Body>
</Card>
   </div>
  );
}
