import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class DimensionInput extends React.Component {
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
                <Col>
                    <Form.Label>{this.props.label}</Form.Label>
                </Col>
                <Col>
                    <Form.Control
                        type="number" 
                        placeholder={this.props.label}
                        value={this.props.val} 
                        onChange={this.handleChange}
                        name={this.props.id}>
                    </Form.Control>
                </Col>
            </Form.Group>
        );
    }
}
