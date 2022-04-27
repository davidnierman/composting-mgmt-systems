// NOTE this component will only work with a 2D array
import Table from 'react-bootstrap/Table'
import RowResponsive from './RowResponsive'

const TableResponsive = (props) => {
   const  {arrayOfObjects} = props
   console.log("ARRAY OF OBJECTS HAS BEEN PASSED AS PROPS HERE: ", arrayOfObjects)

    // get the length of columns by pulling an objects keys
    const columnHeaders = Object.keys(arrayOfObjects[0])

    // create an array of arrays to pass to rowResponsive component
    let rowsData = []
    arrayOfObjects.forEach(object => {
        rowsData.push(Object.values(object)) 
    });
    console.log("ROWSDATA: ", rowsData)

    // return the newly created table
    return (
        <>  
            <Table responsive>
                <thead>
                    <tr>
                    {Array.from({ length: columnHeaders.length}).map((_, index) => (
                        <th key={index}>{columnHeaders[index]}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    <RowResponsive rowsData={rowsData} />
                </tbody>
            </Table>
        </>
        )
}
export default TableResponsive;