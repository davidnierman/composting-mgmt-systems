import { useParams } from "react-router-dom"
import { deleteLocation } from "../../api/location";
import {Modal} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {Button, ButtonGroup} from 'react-bootstrap'


const DeleteLocationModal = (props) => {
    // Destructure props
    const {user, showModal, handleClose, msgAlert, location } = props
    console.log('THIS IS THE LOCATION OBJECT: ', location)
    // pull the location ID from the url params
    const { id } = useParams();

    // initiate navigate to use to redirect to index location page after location is deleted
    const navigate = useNavigate()

    // create a function to delete a location
    const onDelete = (e) => {
                // e === event
                // e.preventDefault(); // not 100% sure if this is needed
                console.log("CREATING DELETE REQUEST NOW FOR LOCATION: ", id)
        
                // run api call to delete the locations
                deleteLocation(user, id)
                    // if delete is successful, reroute to index
                    // then we send a success message
                    .then(() =>
                    msgAlert({
                        heading: 'Location Deleted',
                        message: "Deleted",
                        variant: 'success',
                    })
                    )
                    .then(() => {
                        console.log('redirecting to location index')
                        navigate('/locations')
                    })
                    // if there is an error, we'll send an error message
                    .catch(() => {
                    msgAlert({
                        heading: 'Oh No!',
                        message: 'something went wrong, this location could not be deleted',
                        variant: 'danger',
                    })
                    }
                    );  
                    }
    

    return (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
                <Modal.Title>Are you sure you want to delete this location?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {location.street}
              {location.city} {location.state}, {location.zip_code}
          </Modal.Body>
          <Modal.Footer>
          <ButtonGroup>
            <Button variant='danger' onClick={onDelete}>
                Delete
            </Button>
          </ButtonGroup>
          </Modal.Footer>
        </Modal>
      );
    };


export default DeleteLocationModal