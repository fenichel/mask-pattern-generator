import React from 'react';
import fileDownload from 'svg-file-downloader';
import Button from 'react-bootstrap/Button';
import { Ruler } from './ruler';
import { VertexLabels } from './VertexLabels';
import { patternToSvg, cloneSvg } from './exportSvg';



export class MaskPattern extends React.Component {
    constructor(props) {
        super(props);
        this.setDimensions(props);

        // There is a slight rise from the top of the ear to the nose.
        this.earToNoseRise = 10;
        this.nostrilToPointRun = 20;
        //this.noseBridgeHeight = 20;
        this.showLabels = true;

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
    download() {
        fileDownload(
            cloneSvg(),
            false,
            'testfile.svg')
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
            x: props.earToNose - props.nostrilWidth / 2 - this.nostrilPointOffsetX,
            y: -this.earToNoseRise,
            label: "Edge of nostril"
        }
    }

    setBridgePoint(props) {
        const angle = this.noseBridgeHeight * 2 * Math.PI / 180;
        const x = this.noseBridgeHeight * Math.cos(angle);
        const y = this.noseBridgeHeight * Math.sin(angle);
        this.bridgePoint = {
            x: props.earToNose - x,//this.nostrilPoint.x + x,
            y: this.nostrilPoint.y - y,
            label: "Bridge of nose"
        }
    }

    setNoseTipPoint(props) {
        let x = props.earToNose// this.bridgePoint.x + props.noseLength * 1.4;
        let y = this.bridgePoint.y + props.noseLength * 1.4;
        this.nosePoint = {
            x: x,//props.earToNose,//this.earTopToNostril + this.noseLength,
            y: y - this.earToNoseRise * 1.5,
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
            x: props.earToThroat,//this.earBottomToThroat,
            y: this.chinPoint.y + this.chinToThroat,
            label: "Throat"
        }
    }

    setTabPoints(props) {
        this.tabTop = {
            x: -12,
            y: 0,
            label: "Tab top"
        }
        this.tabBottom = {
            x: -12,
            y: this.earBottom.y,
            label: "Tab bottom"
        }
    }
    setDimensions(props) {

        this.noseBridgeHeight = props.bridgeHeight;
        this.nostrilWidth = props.nostrilWidth;
        this.noseLength = props.noseLength;

        this.setEarTop(props);
        this.setEarBottom(props);
        this.setNostrilPoint(props);
        this.setBridgePoint(props);
        this.setNoseTipPoint(props);
        this.setChinPoint(props);
        this.setThroatPoint(props);

        this.setTabPoints(props)
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

    makeTabPoints(props){
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

    render() {
        const points = this.makePoints(this.props)
        const polylinePoints = this.makePolylinePoints(points);

        const tabPoints = this.makeTabPoints(this.props);
        const tabPolylinePoints = this.makePolylinePoints(tabPoints);
        return (
            <>
                <svg 
                width='250mm' 
                height='250mm' 
                viewBox='-50 -50 200 200' 
                id='maskPattern'>
                    <Ruler></Ruler>
                    <g transform='translate(0, 0)'>
                        <polyline
                            points={polylinePoints}
                            stroke='black'
                            fill='none'
                            stroke-width='.5px'
                        ></polyline>
                                                <polyline
                        points={tabPolylinePoints}
                        stroke='black'
                        fill='none'
                        stroke-width='.5px'
                    ></polyline>
                        {this.showLabels &&
                            <VertexLabels points={points}></VertexLabels>}
                    </g>
                </svg>
                <Button onClick={this.download}>Download pattern</Button>

            </>)
    }
}
