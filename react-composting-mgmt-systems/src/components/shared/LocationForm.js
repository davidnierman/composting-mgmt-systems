// import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

const LocationForm = (props) => {
  const { location, handleChange, handleSubmit, heading } = props;

  console.log('LOCATION: ', location)

  // COME BACK TO THIS AND MAKE ALL THE FORM CONTROL ELEMENTS VARIABLES SO IT CAN ADJUST BASED ON THE MODEL/OBJECT BEING CREATED/EDITED!
  return (
    <Container className="justify-content-center">
      <h3>{heading}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Label>street</Form.Label>
        <Form.Control
          placeholder="street address"
          value={location.street}
          name="street"
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default LocationForm;