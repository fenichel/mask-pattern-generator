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
import { CutOnFold, ArrowDef } from './CutOnFold';
import { PatternInfo } from './PatternInfo';

export class MaskPattern extends React.Component {
    constructor(props) {
        super(props);
        this.setDimensions(props);

        this.earToNoseRiseAngle = degreeToRadian(5);
        this.noseChinAngle = degreeToRadian(90);
        // The width of the tab for the strap, in mm
        this.tabWidth = 25;
        this.chinThroatAngle = degreeToRadian(10);
        this.download = this.download.bind(this);
    }
    download() {
        fileDownload(cloneSvg(), false, this.props.patternName + '.svg');
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

    roundChin() {
        const roundingDistance = 20;
        this.aboveChin = {
            x: this.chinPoint.x + getX(this.noseChinAngle, roundingDistance),
            y: this.chinPoint.y - getY(this.noseChinAngle, roundingDistance),
            label: "c"
        }
        this.belowChin = {
            x: this.chinPoint.x - getX(this.chinThroatAngle, roundingDistance),
            y: this.chinPoint.y + getY(this.chinThroatAngle, roundingDistance),
            label: "d"
        }
    }

    roundNose() {        
        const roundingDistance = 5;

        // tan(angle) = opposite over adjacent
        const opposite = this.nosePoint.y - this.bridgePoint.y;
        const adjacent = this.nosePoint.x - this.bridgePoint.x;
        const bridgeNoseAngle = Math.atan(opposite / adjacent);

        this.aboveNose = {
            x: this.nosePoint.x - getX(bridgeNoseAngle, roundingDistance),
            y: this.nosePoint.y - getY(bridgeNoseAngle, roundingDistance),
            label: "a"
        }
        this.belowNose = {
            x: this.nosePoint.x - getX(this.noseChinAngle, roundingDistance),
            y: this.nosePoint.y + getY(this.noseChinAngle, roundingDistance),
            label: "b"
        }
    }

    setChinPoint() {
        this.chinPoint = {
            x: this.nosePoint.x - getX(this.noseChinAngle, this.props.noseToChin + 12),
            y: this.nosePoint.y + getY(this.noseChinAngle, this.props.noseToChin + 12),
            label: "Point of chin"
        }
    }

    setThroatPoint() {
        // Hack to force the chin angle to 10 down and the chin to throat length to about an inch (plus 6mm seam allowance).
        const x = this.chinPoint.x - getX(this.chinThroatAngle, 31);
        const y = this.chinPoint.y + getY(this.chinThroatAngle, 31);
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

        this.roundChin();
        this.roundNose();
    }

    getOutlinePoints() {
        let points = [
            this.earTop,
            this.bridgePoint,
            this.aboveNose,
            this.belowNose,
            this.aboveChin,
            this.belowChin,
            this.throatPoint,
            this.earBottom,
            this.tabBottom,
            this.tabTop,
            this.earTop
        ];
         points = [
            this.bridgePoint,
            this.earTop,
            this.tabTop,
            this.tabBottom,
            this.earBottom,
            this.throatPoint
        ]
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
            this.aboveNose,
            this.belowNose,
            this.throatPoint,
            this.aboveChin,
            this.belowChin
        ]
    }

    getCurvePath() {
        const points = [
            this.aboveNose,
            this.nosePoint,
            //this.belowNose,
            //{x: this.nosePoint.x + 2, y: this.nosePoint.y + (this.chinPoint.y - this.nosePoint.y) / 4},
            {x: this.nosePoint.x + 10, y: this.nosePoint.y + (this.chinPoint.y - this.nosePoint.y) / 4},
            {x: this.nosePoint.x , y: this.nosePoint.y + 3 * (this.chinPoint.y - this.nosePoint.y) / 4},
            //this.aboveChin,
           // this.chinPoint,
            this.belowChin,
           // {x: this.throatPoint.x + 1, y: this.throatPoint.y + 1},
            this.throatPoint,
            this.throatPoint
        ]
        let pointStr = '';
        points.forEach(point =>  {pointStr += point.x + ' ' + point.y + ' ' });
        let path = 'm ' + 
            this.bridgePoint.x + ' ' + this.bridgePoint.y + ' Q ' + pointStr;
            console.log('path is ' + path);
            return path;

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
                            <defs><ArrowDef></ArrowDef></defs>
                            <Ruler />
                            <PatternInfo vals={this.props} />
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
                                    <path d={this.getCurvePath()}
                                    fill='none'
                                    stroke='black'
                                    strokeWidth='.5px'
                                ></path>
                                {/* <CutOnFold
                                    nose={this.nosePoint}
                                    chin={this.chinPoint}
                                    angle={this.noseChinAngle}>
                                </CutOnFold> */}
                                {this.props.showLabels &&
                                    <VertexLabels points={this.getLabelPoints()}></VertexLabels>}
                            </g>
                        </svg>
                    </Row>
                </Col>
            </>)
    }
}
