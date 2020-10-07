import React, { Component } from 'react'
import { login } from '../services/auth';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'


export default class Login extends Component {

    state = {
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
        const { email, password } = this.state;
        login(email, password)
            .then(data => {
                if (data.message) {
                    this.setState({
                        message: data.message
                    })
                } else {
                    // now we need to put the user in the user key of the state of App.js
                    this.props.setUser(data);
                    // redirect to /projects

                    this.props.history.push('/dashboard');

                    //                   this.props.history.push(`/profile/${data._id}`);
                }

            })
    }

    render() {
        return (
            <div className="login-background">
                <br />
                <br />
                <div className="container">
                    <div className="row justify-content-center">
                        <h2 className="h2-login">Login</h2>
                    </div>
                    <br />
                    <div className="row justify-content-center">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="row">
                                <Form.Label className="login-form" htmlFor="email">Email: </Form.Label>
                                <Form.Control
                                    type='email'
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    id='input-email'
                                />
                            </Form.Group>
                            <Form.Group className="row">
                                <Form.Label className="login-form" htmlFor="password">Password: </Form.Label>
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
                                <Button className="loginBtn" type='submit'>Login</Button>
                            </div>
                            <br></br>
                            <div class="link-location">
                                <Link class="link-login" to='/signup'>If you dont have account click here </Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div >
        )
    }
}