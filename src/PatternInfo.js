import React from 'react';

const captions = {
    'noseToChin': 'Nose to chin',
    'earHeight': 'Ear height',
    'earToBridge': 'Ear to nose bridge',
    'earToNose': 'Ear to nose tip',
    'bridgeToTip': 'Nose bridge to nose tip',
}

const units = 'mm'

/**
 * Prints the values that were entered to create the pattern.
 */
export class PatternInfo extends React.Component {
    makeInfo = function () {
        const results = [];
        for (let key in captions) {
            results.push(captions[key] + ': ' + this.props.vals[key] + ' ' + units)
        }
        return results;
    }
    render() {
        return (
            <>
                <g
                    transform='translate(20,15)'
                    fontSize='3px'
                    fontFamily='sans-serif'>
                    <text fontSize='4px' y='-5'>{this.props.vals.patternName}</text>
                    {
                        this.makeInfo().map((info, index) =>
                            <text
                                key={index}
                                y={4 * index}>
                                {info}
                            </text>)
                    }
                </g>
            </>)
    }
}