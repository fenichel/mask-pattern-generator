import React from 'react';
import Image from 'react-bootstrap/Image';
import face_mask_earloop from './face_mask_earloop.jpg';
import face_mask_laces from './face_mask_laces.jpg';
import face_points_labels_2 from './face_points_labels_2.jpg';
import face_points_lines_labels2 from './face_points_lines_labels2.jpg';
import face_points_lines2 from './face_points_lines2.jpg';

import Figure from 'react-bootstrap/Figure';
import { MeasurementFigure } from './MeasurementFigure';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import { ItemDescription } from './ItemDescription';

export class MeasurementInstructions extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <ListGroup variant='flush'>
                        {/* <MeasurementFigure
                    imgSrc={face_mask_earloop}
                    caption='Our model wearing a face mask with elastic earloops.'>
                </MeasurementFigure>
                <MeasurementFigure
                    imgSrc={face_mask_laces}
                    caption='Our model wearing a face mask with laces behind the neck and over the top of the head.'>
                </MeasurementFigure> */}
                        <MeasurementFigure
                            imgSrc={face_points_labels_2}
                            caption='To size your mask you will measure the distances between a few points on your face.'>
                        </MeasurementFigure>
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
                            description='The top of your throat. The mask will hook under your chin and back to this point, to keep it snug when you are talking'>
                        </ItemDescription>
                        <ItemDescription
                            itemName='F'
                            description='The bottom of your ear, just above the end of your jawbone'>
                        </ItemDescription>
                        <MeasurementFigure
                            imgSrc={face_points_lines2}
                            caption='This image shows the lines you will measure.'>
                        </MeasurementFigure>
                        <ListGroup.Item>To make these measurements, you need a string and a ruler.</ListGroup.Item>
                        <ListGroup.Item>Start by cutting a piece of string about six inches long and tying a knot at one end.</ListGroup.Item>
                        <ListGroup.Item>To measure a single line, place the knot at the start point on your face and hold it in place with a finger.</ListGroup.Item>
                        <ListGroup.Item>Use your other hand to pull the string to the end point.</ListGroup.Item>
                        <ListGroup.Item>Mark the end point by pinching the string with your fingers.</ListGroup.Item>
                        <ListGroup.Item>Keeping the end point pinched, lay the string along the ruler to measure the length from the knot to the end point.</ListGroup.Item>
                        <MeasurementFigure
                            imgSrc={face_points_lines_labels2}
                            caption='This image shows the lines that you will measure, along with the labeled points.'>
                        </MeasurementFigure>
                        <ItemDescription
                            itemName='A to B'
                            description='The top of your ear to the bridge of your nose, following your cheekbone.'>
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
                            itemName='D to E'
                            description='The point of your chin to the front of your throat. The mask will hook under your chin back to this point, to keep it snug when you are talking.'>
                        </ItemDescription>
                        <ItemDescription
                            itemName='E to F'
                            description='The front of your throat to the bottom of your ear.'>
                        </ItemDescription>
                        <ItemDescription
                            itemName='A to F'
                            description='The top of your ear to the bottom of your ear.'>
                        </ItemDescription>
                    </ListGroup>
                </Container>
            </>)
    }
}

