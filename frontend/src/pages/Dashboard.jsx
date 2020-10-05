import React, { Component } from "react";
import './Dashborad.css';
import TripCard from '../components/TripCard'
import DashboardMenu from "../components/DashboardMenu";
import Axios from "axios";
import Profile from '../components/Profile'

export default class Dashboard extends Component {
    constructor(props){
        super();
        this.state = {
            ownTrips: [], 
            bookedTrips: [], 
            showMode: 'ownTrips',
            user: props.user
        };
    }


    async componentDidMount() {
        try {
            const response = await Axios.get('/api/trips?user='+this.state.user._id);
            this.setState({ownTrips: response.data});
        } catch(err) {
            console.log(err);
        }
    }

    showOwnTrips() {
        this.setState({showMode: 'ownTrips' });
    }

    showBookedTrips() {
        this.setState({showMode: 'bookedTrips' });
    }

    showProfile() {
        this.setState({showMode: 'profile' });
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
                showOwnTrips={() => {this.showOwnTrips()}} 
                showBookedTrips={() => {this.showBookedTrips()}} 
                showProfile={() => {this.showProfile()}}/>
                
                {this.state.showMode === 'ownTrips' ? this.state.ownTrips.map(function(trip, index) {
                    return (<TripCard trip={trip} key={index}/>)
                }) : null}

                {this.state.showMode === 'bookedTrips' ? this.state.bookedTrips.map(function(trip, index) {
                    return (<TripCard trip={trip} key={index}/>)
                }) : null}

                {this.state.showMode === 'profile' ? <Profile handleUserChange={(user)=>{this.handleUserChange(user)}} user={this.state.user}/> : null}
            </div>
        )
    }
}
