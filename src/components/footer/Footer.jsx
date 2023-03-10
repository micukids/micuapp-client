import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import micuKidsLogo_Horizontal from '../../assets/img/Logo_Micukids_horizontal.png';
import facebook_logo from '../../assets/img/🦆 icon _circle facebook_.svg';
import instagram_logo from '../../assets/img/🦆 icon _rounded instagram_.svg';
import './Footer.css'
 
const Footer = () => {
  return (
    <Navbar bg="dark" >
    <Container>
      <Navbar.Brand href="#">
        <img
          src={micuKidsLogo_Horizontal}
          width="140"
          height="42"
          className="d-inline-block align-top"
          alt="micuKids logo"
        />
      </Navbar.Brand>
      <Nav
            className="justify-content-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">        
              <img
                src={facebook_logo}
                width="41.46"
                height="41.46"
                className="d-inline-block align-top"
                alt="micuKids logo"
              />
           </Nav.Link>
            <Nav.Link href="#action1">        
              <img
                src={instagram_logo}
                width="41.46"
                height="41.46"
                className="d-inline-block align-top"
                alt="micuKids logo"
              />
           </Nav.Link>  
          </Nav>
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
