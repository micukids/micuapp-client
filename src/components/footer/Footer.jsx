import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo_Horizontal from '../../assets/img/Logo_Micukids_horizontal.png';
import './Footer.css'
 
const Footer = () => {
  return (
    <Navbar bg="dark" >
    <Container>
      <Navbar.Brand href="#">
        <img
          src={Logo_Horizontal}
          width="150"
          height="40"
          className="d-inline-block align-top"
          alt="micuKids logo"
        />
      </Navbar.Brand>
      <Nav>
            <Nav.Link href="#deets">CRÉDITOS</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              CONTACTO
            </Nav.Link>
          </Nav>
    </Container>
  </Navbar>
  )
}

export default Footer
