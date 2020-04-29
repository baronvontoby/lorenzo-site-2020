import React from 'react';
import {MDBBtn, MDBBtnGroup, MDBRow, MDBCol} from 'mdbreact';

const HarryPotterTrivia = (props) => {

    return (
        <div>
            <MDBRow>
                <MDBCol md='12' className='mb-4 text-center'>
                    <h2>{props.question}</h2>
                    <MDBBtnGroup>
                        <MDBBtn onClick={props.checker} value={props.answers[0]}>{props.answers[0]}</MDBBtn>
                        <MDBBtn onClick={props.checker} value={props.answers[1]}>{props.answers[1]}</MDBBtn>
                        <MDBBtn onClick={props.checker} value={props.answers[2]}>{props.answers[2]}</MDBBtn>
                        <MDBBtn onClick={props.checker} value={props.answers[3]}>{props.answers[3]}</MDBBtn>
                    </MDBBtnGroup>
                    <MDBBtn onClick={props.click} >Play</MDBBtn>
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default HarryPotterTrivia;