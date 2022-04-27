import TableDataResponsive from "./TableDataResponsive";

const RowResponsive = (props) => {
    const  {rowsData} = props
    console.log("ROWSDATA HAS BEEN PASSED AS PROPS HERE: ", rowsData)

    // map all the rows into a table row
    const row = rowsData.map((row) =>
        <TableDataResponsive row={row} />
    );


    return(
        <> 
            <tr>
                {row}
            </tr>      

        </>
    )

}

export default RowResponsive;