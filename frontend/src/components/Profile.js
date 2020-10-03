import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Profile.css'
// import { Link } from "react-router-dom";
import Axios from 'axios';
import ProfileEdit from './ProfileEdit';

export default class Profile extends Component {

    state = {
        user: this.props.user,
        error: null,
        editForm: false
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            user: Object.assign(this.state.user, { [name]: value })
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const id = this.props.match.params.id;
        Axios.put(`/api/profile/${id}`, {
            name: this.state.user.name,
            email: this.state.user.email
        })
            .then(response => {
                console.log('meep', response.data)
                this.setState({
                    user: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    toggleEditForm = () => {
        this.setState(state => ({
            editForm: !state.editForm
        }))
    }



    render() {
        if (this.state.error) return <div>{this.state.error}</div>
        if (!this.state.user) return <p>Loading ...</p>

        return (

            <div className="profile-page">
                <h3>Your profile</h3>

                { this.state.editForm
                    ? <ProfileEdit
                        {...this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                    : <div className='table-responsive'>
                        <table className="table" width='300'>
                            <tbody>
                                <tr>
                                    <th scope='col'>Profile Picture</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <td>{this.state.user.name}</td>
                                </tr>
                                <tr>
                                    <th scope='col'>Email</th>
                                    <td>{this.state.user.email}</td>
                                </tr>
                                <tr>
                                    <th scope='col'>Password</th>
                                    <td>********</td>
                                </tr>
                                <tr>
                                    <th scope='col'>Birthdate</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope='col'>Phone</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope='col'>Experience</th>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <Button onClick={this.toggleEditForm}>
                            Edit Profile
                </Button>
                    </div>

                }
            </div>
        )
    }
}