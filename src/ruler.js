import React from 'react';

export class Ruler extends React.Component {
    render() {
        return (
            <g>
                <line
                    x1='-25' y1='-30'
                    x2='25' y2='-30'
                    stroke='black'
                    fill='none'
                    strokeWidth='.5px' />
                <text x='-25' y='-35'
                    fontSize='4px'
                    fontFamily='sans-serif'
                >This line should be 5 cm long when printed</text>
            </g>
        )
    }
}
