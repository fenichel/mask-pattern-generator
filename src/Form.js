import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DimensionInput } from './DimensionInput';
import { MaskPattern } from './makePattern';
import face_points_lines_labels2 from './face_points_lines_labels2.jpg';
import Image from 'react-bootstrap/Image';
import { NameInput } from './NameInput';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noseToChin: 95,
            earHeight: 45,
            earToNose: 115,
            earToThroat: 90,
            bridgeToTip: 30,
            earToBridge: 110,
            chinToThroat: 55,
            patternName: 'Your name here'
        }
        this.handleInputChange =
            this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const val = (name === 'patternName') ? target.value : parseInt(target.value);
        this.setState({
            [name]: val
        })
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
                                <NameInput
                                    id="patternName"
                                    label="Name"
                                    val={this.state.patternName}
                                    onValueChange={this.handleInputChange}>
                                </NameInput>
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
                    </Form>
                </Row>
                <Row>
                    <MaskPattern
                        noseToChin={this.state.noseToChin}
                        earHeight={this.state.earHeight}
                        earToNose={this.state.earToNose}
                        earToThroat={this.state.earToThroat}
                        bridgeToTip={this.state.bridgeToTip}
                        earToBridge={this.state.earToBridge}
                        chinToThroat={this.state.chinToThroat}
                        patternName={this.state.patternName}
                    >
                    </MaskPattern>
                </Row>
            </>
        );
    }
}
export default MyForm;
