import React from 'react';

export class Ruler extends React.Component {
    render() {
        return (
            <g>
            <line 
            x1='0' y1='-25' 
            x2='10' y2='-25' 
            stroke='black'
            fill='none'
            stroke-width='.5px'></line> 
            <text x='0' y='-20' 
            fontSize='4px'
            fontFamily='sans-serif'
            >This line should be 1 cm long when printed</text>
            </g>
        )
    }
};