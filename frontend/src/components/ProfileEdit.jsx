import React, { Component } from 'react'
import {Form} from 'react-bootstrap'
import './ProfileEdit.css'


export default class ProfileEdit extends Component {
    render() {
        return (
            <div className='profile-edit-page'>
                <h3>Edit your Profile</h3>
                <Form onSubmit={this.props.handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor='picture'>Picture</Form.Label>
                        <Form.Control
                            type='text'
                            name='picture'
                            id='picture'
                            value={this.props.user.picture}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='name'>Name</Form.Label>
                        <Form.Control
                            type='text'
                            name='name'
                            id='name'
                            value={this.props.user.name}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='lastName'>Lastname</Form.Label>
                        <Form.Control
                            type='text'
                            name='lastName'
                            id='lastName'
                            value={this.props.user.lastName}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='email'>Email</Form.Label>
                        <Form.Control
                            type='text'
                            name='email'
                            id='email'
                            value={this.props.user.email}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='telephone'>Phone</Form.Label>
                        <Form.Control
                            type='number'
                            name='telephone'
                            id='telephone'
                            value={this.props.user.telephone}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='birthdate'>Birthdate</Form.Label>
                        <Form.Control
                            type='date'
                            name='birthdate'
                            id='birthdate'
                            value={this.props.user.birthdate}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='experience'>Experience</Form.Label>
                        <Form.Control
                            type='text'
                            name='experience'
                            id='experience'
                            value={this.props.user.experience}
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                    <button className='btn btn-danger' onClick={this.toggleEditForm}>
                        Save
                        </button>
                </Form>
            </div>
        )
    }
}
