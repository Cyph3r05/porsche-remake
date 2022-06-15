import React, { Component } from "react";
import { Panel } from 'rsuite';
import CriaCarousel from "./Components/CriaCarousel";
import MyNavbar from "./Components/MyNavbar";
import BodyContent from './Components/BodyContent';
import FindDealer from './Components/FindDealer';
import ShoppingTools from './Components/ShoppingTools';
import PorscheLive from './Components/PorscheLive';
import Discover from './Components/Discover';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <React.Fragment>
        <div className="nav-container">
          <MyNavbar />
          <CriaCarousel />
        </div>
        <div className="body-container">
          <BodyContent />
        </div>
        <div className="dealer-container">
          <FindDealer />
        </div>
        <div className="shopping-container">
          <ShoppingTools />
        </div>
        <div className="live-container">
          <PorscheLive />
        </div>
        <div className="discover-container">
          <Discover />
        </div>
        <div className="push" />
        <div className="footer">
          <Panel>© 2022 Porsche Cars North America, Inc.</Panel>
        </div>
      </React.Fragment>
  );
}
}

export default App;
