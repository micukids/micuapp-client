import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Messages({name, email, subject, message, id, onDeleteMessage }) {

  return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{subject}</Card.Subtitle>
                <Card.Text>
                    {message}
                </Card.Text>
                <Button variant="danger"  onClick={() => onDeleteMessage(id)}>Eliminar mensaje</Button>
            </Card.Body>
            </Card>
    </div>
  )
}

export default Messages