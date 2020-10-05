import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Profile.css'
// import { Link } from "react-router-dom";
import Axios from 'axios';
import ProfileEdit from './ProfileEdit';

export default class Profile extends Component {

    constructor(props){
        super();
        
        this.state = {
            error: null,
            editForm: false,
            user: this.fixEmptyUserFields(props.user)
        }
    }

    fixEmptyUserFields(user) {
        return {
            name: user.name || '',
            lastName: user.lastName || '',
            picture: user.picture || '',
            email: user.email || '',
            telephone: user.telephone || '',
            experience: user.experience || '',
            birthdate: user.birthdate || ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            user: Object.assign(this.state.user, { [name]: value })
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        Axios.put('/api/profile', this.state.user)
            .then(response => {
                this.setState({
                    user: this.fixEmptyUserFields(response.data)
                })
                this.toggleEditForm();
                this.props.handleUserChange(response.data);
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
        const birthdate = this.state.user.birthdate ? this.state.user.birthdate.slice(0, 10) : '';

        return (
            <div className="profile-page">
                <h3>Your profile</h3>

                { this.state.editForm
                    ? <ProfileEdit
                        user={ this.state.user }
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                    : <div className='table-responsive'>
                        <table className="table" width='300'>
                            <tbody>
                                <tr>
                                    <th scope='col'>Profile Picture</th>
                                    <td>{this.state.user.picture}</td>
                                </tr>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <td>{this.state.user.name}</td>
                                </tr>
                                <tr>
                                    <th scope='col'>Lastname:</th>
                                    <td>{this.state.user.lastName}</td>
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
                                    <td>{birthdate}</td>
                                </tr>
                                <tr>
                                    <th scope='col'>Phone</th>
                                    <td>{this.state.user.telephone}</td>
                                </tr>
                                <tr>
                                    <th scope='col'>Experience</th>
                                    <td>{this.state.user.experience}</td>
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