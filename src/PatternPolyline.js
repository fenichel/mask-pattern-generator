import React from 'react';

export class PatternPolyline extends React.Component {
    render() {
        return (
            <>
                <polyline
                    points={this.props.points}
                    stroke='black'
                    fill='none'
                    strokeWidth='.5px'
                ></polyline>

            </>)
    }
}

