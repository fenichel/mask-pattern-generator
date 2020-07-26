import React from 'react';

export class SewingInstructions extends React.Component {
    render() {
        return (
            <>
                <h2>Create your pattern</h2>
                <p>
                    Measure your face and use the Create Pattern tab to create and download your pattern.
                </p>
                <p>
                    The downloaded file is an SVG (Scalable Vector Format). This is just an image, and all browsers can open it.
                </p>
                <p>
                    Open your pattern with a web browser (Firefox, Chrome, Edge, Safari, etc) and print it.
                </p>
                <h2>Printing</h2>
                <p>
                    Use a ruler to check that the line at the top left is 5 cm (2 in) long.
                </p>
                <p>
                    If it's the wrong length, adjust your print settings until the line is the correct length. (I've found that about 84% scale works best for me).
                </p>
                <p>Instructions for adjusting print settings:</p>
                <ul>
                    <li><a href='https://support.mozilla.org/en-US/kb/fix-printing-problems-firefox'>Firefox</a></li>
                    <li><a href='https://support.apple.com/en-euro/guide/mac-help/mh26678/mac'>Safari</a></li>
                    <li><a href='https://www.windowscentral.com/how-use-print-experience-new-microsoft-edge'>Edge</a></li>
                    <li>Chrome: Open the print menu. Click the arrow to expand the 'More settings' dialog. Select 'Custom' for 'Scale'. Change the number in the box that shows up.</li>
                </ul>

                <h2>Cutting and sewing</h2>
                <p>Follow the instructions in <a href="https://www.youtube.com/watch?v=KBR98YKAr7w&list=WL">this excellent video</a> to make your mask.</p>
                <p>The pattern includes a 1/4" seam allowance.</p>
                <p>To cut the lining fabric, cut along the dashed line at the ear.  Cut on the solid line for the main fabric.</p>
                <h2>Adjustments</h2>
                <p>Some people prefer to have the mask not reach all the way back to the ears.</p>
                <p>If you're not using the filter pocket, you can just flip the tab in toward the center and sew it in place.</p>
                <p>If you're using the filter pocket, you can decrease your ear-to-nose and ear-to-bridge lengths by 15mm for a similar effect.</p>
            </>);
    }
}
