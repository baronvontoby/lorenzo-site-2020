import React from 'react';
import { MDBMask, MDBView } from 'mdbreact';

const HeroHolder = props => {
    const style1 = {
        'width': '80%',
        'margin': '10px auto',
        'fontWeight': 'bold'
    };
    const style2 = {
        'fontWeight': 'bold'
    }
    const style3 = {
        'backgroundColor' : 'blue'
    }

    return (
    <MDBView src={props.src} alt="a showcase of the technologies I am proficient in" style={style3}>
        <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
            <h1 style={style2}>{props.heading}</h1>
            <p style={style1}>{props.text}</p>
        </MDBMask>
    </MDBView>
    )
}

export default HeroHolder;