import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup } from "react-bootstrap";

class Discover extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Discover</h1>

        <CardGroup className="discover-group">
        <Row xs={1} s={2} md={4} className="g-4">
        <Card className="discover-style">
            <Card.Img className="discover-img" src="/images/porsche-small_718.webp" />
            <Card.Body className="discover-body">
            <Card.Text className="discover">Charging Hardware.</Card.Text>
            </Card.Body>
        </Card>
        <Card className="discover-style">
            <Card.Img  className="discover-img" src="/images/porsche-small_911.webp" />
            <Card.Body className="discover-body">
            <Card.Text className="discover">No Small Dreams.</Card.Text>
            </Card.Body>
          </Card>

          <Card className="discover-style">
            <Card.Img src="/images/porsche-small_taycan.webp" />
            <Card.Body className="discover-body">
            <Card.Text className="discover">Custom-built Timepieces.</Card.Text>
            </Card.Body>
          </Card>

          <Card className="discover-style">
            <Card.Img src="/images/porsche-small_panamera.webp" />
            <Card.Body id="discover-body">
            <Card.Text className="discover">Porsche Design Online Shop</Card.Text>
            </Card.Body>
          </Card>
          </Row>
        </CardGroup>

      </React.Fragment>
    );
  }
}

export default Discover;