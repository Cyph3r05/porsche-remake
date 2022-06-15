import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class newNavBar extends Component {
render() {
const styles = {
width: 300,
marginBottom: 10
};
return (
<React.Fragment>
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="#home">Porsche Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#718">718</Nav.Link>
      <Nav.Link href="#car">911</Nav.Link>
      <Nav.Link href="#car">Taycan</Nav.Link>
      <Nav.Link href="#car">Panamera</Nav.Link>
      <Nav.Link href="#car">Macan</Nav.Link>
      <Nav.Link href="#car">Cayenne</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="#shop">Shop</Nav.Link>
    <Nav.Link href="#dealers">Dealers</Nav.Link>
    <Nav.Link href="#my-porsche">My Porsche</Nav.Link>
      <Nav.Link eventKey={2} href="#memes"> ...
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</React.Fragment>
);
}
}

export default newNavBar;