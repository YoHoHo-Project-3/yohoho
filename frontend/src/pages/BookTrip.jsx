import React, { Component } from "react";
import { withRouter } from "react-router";
import CardInfo from "./../components/CardInfo";
import {cardData} from '../helpers/cardData' 
import BookForm from '../components/BookForm'


class BookTrip extends Component {
    state = {
        cardData: cardData
      };
    
  render() {
    console.log(this.props);
  if (this.props.user === "") {
      this.props.history.push("login");
    }  
    return (
      <div>
        <BookForm/>
          
       <h1>How does it work?</h1>
        <div className="d-flex  justify-content-around" >        

          {this.state.cardData.map((e,i) => {
            return <CardInfo key={i} data={e} />;
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(BookTrip);
