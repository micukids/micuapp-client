import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Micu_cuadrado from '../../assets/img/Logo_Micu_cuadrado.png'
import '../footer/Footer.css'

const NavBar = () => {
  return (

<Navbar bg="dark">
    <Container>
      <Navbar.Brand href="#">
        <img
          src={Micu_cuadrado}
          width="140"
          height="42"
          className="d-inline-block align-top"
          alt="micuKids logo"
        />
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
