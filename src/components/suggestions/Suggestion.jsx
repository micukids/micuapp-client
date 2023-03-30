import React from 'react'
import Card from 'react-bootstrap/Card';
import external_link from '../../assets/img/External_Link.png'

function Suggestion({title, image, description, url}) {
  return (
    <Card className='p-0 overflow-hidden h-100 shadow rounded' id='cardShape'>
      <Card.Img variant="top" src={image} className='custom-card-img' />
      <Card.Body className='bg-card-body d-flex flex-column align-items-start'>
        <div className='d-flex  flex-row'>
          <Card.Title className='custom-card-title'>{title}</Card.Title>
          <Card.Link className='link-styles' href={url} target='_blank' ><img src={external_link} alt='icono del link' /></Card.Link>
        </div>
        <Card.Text className='card-text-alignment'>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
 
  )
}

export default Suggestion