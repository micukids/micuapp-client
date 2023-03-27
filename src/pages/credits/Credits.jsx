import React from 'react'
import CreditsComponent from '../../components/credits/CreditsComponent'
import Footer from '../../components/footer/Footer'
import Navigation from '../../components/navbar/Navigation'


const Credits = () => {
  return (
    <div>
        <Navigation/>
        <CreditsComponent/>
        <Footer/>
    </div>
  )
}

export default Credits