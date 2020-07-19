import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class CheckboxInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onValueChange(event);
    }
    render() {
        return (
            <Form.Group as={Row} controlId={this.props.id}>
                <Col md='5'>
                    <Form.Label
                        className='labelText' size='sm'>{this.props.label}
                    </Form.Label>
                </Col>
                <Col md='6'>
                    <Form.Check
                        value={this.props.val}
                        onChange={this.handleChange}
                        name={this.props.id}
                        className='checkbox'
                    ></Form.Check>
                </Col>
            </Form.Group>
        );
    }
}
