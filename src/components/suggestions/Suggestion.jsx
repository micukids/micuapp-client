import React from 'react'
import Card from 'react-bootstrap/Card';

function Suggestion({title, image, description}) {
  return (
    <div>
    <Card style={{ width: '18rem' }} className='p-0 overflow-hidden h-100 shadow rounded'>
      <Card.Img variant="top" src={image} className='custom-card-img' />
      <Card.Body className='bg-card-body d-flex flex-column align-items-start'>
        <Card.Title className='custom-card-title'>{title}</Card.Title>
        <Card.Text className='card-text-alignment'>
          {description}
        </Card.Text>
        {/* <Card.Link href="#">Más Información</Card.Link> */}
      </Card.Body>
    </Card>

    </div>
  )
}

export default Suggestion