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
                    The downloaded file is an SVG (Scalable Vector Format).
                </p>
                <p>
                    Open your pattern with a web browser (Firefox, Chrome, Edge, Safari, etc) and print it.
                </p>
                <p>
                    Use a ruler to check that the line at the top left is 5 cm long.
                </p>
                <p>
                    If it's the wrong length, adjust your print settings until the line is the correct length.
                </p>

                <h2>Cutting and sewing</h2>
                <p>Follow the instructions in <a href="https://www.youtube.com/watch?v=KBR98YKAr7w&list=WL">this excellent video</a> to make your mask.</p>
                <p>To cut the lining fabric, cut along the dashed line at the ear.  Cut on the solid line for the main fabric.</p>
            </>);
    }
}
