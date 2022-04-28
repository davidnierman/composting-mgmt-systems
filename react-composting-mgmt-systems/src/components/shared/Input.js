import { Form } from 'react-bootstrap';

const Input = (props) => {
    const  {objectToCreateOrEdit, input, handleChange} = props

    console.log('THIS IS THE INPUT:', input)
    console.log('THIS IS THE  OBJECT: ', objectToCreateOrEdit)

    return(
        <> 
        <Form.Label>{input}</Form.Label>
        <Form.Control
            placeholder={input}
            value= {objectToCreateOrEdit[input]} // THIS IS THE LINE THAT PUTS THE INPUT "KEY" AND NOT THE VALUE
            name={input}
            onChange={handleChange}
        />      
        </>
    )

}
export default Input;