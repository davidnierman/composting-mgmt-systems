// import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import Input from './Input';

const FormResponsive = (props) => {

    console.log('PROPS: ', props)
    const { objectToCreateOrEdit, handleChange, handleSubmit, heading } = props;

    console.log('objectToCreateOrEdit', objectToCreateOrEdit)
    // console.log('LOCATION KEYs: ', Object.keys(objectToCreateOrEdit))
    // create an array of keys that will be iterated over and pushed into the form's elements
    const objectKeys = Object.keys(objectToCreateOrEdit)

    const inputs = objectKeys.map((input) =>
    <>
        <Input objectToCreateOrEdit={objectToCreateOrEdit} input={input} handleChange={handleChange} />
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

export default FormResponsive;