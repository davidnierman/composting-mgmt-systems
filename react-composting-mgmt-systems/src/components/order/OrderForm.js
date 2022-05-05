import { Form, Container, Button, ButtonGroup } from 'react-bootstrap';


const OrderForm = (props) => {
    const { handleChange, handleSubmit, order } = props;

    return (
    <Container className="justify-content-center">
        <Form onSubmit={handleSubmit}>
        <Form.Label>Bin Model</Form.Label>
        <Form.Control
            placeholder= ' '
            value= {order.bin_model_id}
            name='bin_model_id'
            onChange={handleChange}
        />  
        <div style={{margin: '2px' }}>
            <Button type="submit">Submit</Button>
        </div>          
        </Form>
    </Container>
    );
};

export default OrderForm;



