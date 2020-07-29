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
                    <ListGroup.Item>When measuring, think about where you want the mask to sit on your face.</ListGroup.Item>
                    <ItemDescription
                        itemName='A'
                        description='1/2" forward from the top of your ear'>
                    </ItemDescription>
                    <ItemDescription
                        itemName='B'
                        description='The bridge of your nose, where you want the mask to sit'>
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
                        description='1/2" forward from the bottom of your ear'>
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
                        description='Point A (see above) to the bridge of your nose, following your cheekbone. For the bridge of the nose, use the point where you want the top of the mask to sit on your nose.'>
                    </ItemDescription>
                    <ItemDescription
                        itemName='A to C'
                        description='Point A (see above) to the point of your nose.'>
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
                        description='The top of your ear to the bottom of your ear, measured about 1/2" in front your ear or where you want the edge of the mask to be.'>
                    </ItemDescription>
                </ListGroup>
            </>
        );
    }
}

