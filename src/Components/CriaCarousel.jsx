import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export class CriaCarousel extends Component {
  render() {
    return (
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/background/porsche-normal0.webp?text=First slide&bg=373940"
            alt="First slide" />
          <Carousel.Caption className="carousel-headline">
            <h3 className="carousel-headline">{">"} Relentess.</h3>
            <p className="carousel-seadline">The new 911 Turbo S models.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/background/porsche-normal1.webp?text=Second slide&bg=282c34"
            alt="Third slide" />

          <Carousel.Caption className="carousel-headline">
            <h3 className="carousel-headline">{">"} This changes everything.</h3>
            <p className="carousel-seadline">The Panamera 4S.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/background/porsche-normal2.webp?text=Third slide&bg=20232a"
            alt="Third slide" />

          <Carousel.Caption className="carousel-headline">
            <h3 className="carousel-headline">{">"} The Heist.</h3>
            <p className="carousel-seadline">
              See why it takes a Porsche to catch a Porsche.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/background/porsche-normal3.webp?text=Third slide&bg=20232a"
            alt="Third slide" />

          <Carousel.Caption className="carousel-headline">
            <h3 className="carousel-headline">{">"} Shaped by Performance.</h3>
            <p className="carousel-seadline">The new Cayenne Coupe.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/background/porsche-normal4.webp?text=Third slide&bg=20232a"
            alt="Third slide" />
          <Carousel.Caption className="carousel-headline">
            <h3 className="carousel-headline">{">"} Soul, electrified.</h3>
            <p className="carousel-seadline">The new Taycan.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CriaCarousel;
