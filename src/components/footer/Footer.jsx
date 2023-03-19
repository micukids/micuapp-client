import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import micuKidsLogo_Horizontal from '../../assets/img/Logo_Micukids_horizontal.png';
import './Footer.css';
 
const Footer = () => {
  return (
    <Navbar bg="dark" >
    <Container className='items-order'>
      <Navbar.Brand href="#">
        <img
          src={micuKidsLogo_Horizontal}
          width="140"
          height="42"
          className="d-inline-block align-top"
          alt="micuKids logo"
        />
      </Navbar.Brand>
      <Nav>
            <Nav.Link href="/creditos">
              CRÉDITOS
            </Nav.Link>
            <Nav.Link href="/contacto">
              CONTACTO
            </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Footer
