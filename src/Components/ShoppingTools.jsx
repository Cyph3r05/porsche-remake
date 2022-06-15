import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup } from "react-bootstrap";

class ShoppingTools extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Shopping Tools</h1>

        <CardGroup className="tools-group">
        <Row xs={1} s={2} md={4} className="g-4">
        <Card className="tools-style">
            <Card.Img className="tools-img" src="./images/porsche-small_718.webp" />
            <Card.Body className="tools-body">
            <Card.Text className="tools-compare">Compare</Card.Text>
            </Card.Body>
        </Card>
        <Card className="tools-style">
            <Card.Img  className="tools-img" src="./images/porsche-small_911.webp" />
            <Card.Body className="tools-body">
            <Card.Text className="tools-build-porsche">Build your Porsche</Card.Text>
            </Card.Body>
          </Card>

          <Card className="tools-style">
            <Card.Img src="./images/porsche-small_taycan.webp" />
            <Card.Body className="tools-body">
            <Card.Text className="tools-offers">Current Offers</Card.Text>
            </Card.Body>
          </Card>

          <Card className="tools-style">
            <Card.Img src="./images/porsche-small_panamera.webp" />
            <Card.Body id="tools-body">
            <Card.Text className="tools-financial">Financial Services</Card.Text>
            </Card.Body>
          </Card>
          </Row>
        </CardGroup>

      </React.Fragment>
    );
  }
}

export default ShoppingTools;