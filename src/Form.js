import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DimensionInput } from './DimensionInput';
import { MaskPattern } from './makePattern';

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
            chinToThroat: 55
        }
        this.handleInputChange =
            this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: parseInt(target.value)
        })
    }

    render() {
        return (
            <>
                <Row fluid="true">
                    <Form>
                        <Row>
                        <Col>
                            <DimensionInput
                                id="earHeight"
                                label="Ear height"
                                val={this.state.earHeight}
                                onValueChange={this.handleInputChange}>
                            </DimensionInput>

                            <DimensionInput
                                id="noseToChin"
                                label="Nose to chin with mouth open to talk"
                                val={this.state.noseToChin}
                                onValueChange={this.handleInputChange}>
                            </DimensionInput>

                            <DimensionInput
                                id="earToNose"
                                label="Ear top to nose tip"
                                val={this.state.earToNose}
                                onValueChange={this.handleInputChange}>
                            </DimensionInput>
                        </Col>
                        <Col>
                            <DimensionInput
                                id="earToThroat"
                                label="Ear bottom to throat"
                                val={this.state.earToThroat}
                                onValueChange={this.handleInputChange}>
                            </DimensionInput>
                            <DimensionInput
                                id="bridgeToTip"
                                label="Nose bridge to nose tip"
                                val={this.state.bridgeToTip}
                                onValueChange={this.handleInputChange}>
                            </DimensionInput>
                            <DimensionInput
                                id="earToBridge"
                                label="Ear top to nose bridge"
                                val={this.state.earToBridge}
                                onValueChange={this.handleInputChange}>
                            </DimensionInput>
                            <DimensionInput
                                id="chinToThroat"
                                label="Chin to throat"
                                val={this.state.chinToThroat}
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
                    >
                    </MaskPattern>
                </Row>
            </>
        )
    }
};
export default MyForm;
