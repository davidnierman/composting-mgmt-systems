import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { createOrder } from '../../api/order';
import { useParams } from 'react-router-dom';
import OrderForm from './OrderForm';


const OrderModal = (props) => {
    const { user, showModal, handleClose, msgAlert, triggerRefresh, setModalOpen} = props

    // pull the id from the url
    const { id } = useParams();

    //create an order filled in with info supplied by the location page and computer date
    const preFilledOrder = {
        "order_date": "2019-12-04", // change this date later based on today's date
        "fulfilled_date": "2019-12-04", // change the backend to make this optional
        "status": "PROCESSING", // this will be default value for all new orders
        "location_id": id, // taken from params (this is a modal so url remains the same)
        "bin_model_id": 1   // this should change based on the user input  ==> change in the future to display values of bin models
    }

    // state of location is needed to fill in with original values and to edit and submit new values
    const [order, setOrder] = useState(preFilledOrder)
    
    const handleChange = (e) => {
        // e === event
        // to access event object’s properties after the event handler has run, you need to call e.persist():
        // documentation can be found here: https://reactjs.org/docs/legacy-event-pooling.html
        e.persist(); // we need to access events target name and value -> so persist() is called here

        setOrder((prevOrder) => {
        console.log('SET ORDER IS BEING CALLED, ', prevOrder)
        const key = e.target.name; // pull the key from the event to use later when changing the value
        let value = e.target.value; // pull the value from the event to insert as new value
        const updatedValue = { [key]: value }; // insert the key and value into a new var called updateValue
        return { ...prevOrder, ...updatedValue }; //'...'  are used to keep all the other values the same and only update the key/value specified
        });
  };

  // function to submit the order and send it to the API / Back-end
  const handleSubmit = (e) => {
    // e === event
    e.preventDefault(); // The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

    createOrder(user, order)
      // if edit is successful, we should navigate to the show page
      .then((res) => {
        console.log('RES: ', res)
      })
      .then(() =>
        setModalOpen())
      // then we send a success message
      .then(() =>
        msgAlert({
          heading: 'Success!',
          message: "Order Submitted ",
          variant: 'success',
        })
      )
      // if there is an error, we'll send an error message
      .catch(() => {
        msgAlert({
          heading: 'Oh No!',
          message: 'something went wrong, this location could not be updated',
          variant: 'danger',
        })
      })
    }


  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <h3>Order Form</h3>
      </Modal.Header>
      <Modal.Body>
        <OrderForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        order={order}
        />
      </Modal.Body>
    </Modal>
  )
};

export default OrderModal;