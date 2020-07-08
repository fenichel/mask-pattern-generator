import React from 'react';
import { getX, getY, degreeToRadian } from './trig';

export class ArrowDef extends React.Component {
    render() {
        return (
            <>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
                    markerWidth="6" markerHeight="6"
                    orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" />
                </marker>
            </>)
    }
}
export class CutOnFold extends React.Component {
    makeCoordinates() {
        const endPointOffset = 7;
        const cornerOffset = 15;

        const alongLineX = getX(this.props.angle, endPointOffset);
        const alongLineY = getY(this.props.angle, endPointOffset);
        const endPoint1 = {
            x: this.props.nose.x - alongLineX - 1, // ?!
            y: this.props.nose.y + alongLineY
        }
        const endPoint2 = {
            x: this.props.chin.x - alongLineX,
            y: this.props.chin.y - alongLineY
        }

        const oppositeAngle = (Math.PI / 2) - this.props.angle;
        const awayX = getX(oppositeAngle, cornerOffset);
        const awayY = getY(oppositeAngle, cornerOffset)
        const corner1 = {
            x: endPoint1.x - awayX,
            y: endPoint1.y - awayY
        }

        const corner2 = {
            x: endPoint2.x - awayX,
            y: endPoint2.y - awayY,
        }
        const points = [
            endPoint1,
            corner1,
            corner2,
            endPoint2
        ];

        this.values = [];
        points.forEach(element => this.values.push(element.x, element.y));
        this.textPath = 'M ' + corner1.x + ', ' + corner1.y + ' L ' + corner2.x + ', ' + corner2.y;
    }
    render() {
        this.makeCoordinates();

        return (
            <>
                <polyline
                    points={this.values}
                    stroke='black'
                    fill='none'
                    strokeWidth='.5px'
                    markerStart='url(#arrow)'
                    markerEnd='url(#arrow)'
                ></polyline>
                <path d={this.textPath}
                    stroke='none' id='onFoldPath'></path>
                <text fontSize='4px'>
                    <textPath href='#onFoldPath' side='right' startOffset='10%'>Cut on fold</textPath>
                </text>
            </>)
    }
}

