// NOTE this component will only work with a 2D array
import Table from 'react-bootstrap/Table'
import RowResponsive from './RowResponsive'

const TableResponsive = (props) => {
   const  {arrayOfObjects} = props
   console.log("ARRAY OF OBJECTS HAS BEEN PASSED AS PROPS HERE: ", arrayOfObjects)

    
    // helpful resource to map an object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#converting_an_object_to_a_map
 
        
    // seudo code
    //OBJECTIVE
    // I have an array of objects
    // I would like to display all the keys and values of each of the objects in the array (regardless of size)
    
    //THE 'HOW'
    // crate a single object called 'table' that will hold the keys and values
    // map through the objects
    // in the map create a for loop to iteterate through the keys/values

    
    // link to render multiple objects in a list: https://reactjs.org/docs/lists-and-keys.html
    // const tableTest = arrayOfObjects.map((object) =>
    //     <li>{object.street}</li>
    // );

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
            <h1> RUNNING THIS TABLE RESPONSE FOR A TESTRUN</h1>
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