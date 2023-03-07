import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo_Horizontal from '../../assets/img/Logo_Micukids_horizontal.png';

const Footer = () => {
  return (
    <Navbar bg="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={Logo_Horizontal}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Footer
