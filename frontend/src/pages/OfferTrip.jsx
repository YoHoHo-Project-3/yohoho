import React, { Component } from 'react'
import CardInfo from "./../components/CardInfo";
import {cardData} from '../helpers/cardData'
import CreateTrip from '../components/CreateTrip'
export default class OfferTrip extends Component {
    state = {
        cardData: cardData
      };
    
    render() {
        return (
            <div>
              <CreateTrip/>
                 <h1>How does it work?</h1>
        <div className="d-flex  justify-content-around" >        

          {this.state.cardData.map((e) => {
            return <CardInfo data={e} />;
          })}
        </div>
            </div>
        )
    }
}
