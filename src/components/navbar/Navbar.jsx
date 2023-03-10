import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../logo/Logo';


const NavBar = () => {
  return (
   <Navbar bg="dark">
    <Container>
      <Navbar.Brand href="#">
       <Logo/>
      </Navbar.Brand>
      <Nav>
            <Nav.Link href="#deets">REGISTER</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              LOGIN
            </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    
  )
}

export default NavBar
