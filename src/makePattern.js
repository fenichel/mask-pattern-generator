import React from 'react';



export class MaskPattern extends React.Component {
    constructor(props) {
        super(props);
        this.setDimensions(props);
        
        // There is a slight rise from the top of the ear to the nose.
        this.earToNoseRise = 10;
        this.nostrilToPointRun = 20;
        this.noseBridgeHeight = 20;
        this.showLabels = false;

        this.earTopToNostril = 95;
        // The mask doesn't actually go all the way to the edge of the nostril before 
        // turning up toward the bridge of the nose. It goes to about a finger width
        // from the nostril. Closing the remaining gap is done by pinching the nose bridge
        // when the wire is installed.
        this.nostrilPointOffsetX = 15;
            // ear top to nostril: 95
            // nostril to bridge: 35
        this.nostrilToBridge = 35;
        this.nostrilToTip = 30;
            // philtrum to nose tip: 22
            // nostril to nostril: 40
            // nose tip to bridge: 35
        this.earBottomToThroat = 80;
        this.chinToThroat = 20;
            // ear bottom to throat: 80
            
    }

    setEarTop(props) {
        this.earTop = {
            x: 0,
            y: 0,
            label: "Ear top"
        };
    }

    setEarBottom(props) {
        this.earBottom = {
            x: 0,
            y: props.earHeight,
            label: "Ear bottom"
        };
    }

    setNostrilPoint(props) {
        this.nostrilPoint = {
            x: this.earTopToNostril - this.nostrilPointOffsetX,
            y: -this.earToNoseRise,
            label: "Edge of nostril"
        }
    }

    setBridgePoint(props) {
        this.bridgePoint = {
            // How do I make this math meaningful?
            x: this.nostrilPoint.x + this.nostrilToBridge / 2, //props.earToNose,
            y: this.nostrilPoint.y - this.noseBridgeHeight,
            label: "Bridge of nose"
        }
    }

    setNoseTipPoint(props) {
        this.nosePoint = {
            x: this.earTopToNostril + this.nostrilToTip,
            y: -this.earToNoseRise,
            label: "Tip of nose"
        }
    }

    setChinPoint(props) {
        this.chinPoint = {
            x: props.earToChin,
            y: this.nosePoint.y + props.noseToChin,
            label: "Point of chin"
        }
    }

    setThroatPoint(props) {
        this.throatPoint = {
            x: this.earBottomToThroat,
            y: this.chinPoint.y + this.chinToThroat,
            label: "Throat"
        }
    }

    setDimensions(props) {
        this.setEarTop(props);
        this.setEarBottom(props);
        this.setNostrilPoint(props);
        this.setBridgePoint(props);
        this.setNoseTipPoint(props);
        this.setChinPoint(props);
        this.setThroatPoint(props);
    }

    makePoints(props) {
        this.setDimensions(props);
        let points = [
            this.earTop,
            this.nostrilPoint,
            this.bridgePoint,
            this.nosePoint,
            this.chinPoint,
            this.throatPoint,
            this.earBottom,
            this.earTop
        ];
        return points;
    }

    makePolylinePoints(points) {

        let values = [];
        points.forEach(element => values.push(element.x, element.y));
        return values;
    }

    render() {
        const points = this.makePoints(this.props)
        const polylinePoints = this.makePolylinePoints(points);
        return (
            <svg width='250' height='250' >
                <g transform='translate(100, 100)'>
                    <polyline
                        points={polylinePoints}
                        stroke='red'
                        fill='none'
                    ></polyline>
                    {this.showLabels && 
                    points.slice(0, points.length - 1).map(point =>
                        <g 
                        transform='rotate(0)'
                        key={point.label}>
                            <text
                                x={point.x}
                                y={point.y}
                                >
                                {point.label}
                            </text>
                        </g>)}
                </g>
            </svg>
        )
    }
}
