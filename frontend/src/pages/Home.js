import React, { Component } from "react";
import Navigator from "../components/Navigator";
import CardInfo from "./../components/CardInfo";
import { cardData } from '../helpers/cardData'
import { CardDeck } from "react-bootstrap";

export default class Home extends Component {
  state = {
    cardData: cardData
  };

  render() {
    return (
      <div>
        <Navigator />

        <center><hr /></center>

        <div>
          <h1 className="howThisWorks">How does it work?</h1>
        </div>


        <CardDeck>
          {this.state.cardData.map((e, i) => {
            return <CardInfo key={i} data={e} />;
          })}
        </CardDeck>

      </div>
    );
  }
}
