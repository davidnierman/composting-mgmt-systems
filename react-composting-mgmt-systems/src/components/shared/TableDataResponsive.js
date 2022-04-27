const TableDataResponsive = (props) => {
    const  {row} = props
    console.log("ROW HAS BEEN PASSED AS PROPS HERE: ", row)

    // map all row data into each table data cell
        const data = row.map((data) =>
            <td>
                {data}
            </td>
        )

    return(
        <> 
            {data}      
        </>
    )

}

export default TableDataResponsive;