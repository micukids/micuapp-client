import React from 'react'
import { Link } from 'react-router-dom'

function Download({thumb, url, description}) {
  return (
    <div className='d-flex flex-column align-items-center' >
        <Link to={url} download target="_blank"><img src={thumb} alt={description} className='downloadShape mb-4'/></Link>
        <p className='color-paragraph'>{description}</p>
    </div>
  )
}

export default Download