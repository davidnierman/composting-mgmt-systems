import { Link } from 'react-router-dom'

const TableDataResponsive = (props) => {
    const  {row} = props
    console.log("ROW HAS BEEN PASSED AS PROPS HERE: ", row)

    const linkStyle = {
        color: 'blue',
        textDecoration: 'none'
    }

    // map all row data into each table data cell
        const data = row.map((data) => {
            if (row.indexOf(data)==0){
                const showLocationsUrl = './'+data
                console.log('SHOWLOCATIONURL: ', showLocationsUrl)
                return <td>
                    <Link to={showLocationsUrl} style={linkStyle}>
                        {data}
                    </Link>
                  </td>
            }
            else{
                return <td> {data}</td>
            }
        })
    return(
        <> 
            {data}      
        </>
    )

}

export default TableDataResponsive;