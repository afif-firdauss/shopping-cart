import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Promo = () => {
  return (
    <Accordion className='card mt-4'>
      <Accordion.Item>
        <Accordion.Header>Add Promo Code (Optional)</Accordion.Header>
        <Accordion.Body>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" placeholder="Enter code" />
          </Form.Group>
          <Button className="w-100 fw-bold">Apply</Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Promo;