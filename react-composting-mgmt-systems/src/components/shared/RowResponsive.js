import Table from 'react-bootstrap/Table'

const RowResponsive = (props) => {
    const  {rowsData} = props
    console.log("ROWSDATA HAS BEEN PASSED AS PROPS HERE: ", rowsData)

    // map all the rows into a table row
    const rows = rowsData.map((row) =>
            <tr>
                {Array.from({ length: row.length}).map((_, index) => (
                    <td key={index}>{row[index]}</td>
                ))}
            </tr>
    );

    console.log('ROWS: ', rows)

    return(
        <>        
            {rows}
        </>
    )

}

export default RowResponsive;