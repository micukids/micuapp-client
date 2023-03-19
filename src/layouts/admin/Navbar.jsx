import React from 'react'
import { Link } from 'react-router-dom'
import micuKidsLogo_Horizontal from '../../assets/img/Logo_Micukids_horizontal.png';

function Navbar() {
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    
    <Link className="navbar-brand ps-3" to="/admin">
    <img
          src={micuKidsLogo_Horizontal}
          width="140"
          height="42"
          className="d-inline-block align-top"
          alt="micuKids logo"
        />
    </Link>
  
    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
   
    <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></div>
   
    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></Link>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#!">Settings</Link></li>
                <li><Link className="dropdown-item" to="#!">Activity Log</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#!">Logout</Link></li>
            </ul>
        </li>
    </ul>
</nav>
  )
}

export default Navbar