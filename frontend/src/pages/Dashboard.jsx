import React, { Component } from "react";
import './Dashborad.css';
import TripCard from '../components/TripCard'
import DashboardMenu from "../components/DashboardMenu";
import axios from "axios";
import Profile from '../components/Profile'

export default class Dashboard extends Component {
    constructor(props) {
        super();
        this.state = {
            ownTrips: [],
            bookedTrips: [],
            showMode: 'ownTrips',
            user: props.user
        };
    }

    async getDataOwnTrips() {
        try {
            const response = await axios.get('/api/trips?user=' + this.state.user._id);
            console.log(response);
            this.setState({ ownTrips: response.data });
        } catch (err) {
            console.log(err);
        }
    }

    async getDataBookedTrips() {
        try {
            const response = await axios.get('/api/trips');
            console.log(response);
            this.setState({ bookedTrips: response.data.filter(trip => trip.passengers.includes(this.state.user._id)) });
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.getDataOwnTrips();
        this.getDataBookedTrips();
    }

    showOwnTrips() {
        this.setState({ showMode: 'ownTrips' });
    }

    showBookedTrips() {
        this.setState({ showMode: 'bookedTrips' });
    }

    showProfile() {
        this.setState({ showMode: 'profile' });
    }

    handleUserChange = user => {
        this.setState({
            user: user
        })
    }

    render() {
        return (
            <div className="dashboard">
 
                <DashboardMenu
                    user={this.state.user}
                    showOwnTrips={() => { this.showOwnTrips() }}
                    showBookedTrips={() => { this.showBookedTrips() }}
                    showProfile={() => { this.showProfile() }} />
                
                <div>

                {this.state.showMode === 'ownTrips' ? this.state.ownTrips.map((trip, index) => {
                    return (<TripCard trip={trip} key={index} user={this.props.user} />)
 
                }) : null}

                {this.state.showMode === 'bookedTrips' ? this.state.bookedTrips.map((trip, index) => {
                    return (<TripCard trip={trip} key={index} user={this.props.user} />)
                }) : null}
 
                {this.state.showMode === 'profile' ? <Profile handleUserChange={(user) => { this.handleUserChange(user) }} user={this.state.user} /> : null}
                </div>
 
            </div>
        )
    }
}
