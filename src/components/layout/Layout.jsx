import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

function Layout() {
  return (
    <div>
        <Navbar />
        <main>
            <Outlet/>
        </main>
        <Footer />
    </div>
  )
}

export default Layout