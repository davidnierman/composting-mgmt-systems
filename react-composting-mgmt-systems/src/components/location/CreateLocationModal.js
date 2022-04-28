import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormResponsive from '../shared/FormResponsive';
import { Modal } from 'react-bootstrap';
import { create } from '../../api/location';


const CreateLocationModal = (props) => {
  const { user, show, handleClose, msgAlert } = props
  const navigate = useNavigate();
  // we'll need two states
  const [location, setLocation] = useState({
    'street': ' ',
    'city': ' ',
    'state': ' ',
    'zip_code': ' ',
    'property_type': 'RESIDENTIAL',
    'user': user.id,
    });

  const handleChange = (e) => {
    // e === event
    // to access event object’s properties after the event handler has run, you need to call e.persist():
    // documentation can be found here: https://reactjs.org/docs/legacy-event-pooling.html
    e.persist(); // we need to access events target name and value -> so persist() is called here

    setLocation((prevLocation) => {
      const key = e.target.name; // pull the key from the event to use later when changing the value
      let value = e.target.value; // pull the value from the event to insert as new value
      const updatedValue = { [key]: value }; // insert the key and value into a new var called updateValue
      return { ...prevLocation, ...updatedValue }; //'...'  are used to keep all the other values the same and only update the key/value specified
    });
  };

  const handleSubmit = (e) => {
    // e === event
    e.preventDefault(); // The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

    console.log('CREATING A CREATE REQUEST NOW!')
    create(user, location)
      // if create is successful, we should navigate to the show page
      .then((res) => {
        console.log('RES: ', res)
        navigate(`/locations/${res.data.location._id}`);
      })
      // then we send a success message
      .then(() =>
        msgAlert({
          heading: 'Location Added! Success!',
          message: "This Location has been uploaded to the Database!",
          variant: 'success',
        })
      )
      // if there is an error, we'll send an error message
      .catch(() =>
        msgAlert({
          heading: 'Oh No!',
          message: 'something went wrong, this location was not uploaded to the db',
          variant: 'danger',
        })
      );
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <FormResponsive
        objectToCreateOrEdit={location}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        heading="Add new location"
        />
      </Modal.Body>
    </Modal>
  );
};

export default CreateLocationModal;