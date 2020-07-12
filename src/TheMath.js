import React from 'react';

import Image from 'react-bootstrap/Image'
import theMath from './theMath.svg';


export class TheMath extends React.Component {
    render() {
        return (
            <>
                <p>I made a few starting assumptions:</p>
                <ul>
                    <li>The angle from the top of the ear to the point of the nose is five degrees up.</li>
                    <li>The angle from the point of the nose to the chin is five degrees toward the ear. </li>
                    <li>Measurements are generally too large for a snug fit, so I don't need to add extra seam allowance.</li>
                    <li>The exception is the nose-to-chin measurement, which I expect to be fairly accurate. I added 12mm to the user value to have seam allowance on both ends.</li>
                    <li>The tab size (for attaching the straps) is fixed at 25mm wide.</li>
                    <li>The angle from the chin to the point on the throat is fixed at 100 degrees.</li>
                    <li>The chin to throat length is 25mm (about an inch) plus 6mm of seam allowance. Thie is enough to hook back under the throat while talking, without pressing into the throat.</li>
                </ul>
                <p>I'm trying to map from a few critical measurements to a flat pattern, but that flat pattern has to take into account the curvature of the human face.</p>
                <p>I'm accomplishing that by mirroring on the line from the nose to the chin, and essentially applying darts above the nose and below the chin.</p>
                <p>Since I only used straight lines, finding the coordinates of all of my critical points involved drawing lots of triangles:</p>
                <Image src={theMath} />
                <ul>
                    <li>Point A is at the origin (0, 0).</li>
                    <li>Point F is directly below A. The vertical distance between them is given by the measured ear height.</li>
                    <li>Point B is the bridge of the nose. We know AB, AC, and BC, so we can find the angle θ1:</li>
                    <ul>
                        <li>
                            The law of cosines says c*c = a*a + b*b − 2 * a * b * cos(C)
                        </li>
                        <li>
                            θ1 = arccos((b*b + c*c - a*a) / (2 * b * c))
                        </li>
                        <li>
                            In this case, a = BC, b = AB, and c = AC
                        </li>
                    </ul>
                    <li>I assumed a five degree angle up from the top of the ear to the nose. We know the distance from A to C, so:</li>
                    <ul>
                        <li>Cx = cos(5) * AC</li>
                        <li>Cy = sin(5) * AC</li>
                    </ul>

                    <li>The rest of the coordinates can be found by similar applications of the law of cosines and SOHCAHTOA, and are left as an exercise for the reader.</li>
                    
                </ul>Found a bug in my math? Think my math checks out but my assumptions are wrong? File an issue or make a pull request against <a href="https://github.com/fenichel/mask-pattern-generator/issues">my GitHub repo</a>.
            </>
        );
    }
}
