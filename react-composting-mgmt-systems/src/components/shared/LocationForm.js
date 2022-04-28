// import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import Input from './Input';

const LocationForm = (props) => {
    const { location, handleChange, handleSubmit, heading } = props;

    console.log('LOCATION KEYs: ', Object.keys(location))
    // create an array of keys that will be iterated over and pushed into the form's elements
    const objectKeys = Object.keys(location)

    const inputs = objectKeys.map((input) =>
    <>
        <Input location={location} input={input} handleChange={handleChange} />
    </>      
    );

  return (
    <Container className="justify-content-center">
      <h3>{heading}</h3>
      <Form onSubmit={handleSubmit}>
            {inputs}
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default LocationForm;