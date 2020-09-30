import React, { Component } from 'react'
import Axios from 'axios';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {text: null};
  }

  componentDidMount() {
    
  }
  

  clickHandler() {
    console.log('clicked')
    Axios.get('/api/info')
      .then( (response) => {
        this.setState({ text: response.data.message})
      })
      .catch( (err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        Hello Home
        <p>{this.state.text}</p>
        <button onClick={() => { this.clickHandler() }}>Button</button>
      </div>
    )
  }
}

