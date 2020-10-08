import React, { Component } from "react";
import CardInfo from "../components/CardInfo";
import { cardData } from "../helpers/cardData";
import CreateTrip from "../components/CreateTrip";
import { withRouter } from "react-router";
import { CardDeck } from "react-bootstrap";
import './OfferFooter.css';

class OfferTrip extends Component {
  state = {
    cardData: cardData,
  };

  render() {
    if (this.props.user === "") {
      this.props.history.push("login");
    }
    return (
      <div>
        <CreateTrip userId={this.props.user._id}/>
        <center><hr/></center>
        <div>
          <h1 className="howThisWorks">How does it work?</h1>
        </div>
          <CardDeck>
            {this.state.cardData.map((e,i) => {
              return <CardInfo key={i} data={e} />;
            })}
          </CardDeck>
        
        </div>
      
    );
  }
}
export default withRouter(OfferTrip);
