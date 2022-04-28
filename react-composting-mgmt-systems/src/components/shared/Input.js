import { Form } from 'react-bootstrap';

const Input = (props) => {
    const  {location, input, handleChange} = props

    console.log('THIS IS THE INPUT:', input)
    console.log('THIS IS THE  OBJECT: ', location)

    return(
        <> 
        <Form.Label>{input}</Form.Label>
        <Form.Control
            placeholder={input}
            value={location[input]} 
            name={input}
            onChange={handleChange}
        />      
        </>
    )

}

export default Input;