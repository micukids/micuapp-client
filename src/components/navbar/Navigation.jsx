import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import swal from 'sweetalert';
import { getAxiosInstance } from '../../services/functions';
import Logo from '../logo/Logo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChildReaching} from '@fortawesome/free-solid-svg-icons'

const instance = getAxiosInstance();
const Navigation = () => {

const logoutSubmit = (e) => {
  e.preventDefault();

  instance.post('/api/logout').then(res=>{
    if(res.data.status){
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_name');
      swal("Success",res.data.message,"success");
      window.location = "/";
    }
  })
}

  let LogoutButton = '';
  let NameTag = localStorage.getItem('auth_name');
  let kidsIcon = '';
  let nameContainer ='';

  console.log(NameTag);
  NameTag = NameTag.toUpperCase();
  console.log(NameTag);

  if (localStorage.getItem('auth_token')){
    LogoutButton = (<button className="btn nav-link navigation-text-color" onClick={logoutSubmit}>LOGOUT</button>);
    kidsIcon = (<FontAwesomeIcon icon={faChildReaching} className="navigation-text-color p-1" />);
    NameTag = (<p className="navigation-text-color pt-2 pl-1" >{NameTag}</p>);
    nameContainer = (<div className="p-1 d-flex justify-items-center align-items-center navigation-text-color" >
      {kidsIcon}
      {NameTag}
      </div>);
  }else {
    LogoutButton = (<Nav.Link className="navigation-text-color" href="/login">LOGIN</Nav.Link>);
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
            {/* <div className='d-flex justify-content-center border border-radious-2'> */}
              {nameContainer}
            {/* </div> */}

            <div className='d-flex align-items-end'>
                <Nav.Link className="navigation-text-color" href="/">INICIO</Nav.Link>
                <Nav.Link className="navigation-text-color" href="/parents">PARA PADRES</Nav.Link>
                {LogoutButton}
            </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  )
}

export default Navigation
