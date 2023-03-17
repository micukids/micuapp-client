import React from 'react'
import Footer from '../footer/Footer'
import Navigation from '../navbar/Navigation'


function Layout({children}) {
  return (
    <>
    <div>
        <Navigation />
        <main> {children}
    </main>
        <Footer />
    </div>
    
    </>
  )
}

export default Layout