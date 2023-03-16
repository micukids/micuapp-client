import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { getAxiosInstance } from '../../services/functions';
import Logo from '../logo/Logo';

const instance = getAxiosInstance();
const Navigation = () => {
const navigate = useNavigate();

instance.interceptors.request.use(function(config){
  const token =localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
})

const logoutSubmit = (e) => {
  e.preventDefault();

  instance.post('/api/logout').then(res=>{
    if(res.data.status){
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_name');
      swal("Success",res.data.message,"success");
      navigate('/');
    }
  })
}

  let LogoutButton = '';
  if (localStorage.getItem('auth_token')){
    LogoutButton = (<button className="btn  nav-link" onClick={logoutSubmit}>LOGOUT</button>)
  }else {
    LogoutButton = (<Nav.Link href="/login">LOGIN</Nav.Link>);
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
         <Nav className='d-flex align-items-end'> 

            <Nav.Link href="/">INICIO</Nav.Link>
            <Nav.Link href="/parents">PARA PADRES</Nav.Link>
            {LogoutButton}
          
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  )
}

export default Navigation
