import React from 'react'


const MainImage = (props) => {
  return (
    <div className='image-container'>
      <img  src={props.src} alt={props.alt} />
    </div>
  )
}

export default MainImage

MainImage.defaultProps = {
    src: "Img_Marta",
    alt: "Marta Gómez",
  }
