import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'

const LocationTableRow = (props) => {
    // destructure location to display data below
    const {location} = props
    console.log('THIS IS THE LOCATION BEING PASSED AS A PROP: ', location)
    
    // create a url route beginning string to tag on the location id for show page
    const locationUrl = './' + location.id

    return(
        <>
            {/* create a row using boostrap */}
            <td>
                <Link to={locationUrl}>
                    {location.street}
                </Link>
            </td> 
            <td>{location.state}</td>
            <td>{location.city}</td>
            <td>{location.zip_code}</td>
            <td>{location.property_type}</td>
            <td>{location.email}</td>
            <td>{location.route}</td>
        </>

    )   
}

export default LocationTableRow