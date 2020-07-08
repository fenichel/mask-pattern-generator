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
        this.noseChinAngle = degreeToRadian(85);
        // The width of the tab for the strap, in mm
        this.tabWidth = 25;
        // The offset I apply to the measured chin to throat length, in mm.
        this.chinToThroatOffset = -10;
        // Whether to show labels on the points.
        this.showLabels = true;
    }
    download() {
        fileDownload(cloneSvg(), false, 'maskPattern.svg');
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
        // Use the law of cosines on the triangle between points ABC to get the angle.
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
            x: this.nosePoint.x - getX(this.noseChinAngle, this.nosePoint.x),
            y: this.nosePoint.y + getY(this.noseChinAngle, this.props.noseToChin),
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

        const adjustedChinToThroat = this.props.chinToThroat + this.chinToThroatOffset;
        const lowerAngle = getAngleA(
            adjustedChinToThroat,
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

    getOutlinePoints() {
        let points = [
            this.earTop,
            this.bridgePoint,
            this.nosePoint,
            this.chinPoint,
            this.throatPoint,
            this.earBottom,
            this.tabBottom,
            this.tabTop,
            this.earTop
        ];
        let values = [];
        points.forEach(element => values.push(element.x, element.y));
        return values;
    }

    /**
     * Get a list of points that need labels.
     */
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

        return (
            <>
                <Col>
                    <Row>
                        <Button onClick={this.download}>Download pattern</Button>
                    </Row>
                    <Row>
                        <svg
                            width='300mm'
                            height='300mm'
                            viewBox='-50 -55 250 245'
                            id='maskPattern'>
                            <Ruler></Ruler>
                            <text
                                x='-15'
                                y='-52'
                                fontSize='4px'
                                fontFamily='sans-serif'>
                                {this.props.patternName}
                            </text>

                            <g transform='translate(0, 0)'>
                                <PatternPolyline points={this.getOutlinePoints()}>
                                </PatternPolyline>
                                <line
                                    x1={this.earTop.x}
                                    y1={this.earTop.y}
                                    x2={this.earBottom.x}
                                    y2={this.earBottom.y}
                                    strokeDasharray='4'
                                    stroke='black'
                                    strokeWidth='.5px'
                                >
                                </line>
                                {this.showLabels &&
                                    <VertexLabels points={this.getLabelPoints()}></VertexLabels>}
                            </g>
                        </svg>
                    </Row>
                </Col>
            </>)
    }
}
