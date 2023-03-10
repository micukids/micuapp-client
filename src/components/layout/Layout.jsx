import React from 'react'
import Footer from '../footer/Footer'
<<<<<<< HEAD
import Navigation from '../navbar/Navigation'

=======
import NavBar from '../navbar/Navbar'
>>>>>>> 2cc3879827de8e0d237cd31b308f97c755c619d3

function Layout({children}) {
  return (
    <>
    <div>
        <Navigation/>
        <main> {children}
    </main>
        <Footer />
    </div>
    
    </>
  )
}

export default Layout