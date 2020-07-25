import React from 'react';
import face_points_lines_labels from './face-points-lines-labels.jpg';

import { MeasurementFigure } from './MeasurementFigure';
import ListGroup from 'react-bootstrap/ListGroup';
import { ItemDescription } from './ItemDescription';

export class MeasurementInstructions extends React.Component {
    render() {
        return (
            <>
                <ListGroup variant='flush'>
                    <ListGroup.Item>To size your mask you will measure the distances between a few points on your face.</ListGroup.Item>
                    <ItemDescription
                        itemName='A'
                        description='The top of your ear'>
                    </ItemDescription>
                    <ItemDescription
                        itemName='B'
                        description='The bridge of your nose'>
                    </ItemDescription>
                    <ItemDescription
                        itemName='C'
                        description='The tip of your nose'>
                    </ItemDescription>
                    <ItemDescription
                        itemName='D'
                        description='The point of your chin'>
                    </ItemDescription>
                    <ItemDescription
                        itemName='E'
                        description='The bottom of your ear, just above the end of your jawbone'>
                    </ItemDescription>
                    <MeasurementFigure
                        imgSrc={face_points_lines_labels}
                        caption='The points and lines you will measure.'>
                    </MeasurementFigure>
                    <ListGroup.Item>To make these measurements, you need a string and a ruler.</ListGroup.Item>
                    <ListGroup.Item>Start by cutting a piece of string about six inches long and tying a knot at one end.</ListGroup.Item>
                    <ListGroup.Item>To measure a single line, place the knot at the start point on your face and hold it in place with a finger.</ListGroup.Item>
                    <ListGroup.Item>Use your other hand to pull the string to the end point.</ListGroup.Item>
                    <ListGroup.Item>Mark the end point by pinching the string with your fingers.</ListGroup.Item>
                    <ListGroup.Item>Keeping the end point pinched, lay the string along the ruler to measure the length from the knot to the end point.</ListGroup.Item>
                    <ItemDescription
                        itemName='A to B'
                        description='The top of your ear to the bridge of your nose, following your cheekbone. For the bridge of the nose, use the point where you want the top of the mask to sit on your nose.'>
                    </ItemDescription>
                    <ItemDescription
                        itemName='A to C'
                        description='The top of your ear to the point of your nose.'>
                    </ItemDescription>
                    <ItemDescription
                        itemName='B to C'
                        description='The bridge of your nose to the point of your nose.'>
                    </ItemDescription>
                    <ItemDescription
                        itemName='C to D'
                        description='The point of your nose to the tip of your chin. Measure this with your mouth open, as though you were talking.'>
                    </ItemDescription>
                    <ItemDescription
                        itemName='A to E'
                        description='The top of your ear to the bottom of your ear, measured directly in front your ear.'>
                    </ItemDescription>
                </ListGroup>
            </>
        );
    }
}

