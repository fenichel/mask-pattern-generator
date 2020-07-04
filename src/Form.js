import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DimensionInput } from './DimensionInput';
import { SelectorInput } from './SelectorInput';

import { MaskPattern } from './makePattern';
import FormControl from 'react-bootstrap/FormControl';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noseToChin: 95,
            earHeight: 45,
            earToChin: 110,
            earToNose: 115,//90,
            bridgeHeight: 15,
            nostrilWidth: 15,
            noseLength: 15,
            chinLength: 15, 
            earToThroat: 90,
            bridgeToTip: 30,
            earToBridge: 110,
            chinToThroat: 55
            // ear top to nostril: 95
            // nostril to bridge: 35
            // philtrum to nose tip: 22
            // nostril to nostril: 40
            // nose tip to bridge: 35
        }
        this.handleInputChange =
            this.handleInputChange.bind(this);
        // this.handleSelectorChange = this.handleSelectorChange.bind(this);
    }

    nostrilOptions = [
        ['Wide', 50],
        ['Medium', 40],
        ['Narrow', 30]
    ]

    bridgeOptions = [
        ['High', 25],
        ['Medium', 22],
        ['Low', 20]
    ]

    noseLengthOptions = [
        ['Short', 15],
        ['Medium', 20],
        ['Long', 25]
    ]
    chinLengthOptions = [
        ['Short', 15],
        ['Medium', 20],
        ['Long', 25]
    ]

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
                                    label="Nose to chin height"
                                    val={this.state.noseToChin}
                                    onValueChange={this.handleInputChange}>
                                </DimensionInput>

                                <DimensionInput
                                    id="earToNose"
                                    label="Ear to nose distance"
                                    val={this.state.earToNose}
                                    onValueChange={this.handleInputChange}>
                                </DimensionInput>

                                <DimensionInput
                                    id="earToChin"
                                    label="Ear to chin distance"
                                    val={this.state.earToChin}
                                    onValueChange={this.handleInputChange}>
                                </DimensionInput>
                                <DimensionInput
                                    id="earToThroat"
                                    label="Ear bottom to throat distance"
                                    val={this.state.earToThroat}
                                    onValueChange={this.handleInputChange}>
                                </DimensionInput>
                                <DimensionInput
                                    id="bridgeToTip"
                                    label="Nose bridge to tip"
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
                            <Col>
                                <SelectorInput
                                    id="nostrilWidth"
                                    label="Nostril width"
                                    options={this.nostrilOptions}
                                    onValueChange={this.handleInputChange}
                                ></SelectorInput>
                                <SelectorInput
                                    id="bridgeHeight"
                                    label="Nose bridge height"
                                    options={this.bridgeOptions}
                                    onValueChange={this.handleInputChange}
                                ></SelectorInput>
                                <SelectorInput
                                    id="noseLength"
                                    label="Nose length"
                                    options={this.noseLengthOptions}
                                    onValueChange={this.handleInputChange}
                                ></SelectorInput>
                            </Col></Row>
                    </Form>
                </Row>
                <Row>
                    <MaskPattern
                        noseToChin={this.state.noseToChin}
                        earHeight={this.state.earHeight}
                        earToChin={this.state.earToChin}
                        earToNose={this.state.earToNose}
                        nostrilWidth={this.state.nostrilWidth}
                        bridgeHeight={this.state.bridgeHeight}
                        noseLength={this.state.noseLength}
                        chinLength={this.state.chinLength}
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
