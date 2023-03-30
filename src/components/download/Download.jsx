import React from 'react'
import { Link } from 'react-router-dom'

function Download({thumb, url, description}) {
  let imageLink="";
  if (localStorage.getItem('auth_token')){
    imageLink=( <Link to={url} download target="_blank"><img src={thumb} alt={description} className='downloadShape mb-4'/></Link>)
  }
  else {
    imageLink=( <Link to="/login"><img src={thumb} alt={description} className='downloadShape mb-4'/></Link>)
  }

  return (
    <div className='d-flex flex-column align-items-center' >
        {imageLink}
        <p className='color-paragraph'>{description}</p>
    </div>
  )
}

export default Download