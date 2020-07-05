import React from 'react';
import fileDownload from 'svg-file-downloader';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Ruler } from './ruler';
import { VertexLabels } from './VertexLabels';
import { cloneSvg } from './exportSvg';
import { degreeToRadian, getX, getY, getAngleA } from './trig';
import { PatternPolyline } from './PatternPolyline';


export class MaskPattern extends React.Component {
    constructor(props) {
        super(props);
        this.setDimensions(props);

        this.earToNoseRiseAngle = degreeToRadian(5);
        this.tabWidth = 25;
        this.showLabels = true;
    }
    download() {
        fileDownload(
            cloneSvg(),
            false,
            'maskPattern.svg')
    }

    setEarTop() {
        this.earTop = {
            x: 0,
            y: 0,
            label: "Ear top"
        };
    }

    setEarBottom() {
        this.earBottom = {
            x: 0,
            y: this.props.earHeight,
            label: "Ear bottom"
        };
    }

    setBridgePoint() {
        const innerAngle = getAngleA(
            this.props.bridgeToTip,
            this.props.earToBridge,
            this.props.earToNose);
        const totalAngle = innerAngle + this.earToNoseRiseAngle;

        this.bridgePoint = {
            x: getX(totalAngle, this.props.earToBridge),
            y: -getY(totalAngle, this.props.earToBridge),
            label: "Bridge of nose"
        }
    }

    setNoseTipPoint() {
        this.nosePoint = {
            x: getX(this.earToNoseRiseAngle, this.props.earToNose),
            y: -getY(this.earToNoseRiseAngle, this.props.earToNose),
            label: "Tip of nose"
        }
    }

    setChinPoint() {
        this.chinPoint = {
            x: this.nosePoint.x,
            y: this.nosePoint.y + this.props.noseToChin,
            label: "Point of chin"
        }
    }

    setThroatPoint() {
        const earBottomToChinX = this.chinPoint.x - this.earBottom.x;
        const earBottomToChinY = this.chinPoint.y - this.earBottom.y;
        const earBottomToChinDistance =
            Math.sqrt(
                earBottomToChinX * earBottomToChinX +
                earBottomToChinY * earBottomToChinY);

        const lowerAngle = getAngleA(
            this.props.chinToThroat,
            earBottomToChinDistance,
            this.props.earToThroat);

        const upperAngle = getAngleA(
            earBottomToChinY,
            earBottomToChinX,
            earBottomToChinDistance);

        const totalAngle = upperAngle + lowerAngle;

        const x = this.earBottom.x + getX(totalAngle, this.props.earToThroat);
        const y = this.earBottom.y + getY(totalAngle, this.props.earToThroat);

        this.throatPoint = {
            x: x,
            y: y,
            label: "Throat"
        }
    }

    setTabPoints() {
        this.tabTop = {
            x: -this.tabWidth,
            y: this.earTop.y,
            label: "Tab top"
        }
        this.tabBottom = {
            x: -this.tabWidth,
            y: this.earBottom.y,
            label: "Tab bottom"
        }
    }
    setDimensions() {
        this.setEarTop();
        this.setEarBottom();
        this.setBridgePoint();
        this.setNoseTipPoint();
        this.setChinPoint();
        this.setThroatPoint();
        this.setTabPoints()
    }

    makePoints() {
        let points = [
            this.earTop,
            this.bridgePoint,
            this.nosePoint,
            this.chinPoint,
            this.throatPoint,
            this.earBottom,
            this.earTop
        ];
        return points;
    }

    makeTabPoints() {
        let points = [
            this.earTop,
            this.tabTop,
            this.tabBottom,
            this.earBottom
        ]
        return points;
    }

    makePolylinePoints(points) {
        let values = [];
        points.forEach(element => values.push(element.x, element.y));
        return values;
    }

    getLabelPoints() {
        return [
            this.earTop,
            this.tabTop,
            this.earBottom,
            this.tabBottom,
            this.bridgePoint,
            this.nosePoint,
            this.chinPoint,
            this.throatPoint
        ]
    }

    render() {
        this.setDimensions(this.props);
        const points = this.makePoints()
        const polylinePoints = this.makePolylinePoints(points);

        const tabPoints = this.makeTabPoints();
        const tabPolylinePoints = this.makePolylinePoints(tabPoints);
        return (
            <>
                <Col>
                    <Row>
                        <Button onClick={this.download}>Download pattern</Button>
                    </Row>
                    <Row>
                        <Col fluid>
                        <svg
                            width='300mm'
                            height='300mm'
                            viewBox='-50 -75 250 225'
                            id='maskPattern'>
                            <Ruler></Ruler>
                            <g transform='translate(0, 0)'>
                                <PatternPolyline points={polylinePoints}>
                                </PatternPolyline>
                                <PatternPolyline points={tabPolylinePoints}>
                                </PatternPolyline>
                                {this.showLabels &&
                                    <VertexLabels points={this.getLabelPoints()}></VertexLabels>}
                            </g>
                        </svg>
                        </Col>
                    </Row>
                </Col>
            </>)
    }
}
