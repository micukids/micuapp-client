import React from 'react'
import Card from 'react-bootstrap/Card';

function Suggestion({title, image, description}) {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Link href="#">Más Información</Card.Link>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Suggestion