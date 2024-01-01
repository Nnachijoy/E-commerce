import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingLogo from "../../assets/ShoppingLogo.png";
import ShoppingSearchIcon from "../../assets/ShoppingSearchIcon.png";
import ShoppingHeartIcon from "../../assets/ShoppingHeartIcon.png";
import ShoppingCartIcon from "../../assets/ShoppingCartIcon.png";
function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={ShoppingLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto fw-bolder">
            <Nav.Link href="#" className='me-5'>Home</Nav.Link>
            <Nav.Link href="#" className='me-5'>Shop</Nav.Link>
            <Nav.Link href="#" className='me-5'>About</Nav.Link>
            <Nav.Link href="#" className='me-5'>Contact</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#">
            <img src={ShoppingSearchIcon} alt=""  className='me-3'/>
            </Nav.Link>
            <Nav.Link href="#">
            <img src={ShoppingHeartIcon} alt="" className='me-3'/>
            </Nav.Link>
            <Nav.Link href="#">
            <img src={ShoppingCartIcon} alt="" className='me-3'/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
