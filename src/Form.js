import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DimensionInput } from './DimensionInput';
import { MaskPattern } from './makePattern';
import face_points_lines_labels2 from './face_points_lines_labels2.jpg';
import Image from 'react-bootstrap/Image';
import { NameInput } from './NameInput';
import { UnitSelector } from "./UnitSelector";

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

function buildInitialState() {
    const state = {
        unit: 'mm',
        patternName: PLACEHOLDER_NAME
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
            console.log('unit: ' + target.value);
            // TODO: Convert existing values to new unit.
            this.setState({
                'unit': target.value
            });
        } else if (name === 'patternName') {
            this.setState({
                'patternName': target.value
            });
        } else { // measurementChanged
            // TODO: Support floats, at least if unit isn't millimeters
            const measure = parseInt(target.value)
            // TODO: Convert from current unit
            const measureInMM = measure;
            this.setState({
                [name]: measure,
                [name + 'InMM']: measureInMM
            })
        }
    }

    render() {
        return (
            <>
                <Row>
                    <Form>
                        <Row>
                            <Col>
                                <Image
                                    src={face_points_lines_labels2}
                                    width={500}
                                    height={500}
                                    fluid="lg" />
                            </Col>
                            <Col>
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
                                        <UnitSelector
                                            id="unit"
                                            label="Units"
                                            val={this.state.unit}
                                            onValueChange={this.handleInputChange}></UnitSelector>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <DimensionInput
                                            id="earToBridge"
                                            label="Ear top to nose bridge (A to B)"
                                            val={this.state.earToBridge}
                                            onValueChange={this.handleInputChange}>
                                        </DimensionInput>
                                        <DimensionInput
                                            id="earToNose"
                                            label="Ear top to nose tip (A to C)"
                                            val={this.state.earToNose}
                                            onValueChange={this.handleInputChange}>
                                        </DimensionInput>
                                        <DimensionInput
                                            id="bridgeToTip"
                                            label="Nose bridge to nose tip (B to C)"
                                            val={this.state.bridgeToTip}
                                            onValueChange={this.handleInputChange}>
                                        </DimensionInput>
                                    </Col>
                                    <Col>
                                        <DimensionInput
                                            id="noseToChin"
                                            label="Nose to chin with mouth open to talk (C to D)"
                                            val={this.state.noseToChin}
                                            onValueChange={this.handleInputChange}>
                                        </DimensionInput>
                                        <DimensionInput
                                            id="chinToThroat"
                                            label="Chin to throat (D to E)"
                                            val={this.state.chinToThroat}
                                            onValueChange={this.handleInputChange}>
                                        </DimensionInput>
                                        <DimensionInput
                                            id="earToThroat"
                                            label="Throat to ear bottom (E to F)"
                                            val={this.state.earToThroat}
                                            onValueChange={this.handleInputChange}>
                                        </DimensionInput>
                                        <DimensionInput
                                            id="earHeight"
                                            label="Ear height (A to F)"
                                            val={this.state.earHeight}
                                            onValueChange={this.handleInputChange}>
                                        </DimensionInput>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Row>
                <Row>
                    <MaskPattern
                        patternName={this.state.patternName}
                        noseToChin={this.state.noseToChinInMM}
                        earHeight={this.state.earHeightInMM}
                        earToNose={this.state.earToNoseInMM}
                        earToThroat={this.state.earToThroatInMM}
                        bridgeToTip={this.state.bridgeToTipInMM}
                        earToBridge={this.state.earToBridgeInMM}
                        chinToThroat={this.state.chinToThroatInMM}
                    >
                    </MaskPattern>
                </Row>
            </>
        );
    }
}
export default MyForm;
