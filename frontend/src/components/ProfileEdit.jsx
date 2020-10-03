import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'

export default class ProfileEdit extends Component {
    render() { 
        return (
            <div>
                <h2>Edit your Profile</h2>
                <Form onSubmit={this.props.handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor='username'>Username</Form.Label>
                        <Form.Control
                            type='text'
                            name='username'
                            id='title'
                            value={this.props.user.username}
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
                    <Button type='submit'>Edit</Button>
                </Form>
            </div>
        )
    }
}
