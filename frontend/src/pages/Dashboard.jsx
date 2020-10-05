import React, { Component } from "react";
import TripCard from '../components/TripCard'
import DashboardMenu from "../components/DashboardMenu";
import Axios from "axios";

export default class Dashboard extends Component {
    constructor(props){
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
            <div>
                <DashboardMenu user={this.props.user}/>
                {this.state.trips.map(function(trip, index) {
                    return (<TripCard trip={trip} key={index}/>)
                })}
            </div>
        )
    }
}
