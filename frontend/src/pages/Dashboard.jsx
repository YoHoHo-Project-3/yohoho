import React, { Component } from "react";
import './Dashborad.css';
import TripCard from '../components/TripCard'
import DashboardMenu from "../components/DashboardMenu";
import Axios from "axios";

export default class Dashboard extends Component {
    constructor(props){
        console.log(props)
        super();
        this.state = {
            trips: []
        };
    }


    async componentDidMount() {
        try {
            const response = await Axios.get('/api/trips');
            this.setState({trips: response.data});
        } catch(err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className="dashboard">
                <DashboardMenu user={this.props.user}/>
                {this.state.trips.map(function(trip, index) {
                    return (<TripCard trip={trip} key={index}/>)
                })}
            </div>
        )
    }
}
