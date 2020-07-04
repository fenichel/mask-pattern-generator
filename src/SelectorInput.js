

import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class SelectorInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onValueChange(event);
    }
    render() {
        return (
            <Form.Group as={Row}>
                <Col>
                    <Form.Label
                    className='labelText'>
                        {this.props.label}</Form.Label></Col>
                <Col>
                    <Form.Control
                        as="select"
                        onChange={this.handleChange}
                        name={this.props.id}
                    >  {this.props.options.map(
                        (item) => 
                        <option 
                        key={item[1]} 
                        value={item[1]}
                        >
                            {item[0]}
                            </option>
                        )}
                    </Form.Control></Col></Form.Group>
        );
    }
}    
