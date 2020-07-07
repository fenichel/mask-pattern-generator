import React from 'react';


export class Feedback extends React.Component {
    render() {
        return (
            <>
                <p className='feedbackText'>Do you have suggestions for improving this tool? Have you found a bug in my math? Do you think my math checks out but my assumptions are wrong? </p>
                <p className='feedbackText'>Fill out the <a href="https://forms.gle/maSWbYPFmoq8v5DE7">feedback form</a>, or head over to <a href="https://github.com/fenichel/mask-pattern-generator/issues">my GitHub repo</a> to file issues or make pull requests.</p>
            </>)
    }
}
