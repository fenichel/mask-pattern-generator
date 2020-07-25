import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import { DimensionInput } from './DimensionInput';
import { MaskPattern } from './makePattern';
import face_points_lines_labels from './face-points-lines-labels.jpg';
import Image from 'react-bootstrap/Image';
import { NameInput } from './NameInput';
import { SelectorInput } from "./SelectorInput";

const DEFAULT_MEASURES_IN_MM = {
    noseToChin: 95,
    earHeight: 45,
    earToNose: 115,
    earToThroat: 90,
    bridgeToTip: 30,
    earToBridge: 110,
    chinToThroat: 55
};
const PLACEHOLDER_NAME = 'Your name here';

const MM_PER_IN = 25.4;

// Converts the canon measure in millimeters to the requested unit, in a conveniently rounded number.
const FromMillimetersToUserVisible = {
    "mm": mm => Math.round(mm),
    "cm": mm => Math.round(mm) / 10,  // Rounded to 0.1cm
    "in": mm => Math.round(100 * mm / MM_PER_IN) / 100  // Rounded to 0.01in
}

// Converts the measure in the requested unit to millimeters.
const ToMillimeters = {
    "mm": mm => mm,
    "cm": cm => cm * 10,
    "in": inches => inches * MM_PER_IN
}

function buildInitialState() {
    const state = {
        unit: 'mm',
        patternName: PLACEHOLDER_NAME,
        showLabels: false
    };
    Object.keys(DEFAULT_MEASURES_IN_MM).forEach((key) => {
        const mm = DEFAULT_MEASURES_IN_MM[key];
        state[key] = mm;
        state[key + 'InMM'] = mm;
    });
    return state;
}

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = buildInitialState();
        this.handleInputChange =
            this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        if (name === 'unit') {
            const unit = target.value;
            const newState = {
                'unit': unit
            };

            // Convert existing values to new unit.
            Object.keys(DEFAULT_MEASURES_IN_MM).forEach((key) => {
                newState[key] = FromMillimetersToUserVisible[unit](this.state[key + "InMM"])
            });

            this.setState(newState);
        } else if (name === 'patternName') {
            this.setState({
                'patternName': target.value
            });
        } else if (name === 'showLabels') {
            console.log('show labels: ' + target.value);
            this.setState({
                'showLabels': target.checked
            });
        } else { // measurementChanged
            const measure = parseFloat(target.value)
            const measureInMM = ToMillimeters[this.state.unit](measure)
            this.setState({
                [name]: measure,
                [name + 'InMM']: measureInMM
            })
        }
    }

    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col>
                            <Image
                                src={face_points_lines_labels}
                                width={200} />
                        </Col>
                        <Col as={Form} md={7} lg={8}>
                            <Row>
                                <Col>
                                    <NameInput
                                        id="patternName"
                                        label="Name"
                                        val={this.state.patternName}
                                        onValueChange={this.handleInputChange}>
                                    </NameInput>
                                </Col>
                                <Col>
                                    <SelectorInput
                                        id="unit"
                                        label="Units"
                                        options={[
                                            ["mm", "mm"],
                                            ["cm", "cm"],
                                            ["inches", "in"]
                                        ]}
                                        onValueChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <DimensionInput
                                        id="noseToChin"
                                        label="Nose to chin with mouth open to talk (C to D)"
                                        unit={this.state.unit}
                                        val={this.state.noseToChin}
                                        onValueChange={this.handleInputChange}
                                    />
                                    <DimensionInput
                                        id="earHeight"
                                        label="Ear height (A to E)"
                                        unit={this.state.unit}
                                        val={this.state.earHeight}
                                        onValueChange={this.handleInputChange}
                                    />
                                    <DimensionInput
                                        id="earToBridge"
                                        label="Ear top to nose bridge (A to B)"
                                        unit={this.state.unit}
                                        val={this.state.earToBridge}
                                        onValueChange={this.handleInputChange}
                                    />
                                </Col>
                                <Col>
                                    <DimensionInput
                                        id="earToNose"
                                        label="Ear top to nose tip (A to C)"
                                        unit={this.state.unit}
                                        val={this.state.earToNose}
                                        onValueChange={this.handleInputChange}
                                    />
                                    <DimensionInput
                                        id="bridgeToTip"
                                        label="Nose bridge to nose tip (B to C)"
                                        unit={this.state.unit}
                                        val={this.state.bridgeToTip}
                                        onValueChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <MaskPattern
                        patternName={this.state.patternName}
                        noseToChin={Math.ceil(this.state.noseToChinInMM)}
                        earHeight={Math.ceil(this.state.earHeightInMM)}
                        earToNose={Math.ceil(this.state.earToNoseInMM)}
                        earToThroat={Math.ceil(this.state.earToThroatInMM)}
                        bridgeToTip={Math.ceil(this.state.bridgeToTipInMM)}
                        earToBridge={Math.ceil(this.state.earToBridgeInMM)}
                        chinToThroat={Math.ceil(this.state.chinToThroatInMM)}
                        showLabels={this.state.showLabels}
                    />
                </Container>
            </>
        );
    }
}
export default MyForm;
