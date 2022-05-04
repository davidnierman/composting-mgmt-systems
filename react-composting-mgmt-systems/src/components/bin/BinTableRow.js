const BinTableRow = (props) => {
    // destructure location to display data below
    const {bin} = props

    let status = ''

    if (bin.active){
         status = 'Active'
    }
    else{
         status = 'Retired'
    }

    return(
        <>
            <td>{bin.barcode}</td>
            <td>{status}</td>
            <td>{bin.model}</td>
        </>
    )   
}

export default BinTableRow