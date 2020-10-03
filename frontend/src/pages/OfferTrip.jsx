import React, { Component } from "react";
import CardInfo from "./../components/CardInfo";
import { cardData } from "../helpers/cardData";
import CreateTrip from "../components/CreateTrip";
import { withRouter } from "react-router";

class OfferTrip extends Component {
  state = {
    cardData: cardData,
  };

  render() {
    console.log(this.props.user._id);
    if (this.props.user === "") {
      this.props.history.push("login");
    }
    return (
      <div>
        <CreateTrip userId={this.props.user._id} />
        <h1>How does it work?</h1>
        <div className="d-flex  justify-content-around">
          {this.state.cardData.map((e, i) => {
            return <CardInfo key={i} data={e} />;
          })}
        </div>
      </div>
    );
  }
}
export default withRouter(OfferTrip);
