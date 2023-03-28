import React from 'react'

function Download({letter, image}) {
  return (
    <div className='d-flex flex-column align-items-center' >
        <img src={image} alt={`imagen letra ${letter}`} className='downloadShape mb-4'/>
        <p className='color-paragraph'>{`Colorea la letra ${letter}`}</p>
    </div>
  )
}

export default Download