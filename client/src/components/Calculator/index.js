import React from 'react';
import {MDBCol, MDBBtn, MDBBtnGroup, MDBRow} from 'mdbreact';
import './calculator.css';

const Calculator = (props) => {

    return (
        <MDBRow>
            <MDBCol md='12' className='mb-4'>
                <label>Input</label>
                <input type='text' className='form-control' id='mathValue' />                
            </MDBCol>
            <MDBCol md='4' className='mb-4 move-middle'>
                <MDBBtnGroup size='lg'>
                    <MDBBtn onClick={props.click} className='calBtn' color='unique-color' value='1'>1</MDBBtn>
                    <MDBBtn onClick={props.click} color='unique-color' value='2'>2</MDBBtn>
                    <MDBBtn onClick={props.click} color='unique-color' value='3'>3</MDBBtn>
                    <MDBBtn onClick={props.click} color='unique-color' value='+'>+</MDBBtn>
                </MDBBtnGroup>
                <MDBBtnGroup size='lg'>
                    <MDBBtn onClick={props.click} color='unique-color' value='4'>4</MDBBtn>
                    <MDBBtn onClick={props.click} color='unique-color' value='5'>5</MDBBtn>
                    <MDBBtn onClick={props.click} color='unique-color' value='6'>6</MDBBtn>
                    <MDBBtn onClick={props.click} color='unique-color' value='-'>-</MDBBtn>
                </MDBBtnGroup>
                <MDBBtnGroup size='lg'>
                    <MDBBtn onClick={props.click} color='unique-color' value='7'>7</MDBBtn>
                    <MDBBtn onClick={props.click} color='unique-color' value='8'>8</MDBBtn>
                    <MDBBtn onClick={props.click} color='unique-color' value='9'>9</MDBBtn>
                    <MDBBtn onClick={props.click} color='unique-color' value='*'>*</MDBBtn>
                </MDBBtnGroup>
                <MDBBtnGroup size='lg'>
                    <MDBBtn onClick={props.click} color='unique-color' value='/'>/</MDBBtn>
                    <MDBBtn onClick={props.click} color='unique-color' value='0'>0</MDBBtn>
                    <MDBBtn onClick={props.click} color='unique-color' value='='>=</MDBBtn>
                </MDBBtnGroup>
            </MDBCol>
            <MDBCol md='12' className='mb-4'>
                <p>{props.answer}</p>
            </MDBCol>
        </MDBRow>
    )
}

export default Calculator;