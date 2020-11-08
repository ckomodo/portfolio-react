import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function Contact() {
    return (
        <div>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" /> 
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Message</Form.Label>
    <textarea placeholder="Write message here"></textarea>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}
