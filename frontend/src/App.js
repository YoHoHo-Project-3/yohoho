import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import BookTrip from "./pages/BookTrip";
import OfferTrip from "./pages/OfferTrip";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import ChatRoom from "./components/ChatRoom";
import Store from "./components/Store";


class App extends Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <>
        <Navbar setUser={this.setUser} user={this.state.user} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/signup"
            render={(props) => <Signup setUser={this.setUser} {...props} />}
          />
          <Route
            exact
            path="/login"
            render={(props) => <Login setUser={this.setUser} {...props} />}
          />
          <Route
            exact
            path="/logout"
            render={(props) => <Logout setUser={this.setUser} {...props} />}
          />
          <Route
            exact
            path="/profile/:id"
            render={(props) => <Profile user={this.state.user} {...props} />}
          />
          <Route
            exact
            path="/dashboard/"
            render={(props) => <Dashboard user={this.state.user} {...props} />}
          />

          <Route
            exact
            path="/book-trip"
            render={(props) => <BookTrip user={this.state.user} {...props} />}
          />
          <Route
            exact
            path="/offer-trip"
            render={(props) => <OfferTrip user={this.state.user} {...props} />}
          />
          <Store>
            <Route
              exact
              path="/chat"
              render={(props) => <ChatRoom user={this.state.user} {...props} />}
            />
          </Store>
        </Switch>
      </>
    );
  }
}

export default App;
