
import React from 'react';
import Jumbotron from 'react-bootstrap/Figure';
import face_mask_earloop from './face_mask_earloop.jpg';
import face_mask_laces from './face_mask_laces.jpg';

export class Introduction extends React.Component {
    render() {
        return (
            <Jumbotron>
                <h1>Custom Mask Pattern Generator</h1>
                <p>
                    This is v1 of a utility for generating sewing patterns for custom masks, based on the dimensions of your face.
  </p>
                <p>I'm still iterating on the pattern and trying to dial in my math--if it doesn't fit right on you, please let me know and/or come back in a week to try again.</p>
                <p>
                    Use the tabs at the top of the page to navigate.
  </p>

                <img
                    src={face_mask_earloop}
                    height='500'
                    alt='Our model wearing a face mask with elastic earloops.'>
                </img>
                <img
                    src={face_mask_laces}
                    height='500'
                    alt='Our model wearing a face mask with laces behind the neck and over the top of the head.'>
                </img>

                
                <p>Made by Rachel Fenichel. Last updated July 7 2020.</p>
            </Jumbotron>)
    }
}

