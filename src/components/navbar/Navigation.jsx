import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import swal from 'sweetalert';
import { getAxiosInstance } from '../../services/functions';
import Logo from '../logo/Logo';
import user_logo from '../../assets/img/Icon_peque.png'
import { Link } from 'react-router-dom';

const instance = getAxiosInstance();
const Navigation = () => {

const logoutSubmit = (e) => {
  e.preventDefault();

  instance.post('/api/logout').then(res=>{
    if(res.data.status){
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_name');
      swal("Genial",res.data.message,"success");
      window.location = "/";
    }else {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_name');
      swal("Genial",res.data.message,"success");
      window.location = "/";
    }
  })
}

  let LogoutButton = '';
  let NameTag = localStorage.getItem('auth_name');
  let nameContainer ='';

  if (localStorage.getItem('auth_token')){
    NameTag = NameTag.toUpperCase();
    LogoutButton = (<button className="btn nav-link navigation-text-color" onClick={logoutSubmit}>LOGOUT</button>);
    nameContainer = (<div className="d-flex flex-row gap-1 left-margin align-content-center align-items-center justify-content-center" >
          <img className='user-logo' src={user_logo} alt="icono de cartas" />
          <p className="navigation-text-color" >{NameTag}</p>
      </div>);
  }else {
    LogoutButton = (<Link className="nav-link navigation-text-color" to="/login">LOGIN</Link>);
  }

  return (
   <Navbar collapseOnSelect expand="sm" bg="dark" className='sticky-top'>
    <Container>
      <Navbar.Brand href="/">
       <Logo/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
         <Nav className='d-flex flex-row-reverse'> 
            <div className='d-flex align-items-end display-navigation'>
                <Link className="nav-link navigation-text-color" to="/">INICIO</Link>
                <Link className="nav-link navigation-text-color" data-test = "padres" to="/parapadres">PARA PADRES</Link>
                {LogoutButton}
                {nameContainer}
            </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  )
}

export default Navigation
