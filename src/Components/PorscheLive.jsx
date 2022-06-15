import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup } from "react-bootstrap";

class PorscheLive extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Porsche Live</h1>

        <CardGroup className="live-group">
        <Row xs={1} s={2} md={4} className="g-4">
        <Card className="live-style">
            <Card.Img className="live-img" src="./images/porsche-small_718.webp" />
            <Card.Body className="live-body">
            <Card.Text className="live-compare">Compare</Card.Text>
            </Card.Body>
        </Card>
        <Card className="live-style">
            <Card.Img  className="live-img" src="./images/porsche-small_911.webp" />
            <Card.Body className="live-body">
            <Card.Text className="live-build-porsche">Build your Porsche</Card.Text>
            </Card.Body>
          </Card>

          <Card className="live-style">
            <Card.Img src="./images/porsche-small_taycan.webp" />
            <Card.Body className="live-body">
            <Card.Text className="live-offers">Current Offers</Card.Text>
            </Card.Body>
          </Card>

          <Card className="live-style">
            <Card.Img src="./images/porsche-small_panamera.webp" />
            <Card.Body id="live-body">
            <Card.Text className="live-financial">Financial Services</Card.Text>
            </Card.Body>
          </Card>
          </Row>
        </CardGroup>
      </React.Fragment>
    );
  }
}

export default PorscheLive;