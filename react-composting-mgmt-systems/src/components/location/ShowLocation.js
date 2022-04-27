import React, { useState, useEffect } from 'react'
import { show } from '../../api/location'
import TableResponsive from '../shared/TableResponsive'
import { useParams } from 'react-router-dom';

const ShowLocation = (props) => {
    // pull the user from the props
    const {user} = props;
    // pull the id from the url
    const { id } = useParams();
    
    // create a hook for the locations variable
    const [location, setLocation] = useState(null)

    useEffect(()=> {
        // use the axios call to pull location based on ID
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
    
    // return the locations
    // link to render multiple objects in a list: https://reactjs.org/docs/lists-and-keys.html
    console.log("LOCATIONS USED FOR MAPPING: ", location.locations)
 
    return (
        <>
            <h2>Location {location.id}</h2>
            <p>{location.street}</p>
            <p>{location.city} {location.state}, {location.zip_code}</p>


        </>

        )
}


export default ShowLocation