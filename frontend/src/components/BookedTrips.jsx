import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from "react-router-dom";
// import TripCard from '../components/TripCard';
import axios from "axios";

// Check if trip above is the right file

export default class RequestBooking extends Component {
    state = {
        user: [],
        trips: [],
        clicked: false,
    }

    componentDidMount() {
        this.getData();
    }

    getData() {

        axios.get("/api/trips").then((response) => {
            this.setState({
                trips: response.data,
                loading: false,
            })
        });
    }

    // handleClick = () => {
    //     this.setState((state) => {
    //         clicked: !state.clicked
    //     })
    // }

    requestBooking = async () => {
        try {
            const id = this.props.match.params.id;
            await axios.put(`/api/trips/${id}`, {
                slotsAvailable: this.state.trips.slotsAvailable--,
                slots_booked: this.state.trips.slots_booked++,
                passengers: this.state.trips.passengers.push(this.state.user._id)
            })
            // return trips;
            return (<Redirect to="/requestBooking" />)

        } catch (err) {
            console.log('Error:' + err);
        }
    };

    // Is this necessary?





    deleteTrip = async () => {
        try {
            const id = this.props.match.params.id;
            await axios.put(`/api/trips/${id}`, {
                slotsAvailable: this.setState.trips.slotsAvailable++,
                slots_booked: this.setState.trips.slots_booked--,
                passengers: this.setState.trips.passengers.splice(this.state.trips.indexOf(this.state.user._id), 1)
            })
        } catch (err) {
            console.log(err);
        }
    }




    render() {
        // Create function here:
        this.state.trips.filter((trip) => {
            return (
                trip.passengers.includes(this.state.user._id)
            )
        });
        return (
            <>
                <div>
                    <Card style={{ width: "17rem" }}>
                        <Card.Img variant="top" src={this.state.trips.image} />
                        <Card.Body>
                            <Card.Title>Title:  {this.state.trips.title}</Card.Title>
                            <Card.Text>Description: {this.state.trips.description}</Card.Text>
                            <Card.Text>Start: {this.state.trips.locationStart}</Card.Text>
                            <Card.Text>End: {this.state.trips.locationEnd}</Card.Text>
                            <Card.Text>Date: {this.state.trips.date}</Card.Text>
                            <Card.Text>Name of boat: {this.state.trips.boatName}</Card.Text>
                            <Card.Text>Price: {this.state.trips.price}</Card.Text>
                        </Card.Body>
                        <button onClick={this.state.deleteTrip}>Delete</button>
                    </Card>

                </div>
            </>
        )
    }
}