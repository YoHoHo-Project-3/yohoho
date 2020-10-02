import React, { Component } from "react";
import Navigator from "../components/Navigator";
import CardInfo from "./../components/CardInfo";
import {cardData} from '../helpers/cardData'
export default class Home extends Component {
  state = {
    cardData: cardData
  };

  render() {
    return (
      <div>
        <Navigator />

        <h1>How does it work?</h1>
        <div className="d-flex  justify-content-around" >        

          {this.state.cardData.map((e) => {
            return <CardInfo data={e} />;
          })}
        </div>
      </div>
    );
  }
}
