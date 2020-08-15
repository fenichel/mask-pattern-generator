import React from 'react';

const cache = {};

function importAll(r) {
  r.keys().forEach(key => cache[key] = r(key));
}

importAll(require.context('./', true, /\.jpg$/));
// At build-time cache will be populated with all required modules.

export class MeasurementImages extends React.Component {
  render() {
    return (
      <img
          src={cache['./' + this.props.imgName + '.jpg']}
          alt=""
          width="400"
        />
    );
  }
}