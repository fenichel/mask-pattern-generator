import React from 'react';

export class VertexLabels extends React.Component {
    render() {
        return (
            <>
                {this.props.points.slice(0, this.props.points.length - 1).map(point => <g
                    key={point.label}>
                    <circle
                        cx={point.x} cy={point.y}
                        r='.5'
                        stroke='black'
                        >

                    </circle>
                    <text
                        x={point.x + 5}
                        y={point.y}
                        fontSize='4px'
                        fontFamily='sans-serif'
                    >
                        {point.label}
                    </text>
                </g>)
                }
            </>)
    }
}
