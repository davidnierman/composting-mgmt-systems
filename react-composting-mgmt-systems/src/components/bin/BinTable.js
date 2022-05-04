import Table from 'react-bootstrap/Table'
import BinTableRow from './BinTableRow'

const BinTable = (props) => {
    // destructure props needed to display location data in table
    const {bins} = props

    const rows = bins.map(bin => {
        return (
            <tr>
                <BinTableRow bin={bin} />
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
                    <th>Barcode</th>
                    <th>Status</th>
                    <th>Model</th>
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

export default BinTable