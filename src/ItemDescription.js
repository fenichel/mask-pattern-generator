import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export class ItemDescription extends React.Component {
    render() {
        return (
            <ListGroup horizontal>
            <ListGroup.Item>{this.props.itemName}</ListGroup.Item>
            <ListGroup.Item>{this.props.description}</ListGroup.Item>
            </ListGroup>)
    }
}

