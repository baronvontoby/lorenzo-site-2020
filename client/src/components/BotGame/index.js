import React from 'react';
import { MDBCol, MDBRow, MDBContainer, MDBListGroup, MDBListGroupItem, MDBBtn } from 'mdbreact';
import './BotGame.css';

const BotGame = (props) => {
    return (
        <MDBContainer className='chore-bot-container center-content'>
            <MDBListGroup className='bot-list'>
                <MDBListGroupItem>Hiding behind one of these doors is the ChoreBot.</MDBListGroupItem>
                <MDBListGroupItem>Your mission is to open all of the doors without running into the ChoreBot.</MDBListGroupItem>
                <MDBListGroupItem>If you manage to avoid the ChoreBot until you open the very last door, you win!</MDBListGroupItem>
                <MDBListGroupItem>See if you can score a winning streak!</MDBListGroupItem>
                <MDBListGroupItem>Hit play when you are ready to begin!</MDBListGroupItem>
            </MDBListGroup>
            <MDBRow className='door-row'>
                <MDBCol className='left-door all-door' md='col-4'>
                    <img id='door1' className='bot-img' alt='door' src={props.door1} onClick={props.doorClick1}/>
                </MDBCol>
                <MDBCol className='all-door' md='col-4'>
                    <img id='door2' className='bot-img' alt='door' src={props.door2} onClick={props.doorClick2}/>                  
                </MDBCol>
                <MDBCol className='right-door all-door' md='col-4'>
                    <img id='door3' className='bot-img' alt='door' src={props.door3} onClick={props.doorClick3} />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBBtn id='start' className='bot-button' color='primary' onClick={props.start} >Play</MDBBtn>
            </MDBRow>
        </MDBContainer>
    )
}

export default BotGame;