import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    const username = window.localStorage.getItem('auth_name');
  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    <div className="sb-sidenav-menu">
        <div className="nav">
            <div className="sb-sidenav-menu-heading">Menu Principal</div>
            <Link className="nav-link" to="/admin/dashboard">
                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                Dashboard
            </Link>
            <Link className="nav-link" to="/admin/letters">
                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                Letras
            </Link>
            <Link className="nav-link" to="/admin/profile">
                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                Perfil
            </Link>            

        </div>
    </div>
    <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        {username}
    </div>
</nav>
  )
}

export default Sidebar