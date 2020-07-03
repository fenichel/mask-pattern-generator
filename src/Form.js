import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { DimensionInput } from './DimensionInput';

import { MaskPattern } from './makePattern';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noseToChin: 95,
            earHeight: 45,
            earToChin: 110,
            earToNose: 90
            // ear top to nostril: 95
            // nostril to bridge: 35
            // philtrum to nose tip: 22
            // nostril to nostril: 40
            // nose tip to bridge: 35
        }
        this.handleInputChange =
            this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        console.log(name)
        console.log(target.value)
        this.setState({
            [name]: parseInt(target.value)
        })
        //this.setState({noseToChin: newVal})
        console.log(this.state)
    }
    render() {
        return (
            <Form>
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

                <MaskPattern
                    noseToChin={this.state.noseToChin}
                    earHeight={this.state.earHeight}
                    earToChin={this.state.earToChin}
                    earToNose={this.state.earToNose}>
                </MaskPattern>
            </Form>
        )
    }
};
export default MyForm;
