import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';


const apt1 = require('../Images/APT1.JPG')
const apt2 = require('../Images/APT2.JPG')
const apt3 = require('../Images/APT3.JPG')
const arpt1 = require('../Images/ARPT1.JPG')
const chest = require('../Images/chest.JPG')
const hand = require('../Images/hand.JPG')
const joystick = require('../Images/joystick.JPG')
const kraken = require('../Images/kraken.JPG')
const lighthouse = require('../Images/lighthouse.JPG')
const LPT1 = require('../Images/LPT1.JPG')
const LPT2 = require('../Images/LPT2.JPG')
const LPT3 = require('../Images/LPT3.JPG')
/*const LPT4 = require('../Images/LPT4.JPG')*/
const owl = require('../Images/owl.JPG')
const raven = require('../Images/raven.JPG')
const sailing = require('../Images/sailing.JPG')
/*const whale = require('../Images/whale.JPG')*/

const photos = [
    { src: apt1, width: 3, height: 5 },
    { src: apt2, width: 3, height: 5 },
    { src: apt3, width: 3, height: 5 },
    { src: arpt1, width: 3, height: 4 },
    { src: chest, width: 4, height: 3 },
    { src: hand, width: 3, height: 5 },
    { src: joystick, width: 4, height: 3 },
    { src: kraken, width: 3, height: 4 },
    { src: lighthouse, width: 4, height: 3 },
    { src: LPT1, width: 3, height: 4 },
    { src: LPT2, width: 3, height: 4 },
    { src: LPT3, width: 3, height: 4 },
    /*{ src: LPT4, width: 3, height: 4 },*/
    { src: owl, width: 3, height: 4 },
    { src: raven, width: 3, height: 4 },
    { src: sailing, width: 3, height: 4 },
/*    { src: whale, width: 4, height: 3 }*/
];

export default class Collage extends React.Component {
    render() {
        return (
            <Gallery photos={photos} />
        )
    }
}
