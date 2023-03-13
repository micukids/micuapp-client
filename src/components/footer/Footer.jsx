import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import micuKidsLogo_Horizontal from '../../assets/img/Logo_Micukids_horizontal.png';
import facebook_logo from '../../assets/img/🦆 icon _circle facebook_.svg';
import instagram_logo from '../../assets/img/🦆 icon _rounded instagram_.svg';
import youtube_logo from '../../assets/img/icon_Youtube.svg'
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
            <Nav.Link href="https://www.facebook.com/micukidsclub/" target="_blank">        
              <img
                src={facebook_logo}
                width="41.46"
                height="41.46"
                className="d-inline-block align-top"
                alt="facebook logo"
              />
           </Nav.Link>
              <Nav.Link href="https://www.youtube.com/@MicuKids" target="_blank">        
              <img
                src={youtube_logo}
                width="41.46"
                height="41.46"
                className="d-inline-block align-top"
                alt="youtube logo"
              />
           </Nav.Link>  
            <Nav.Link href="https://www.instagram.com/micukids/" target="_blank">        
              <img
                src={instagram_logo}
                width="41.46"
                height="41.46"
                className="d-inline-block align-top"
                alt="instagram logo"
              />
            </Nav.Link> 
          </Nav>
      <Nav>
            <Nav.Link href="/creditos">
              CRÉDITOS
            </Nav.Link>
            <Nav.Link href="/contacto">
              CONTACTO
            </Nav.Link>
            <Nav.Link href="/login">
               ACCESO ADMIN
            </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Footer
