import Table from 'react-bootstrap/Table'
import LocationTableRow from './LocationTableRow'

const LocationTable = (props) => {
    // destructure props needed to display location data in table
    const {locations} = props

    const rows = locations.map(location => {
        return (
            <tr>
                <LocationTableRow location={location} />
            </tr>
        )
    })

    return(
        <>
            {/* create a table using boostrap */}
            <div>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Property Type</th>
                    <th>Owner</th>
                    <th>Route</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
            </div>
        </>

    ) 
}

export default LocationTable