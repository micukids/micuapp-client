import React from 'react'
import star_2 from '../../assets/img/Star_2.png'


const MainTitle = (props) => {
  return (
    <div className={`text-title ${props.className}`}>
        <img src={star_2} alt="Estrella de color amarillo"/>
        <p>{props.text}<span>{props.text2}</span></p>
    </div>           
  )
}

export default MainTitle

MainTitle.defaultProps = {
    text: 'PALABRA1',
    text2: 'PALABRA2',
  }
