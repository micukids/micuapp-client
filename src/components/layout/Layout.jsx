import React from 'react'
import Footer from '../footer/Footer'
import NavBar from '../navbar/Navbar'

function Layout({children}) {
  return (
    <>
    <div>
        <NavBar />
        <main> {children}
    </main>
        <Footer />
    </div>
    
    </>
  )
}

export default Layout