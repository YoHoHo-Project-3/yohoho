import React, { Component } from 'react'
import { signup } from '../services/auth';
import { Form, Button, Alert } from 'react-bootstrap';
import './Signup.css'

export default class Signup extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        message: ''
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { name, email, password } = this.state;
        signup(name, email, password)
            .then(data => {
                if (data.message) {
                    this.setState({
                        message: data.message,
                        password: ''
                    })
                } else {
                    // now we need to put the user in the user key of the state of App.js
                    this.props.setUser(data);
                    // redirect to /projects

                    this.props.history.push('/profile/' + data._id);

                }

            })
    }

    render() {
        return (
            <div className="signup-background">
                <br />
                <br />
                <div className="container">
                    <div className="row justify-content-center">
                        <h2 className="h2-signup">Signup</h2>
                    </div>
                    <br />
                    <div className="row justify-content-center">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="row">
                                <Form.Label className="signup-form" htmlFor="name">Name: </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='name'
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    id='name'
                                />
                            </Form.Group>
                            <Form.Group className="row">
                                <Form.Label className="signup-form" htmlFor="email">Email: </Form.Label>
                                <Form.Control
                                    type='email'
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    id='input-email'
                                />
                            </Form.Group>
                            <Form.Group className="row">
                                <Form.Label className="signup-form" htmlFor="password">Password: </Form.Label>
                                <Form.Control
                                    type='password'
                                    name='password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    id='password'
                                />
                            </Form.Group>
                            {this.state.message && (
                                <Alert variant='danger'>{this.state.message}</Alert>
                            )}
                            <div className="button-location">
                                <Button variant="danger" className="signupBtn" type='submit'>Signup</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}