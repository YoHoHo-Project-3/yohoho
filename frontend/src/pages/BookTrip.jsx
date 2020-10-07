import React, { Component } from "react";
import { withRouter } from "react-router";
import CardInfo from "./../components/CardInfo";
import { cardData } from '../helpers/cardData'
import BookForm from '../components/BookForm'
import './BookTrip.css'
import { CardDeck } from "react-bootstrap";


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
      <div id='book-trip'>
        <BookForm user={this.props.user} />
        <center><hr /></center>

        <div>
          <h1 className="howThisWorks">How does it work?</h1>
        </div>

        <CardDeck>
          {this.state.cardData.map((e, i) => {
            return <CardInfo key={i} data={e} trip={e} />;
          })}
        </CardDeck>

      </div>

    );
  }
}


export default withRouter(BookTrip);
