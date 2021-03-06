import React from "react";
import { Card } from "react-bootstrap";
import './DashboardMenue.css';

export default function DashboardMenu(props) {
  return (
    <div className='dashboard-menue'>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.user.picture} />
          <Card.Body>
            <Card.Title id='dashboard-name'>{props.user.name} {props.user.lastName}</Card.Title>
            <Card.Text id='dashboard-experience'>"{props.user.experience}"</Card.Text>
            </Card.Body>
        </Card>
      </div>
    <div className='link-block-menue'>
      <a rel="stylesheet" href="#" onClick={props.showOwnTrips}>Own Rides</a>
      <a rel="stylesheet" href="#" onClick={props.showBookedTrips}>Booked Rides</a>
      <a rel="stylesheet" href="/offer-trip">Create a Ride</a>
      <a rel="stylesheet" href="#" onClick={props.showProfile}>Profile</a>
      <a rel="stylesheet" href="/chat">Chat</a>
    </div>  
  </div>
   
  );
}

