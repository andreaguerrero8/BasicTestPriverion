import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navbars = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Crud Tiendita Express</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 p-4"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Create Poducts</Nav.Link>
            <Nav.Link href="/list">List Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
