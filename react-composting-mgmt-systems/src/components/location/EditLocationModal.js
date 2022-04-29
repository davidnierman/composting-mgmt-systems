import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormResponsive from '../shared/FormResponsive';
import { Modal } from 'react-bootstrap';
import { edit, show } from '../../api/location';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


const EditLocationModal = (props) => {
    const { user, showModal, handleClose, msgAlert, triggerRefresh, setModalOpen} = props
    const navigate = useNavigate();

    // state of location is needed to fill in with original values and to edit and submit new values
    const [location, setLocation] = useState(null)

    // pull the id from the url
    const { id } = useParams();
    
    // run an api call to get the original values of the location that will be changed
    useEffect(()=> {
        // call the api to get original values of the location
        show(user, id)
        .then((res)=> {
            console.log("RESPONSE: ", res.data.location)
            setLocation(res.data.location)
        })
        .catch((error) => {
            console.log("ERROR: ", error)
        })
},[])

    if (!location) {
        return <p>loading...</p>
    } else if (location.length === 0) {
        return <p>No location here</p>
    }

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

    console.log('CREATING AN EDIT REQUEST NOW!')
    edit(user, location, id)
      // if edit is successful, we should navigate to the show page
      .then((res) => {
        console.log('RES: ', res)
  
      })
      // then we send a success message
      .then(() =>
        msgAlert({
          heading: 'Location Edited! Success!',
          message: "This Location has been updated!",
          variant: 'success',
        })
      )
      .then(() => {
        console.log('RUNNING TRIGGER REFRESH!')
        triggerRefresh() 
        setModalOpen()
      })
      // if there is an error, we'll send an error message
      .catch(() => {
        msgAlert({
          heading: 'Oh No!',
          message: 'something went wrong, this location could not be updated',
          variant: 'danger',
        })
        triggerRefresh() // THIS SHOULD NOT BE HERE, I PUT IT HERE JUST TO TEST OUT UNTIL I RESOLVE HOW TO MAKE 204 NOT CATCHEABLE/ERROR
        setModalOpen() // THIS SHOULD NOT BE HERE, I PUT IT HERE JUST TO TEST OUT UNTIL I RESOLVE HOW TO MAKE 204 NOT CATCHEABLE/ERROR
      }
      );
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
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

export default EditLocationModal;