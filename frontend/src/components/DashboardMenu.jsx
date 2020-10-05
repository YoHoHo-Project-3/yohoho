import React from "react";
import { Link } from 'react-router-dom'
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { List, Button } from 'react-bootstrap';


export default function DashboardMenu(props) {
const id = props.user._id;
  return (
   <div>
   
   
   <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.user.picture} />
  <Card.Body>
    <Card.Title>{props.user.name}</Card.Title>
    <Card.Text>
      {props.user.experience}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href={`/profile/${id}`}>Profile</Card.Link>
  </Card.Body>
</Card>
   </div>
  );
}
