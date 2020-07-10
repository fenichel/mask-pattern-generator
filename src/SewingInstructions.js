import React from 'react';
import { SewingImage } from './images/sewingImages.js';

export class SewingInstructions extends React.Component {
    render() {
        return (
            <>
                <p>Images will be here soon! Until then, here are text-only instructions. All seams use a 1/4" (6mm) seam allowance.</p>
                <p>
                    Measure your face and use the Create Pattern tab to create and download your pattern.
                </p>
                <p>
                    Open your pattern with a browser and print it.
                </p>
                <p>
                    Use a ruler to check that the line at the top left is 5 cm long.
                </p>
                <p>
                    If it's the wrong length, adjust your print settings until the line is the correct length.
                </p>
                <h2>
                    Cut your pattern and fabric
                </h2>
                <p>
                    Cut your paper pattern out, including the tab to the left of the ear.
                </p>
                <p>
                    Fold your fabric in half and place the tip-of-nose to point-of-chin line on the fold.
                </p>
                <SewingImage imgName={'1'} />
                <p>
                    Cut two pieces on fold. In these images I am using a green fabric (marked 'A') for the liner and a blue fabric (marked 'B') for the outside.
                </p>
                <SewingImage imgName={'5'} />
                <p>
                    Fold each piece along the tip-of-nose to point-of-chin line, right sides together.
                </p>
                <SewingImage imgName={'6'} />
                <p>
                    On each piece, sew from the bridge of the nose to the tip of the nose and fron the point of the chin to the throat, using a 1/4" (6mm) seam allowance.
                </p>
                <SewingImage imgName={'8'} />
                <p>
                    In these images I'm using a white thread top thread and a red bottom thread for clarity. Normally I would use a thread that matches or contrasts with the outside fabric.
                </p>
                <SewingImage imgName={'9'} />
                <p>
                    On each piece, clip the corners at the tip of nose and point of chin. Clipping makes it easier to press the seams in the next step.
                </p>
                <SewingImage imgName={'10'} />
                <p>
                    Press the seams open. Pressing the seams now reduces bulk for later, when you will need to sew over these seams, and makes it less likely that your machine will catch.
                </p>
                <SewingImage imgName={'11'} />
                <p>
                    Flip one piece (it doesn't matter which) so that the seams are inside, and press.
                </p>
                <SewingImage imgName={'12'} />
                <p>
                    Place the two pieces against each other, right sides touching.
                </p>
                <SewingImage imgName={'14'} />
                <p>
                    Sew the top and bottom edges with a 1/4" (6mm) seam allowance.
                </p>
                <SewingImage imgName={'15'} />
                <p>
                    Note that the pressed seam was easy to sew over here.
                </p>
                <SewingImage imgName={'16'} />
                <p>
                    Flip the mask inside out.
                </p>
                <SewingImage imgName={'17'} />
                <p>
                    Press.
                </p>
                <SewingImage imgName={'18'} />
                <p>
                    Topstitch along the top and bottom edges. (Note: I swapped the order and did the nose bridge before the topstitching in these images.)
                </p>
                <SewingImage imgName={'22'} />
                <h2>
                    Add a nose bridge
                </h2>
                <p>
                    Cut out an 8cm piece of ribbon or bias tape. It should be about 1 cm wide and 8cm long, but the exact dimensions are not important.
                </p>
                <SewingImage imgName={'19'} />
                <p>
                    Center your ribbon or tape at the center point of the mask on the top edge, on the inside of the mask.
                </p>
                <SewingImage imgName={'20'} />
                <p>
                    Sew your ribbon or tape in place along the long top and bottom edges, leaving the left and right edges open.
                </p>
                <SewingImage imgName={'21'} />
                <h2>
                    Form the tunnels that will hold the straps
                </h2>
                <p>
                    On the left side of the mask, fold in 1/4" (6mm) of fabric toward the inside of the mask and press.
                </p>
                <SewingImage imgName={'23'} />
                <p>
                    Fold again, bringing the edge to the line between the ear top and ear bottom, and press.
                </p>
                <SewingImage imgName={'24'} />
                <p>
                    Sew the flap in place, creating a tunnel for the strap.
                </p>
                <SewingImage imgName={'25'} />
                <p>
                    Repeat for the right side.
                </p>

                <SewingImage imgName={'26'} />

                <h2>
                    Form the nose bridge
                </h2>
                <p>
                    Insert a piece of wire (e.g. a paperclip) into the ribbon.
                </p>
                <SewingImage imgName={'27'} />

                <SewingImage imgName={'28'} />
                <p>
                    Hold the mask up to your face and pinch the wire against the bridge of your nose to form it to the shape of your nose.
                </p>
                <h2>
                    Add straps
                </h2>
                <p>
                    For an ear-loop strap, use the string to measure the length around the back of your ear from the top to the bottom (points A to F, around the back of the ear).
                </p>
                <p>
                    Cut two pieces of elastic of the measured length.
                </p>
                <p>
                    Stuff one end of the elastic into the top of the left tunnel, and the other end into the bottom of the left tunnel.
                </p>
                <p>
                    Sew in place.
                </p>
                <p>
                    Repeat for the right side.
                </p>
                <p>
                    For an over-the head strap, use the string to measure the length from the top of your left ear to the top of your right ear, going up almost to the crown of your head.
                </p>
                <p>
                    Cut a piece of elastic of the correct size, and sew it from the top of the left tunnel to the top of the right tunnel.
                </p>
                <p>
                    Use the string to measure the length from the bottom of your left ear to the bottom of your right ear, going around the back of your neck.
                </p>
                <p>
                    Cut a piece of elastic of the correct size, and sew it from the bottom of the left tunnel to the bottom of the right tunnel.
                </p>
                <p>
                    There are many other ways to set up your straps, including a single strap that runs through the tunnels and is adjusted with a toggle or by tying it when you put the mask on.
                </p>
            </>);
    }
}
