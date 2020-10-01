import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from './components/Signup';
import Login from './components/Login';


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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
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
      </BrowserRouter>
    );
  }
}

export default App;
