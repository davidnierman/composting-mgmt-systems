import React, { useState, useEffect } from 'react'
import { index } from '../../api/location'
import TableResponsive from '../shared/TableResponsive'

const LocationIndex = (props) => {
    // pull the user from the props
    const {user} = props
    
    // create a hook for the locations variable
    const [locations, setLocations] = useState(null)

    useEffect(()=> {
        // use the axios call to pull index info of all locations
        index(user)
        .then((res)=> {
            console.log("RESPONSE: ", res.data.locations)
            setLocations(res.data.locations)
        })

        .catch((error) => {
            console.log("ERROR: ", error)
        })
    },[])

    if (!locations) {
        return <p>loading...</p>
    } else if (locations.length === 0) {
        return <p>No locations yet, go add some</p>
    }
    
    // return the locations
    // link to render multiple objects in a list: https://reactjs.org/docs/lists-and-keys.html
    console.log("LOCATIONS USED FOR MAPPING: ", locations.locations)
    const locationItems = locations.map((location) =>
        <li>{location.street}</li>
);
    
    return (
        <>
            <h1>LOCATION Items</h1>
            <ul>{locationItems}</ul>
            <TableResponsive
                arrayOfObjects={locations}
            />
        </>

        )
}


export default LocationIndex