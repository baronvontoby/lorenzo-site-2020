import React from 'react';
import {MDBCard, MDBCardText, MDBCardTitle, MDBCardBody, MDBListGroup, MDBListGroupItem, MDBCol, MDBCardImage} from 'mdbreact';
import './StarWarCard.css';

const StarWarsCard = (props) => {
    let planet = null;
    let film = null;
    let people = null;
    let species = null;
    let starships = null;
    let vehicles = null;

    if (props.cardChecker === 'planets') {
        planet = (
            <MDBCardBody className='elegant-color white-text rounded-bottom'>
                <MDBCardTitle>{props.item.name}</MDBCardTitle>
                <hr className='hr-light' />
                <MDBCardText className='white-text'>
                    <MDBListGroup className="my-4 mx-4 transparent">
                        <MDBListGroupItem className='white-text swCard-list-item'>Population : {props.item.population}</MDBListGroupItem>
                        <MDBListGroupItem className='white-text swCard-list-item'>Rotation Period: {props.item.rotation_period}</MDBListGroupItem>
                        <MDBListGroupItem className='white-text swCard-list-item'>Climate: {props.item.climate}</MDBListGroupItem>
                        <MDBListGroupItem className='white-text swCard-list-item'>Terrain: {props.item.terrain}</MDBListGroupItem>
                    </MDBListGroup>      
                </MDBCardText>
            </MDBCardBody>
        )
    }

    if (props.cardChecker === 'films') {
        film = (
            <MDBCardBody className='elegant-color white-text rounded-bottom'>
            <MDBCardTitle>{props.item.title}</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
                <MDBListGroup className="my-4 mx-4 transparent">
                    <MDBListGroupItem className='white-text swCard-list-item'>Director : {props.item.director}</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Release Date: {props.item.release_date}</MDBListGroupItem>
                </MDBListGroup>      
            </MDBCardText>
        </MDBCardBody>
        )
    }

    // if (props.cardChecker === 'people')

   
    return (
        <MDBCol md='4' className='star-card'>
            <MDBCard>
                <MDBCardImage
                    top
                    src={props.image}
                    overlay='white-slight'
                    hover
                    waves
                    alt='MDBCard image cap'
                />
                {planet}
                {film}
                {species}
                {people}
                {starships}
                {vehicles}
            </MDBCard>
        </MDBCol>
    )
}

export default StarWarsCard;