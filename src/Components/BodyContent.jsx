import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup } from "react-bootstrap";

class BodyContent extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Models</h1>
        <CardGroup className="card-group">
        <Row xs={1} s={2} md={3} className="g-3">
        <Card className="card-style">
            <Card.Img className="card-img" src="./images/porsche-small_718.webp" />
            <Card.Body className="card-body">
            <Button className="build-button" variant="light">
              Build Your Porsche
            </Button>
            <Button className="all-models" variant="outline-primary">
              {">"}All Models
            </Button>
            <Card.Text className="car-name">718</Card.Text>
            <Card.Text className="car-price">From $57,500.00*</Card.Text>
            </Card.Body>
        </Card>
        <Card className="card-style">
            <Card.Img  className="card-img" src="./images/porsche-small_911.webp" />
            <Card.Body className="card-body">
            <Button className="build-button" variant="light">
              Build Your Porsche
            </Button>
            <Button className="all-models" variant="outline-primary">
              {">"}All Models
            </Button>
            <Card.Text className="car-name">911</Card.Text>
            <Card.Text className="car-price">From $97,400.00*</Card.Text>
            </Card.Body>
          </Card>

          <Card className="card-style">
            <Card.Img src="./images/porsche-small_taycan.webp" />
            <Card.Body className="card-body">
            <Button className="build-button" variant="light">
              Build Your Porsche
            </Button>
            <Button className="all-models" variant="outline-primary">
              {">"}All Models
            </Button>
            <Card.Text className="car-name">Taycan</Card.Text>
            <Card.Text className="car-price">From $103,800.00*</Card.Text>
            </Card.Body>
          </Card>

          <Card className="card-style">
            <Card.Img src="./images/porsche-small_panamera.webp" />
            <Card.Body id="card-body">
            <Button className="build-button" variant="light">
              Build Your Porsche
            </Button>
            <Button className="all-models" variant="outline-primary">
              {">"}All Models
            </Button>
            <Card.Text className="car-name">Panamera</Card.Text>
            <Card.Text className="car-price">From $87,200.00*</Card.Text>
            </Card.Body>
          </Card>

          <Card className="card-style">
            <Card.Img src="/images/porsche-small_macan.webp" />
            <Card.Body className="card-body">
            <Button className="build-button" variant="light">
              Build Your Porsche
            </Button>
            <Button className="all-models" variant="outline-primary">
              {">"}All Models
            </Button>
            <Card.Text className="car-name">Macan</Card.Text>
            <Card.Text className="car-price">From $50,900.00*</Card.Text>
            </Card.Body>
          </Card>

          <Card className="card-style">
            <Card.Img src="/images/porsche-small_cayenne.webp" />
            <Card.Body className="card-body">
            <Button className="build-button" variant="light">
              Build Your Porsche
            </Button>
            <Button className="all-models" variant="outline-primary">
              {">"}All Models
            </Button>
            <Card.Text className="car-name">Cayenne</Card.Text>
            <Card.Text className="car-price">From $66,800.00*</Card.Text>
            </Card.Body>
          </Card>
          </Row>
        </CardGroup>
        
      </React.Fragment>
    );
  }
}

export default BodyContent;