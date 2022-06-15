import React, { Component } from "react";
import BingMapsReact from "bingmaps-react";

class FindDealer extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Find a Dealer</h1>
        <BingMapsReact
      bingMapsKey="AmKMxy41COBN5bbdZpnynxN7YrchyAzAi0RAs-kysl_EjP_d0yxvWd4F86dg94Ch"
      height="500px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="100%"
      viewOptions={{
        center: { latitude: 32, longitude: -97 },
        mapTypeId: "grayscale",
        disableScrollWheelZoom: true
      }}
      
    />
      </React.Fragment>
    );
  }
}

export default FindDealer;
