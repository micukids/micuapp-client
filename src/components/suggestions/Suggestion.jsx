import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Suggestion({title, image, description, url}) {
  return (
    <Link to={url} target='_blank'>
    <Card className='p-0 overflow-hidden h-100 shadow rounded' id='cardShape'>
      <Card.Img variant="top" src={image} className='custom-card-img' />
      <Card.Body className='bg-card-body d-flex flex-column align-items-start'>
        <Card.Title className='custom-card-title'>{title}</Card.Title>
        <Card.Text className='card-text-alignment'>
          {description}
        </Card.Text>
        {/* <Card.Link href="#">Más Información</Card.Link> */}
      </Card.Body>
    </Card>
    </Link>
  )
}

export default Suggestion