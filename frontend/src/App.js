import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/Home";
 
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from "./components/Profile";

import Navbar from './components/Navbar'

class App extends Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    });
  }

  render() {
    return (
      <BrowserRouter>
      <Navbar/> 
        <Switch>
          <Route exact path="/" component={Home} />
         
        </Switch>
        <Route
          exact
          path='/signup'
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path='/login'
          render={props => <Login setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path='/profile'
          render={props => <Profile user={this.state.user} />}
        />
      </BrowserRouter>
    );
  }
}

export default App;
