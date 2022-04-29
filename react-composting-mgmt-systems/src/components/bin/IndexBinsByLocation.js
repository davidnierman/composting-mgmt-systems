import { indexBinByLocation } from "../../api/bin"
import React, { useState, useEffect } from 'react'
import TableResponsive from "../shared/TableResponsive"


const IndexBinByLocation = (props) => {

    // destructure the user and locationId from the show page to use for api request
    const {user, locationId} = props

    // set a hook for the bins that will be returned after the api call
    const [bins, setBins] = useState(null)

    // add use effect to run when page first loads ()
    useEffect(()=> {
        // api call to pull bins based on location
        indexBinByLocation(user, locationId)
        .then((res)=> {
            console.log("RESPONSE: ", res.data.location)
            setBins(res.data.bins)
        })
        .catch((error) => {
            console.log("ERROR FETCHING BINS BY LOCATIONS: ", error)
        })
    },[])

    // add some logic to return something instead of an error
    // while waiting for the bins to be returned or if there are no bins to return
    if(!bins){
        return <p>loading bins...</p>
    } else if (bins.length === 0){
        return <p>this location does not have any bins</p>
    }

    return(

        <TableResponsive
            arrayOfObjects={bins}
        />

    )



}

export default IndexBinByLocation