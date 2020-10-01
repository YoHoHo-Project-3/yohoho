import React, { Component } from "react";
import Navigator from "../components/Navigator";
import CardInfo from "./../components/CardInfo";

export default class Home extends Component {
  state = {
    cardData: [
      {
        icon: "icon-edit",
        title: "1. Register",
        description:
          "Yohoho is a platform for captains, skippers and passengers. You arepassenger by default, but can became skipper or even captain evertime",
      },
      {
        icon: "icon-search",
        title: "2. Find your Trip",
        description:
          "Look for a certain destination or simply go on a surprise trip. Just add the dates and sails will be set.",
      },  
      {
        icon: "icon-shopping-cart",
        title: "3. Do the transaction",
        description:
          "After you found the sailing trip of your dreams, do the transaction. Your trip is now fully booked.",
      },
      {
        icon: "icon-comments",
        title: "4. 4.Clear the details",
        description:
          "Feel free to chat with your captain any time without using your personal contacts. Make the final arrangements and onboard.",
      },
      {
        icon: "icon-star",
        title: "5. Rate your trip",
        description:
          "Share your experience with other sailors. Now is the time to rate the trip and even post your most impressive images.",
      },
    ],
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
