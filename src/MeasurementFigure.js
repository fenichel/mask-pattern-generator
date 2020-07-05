import React from 'react';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';

export class MeasurementFigure extends React.Component {
    render() {
        return (
            <ListGroup.Item justify='center'>
            <Figure>
                <Figure.Image
                    src={this.props.imgSrc}
                    width={500}
                    height={500}
                    fluid></Figure.Image>
                <Figure.Caption>{this.props.caption}</Figure.Caption>
            </Figure>
            </ListGroup.Item>)
    }
}

