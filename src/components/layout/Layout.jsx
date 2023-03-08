import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import NavBar from '../navbar/NavBar'

function Layout() {
  return (
    <div>
        <NavBar />
        <main>
            <Outlet/>
        </main>
        <Footer />
    </div>
  )
}

export default Layout