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
                <MDBListGroup className="my-4 mx-4 transparent">
                    <MDBListGroupItem className='white-text swCard-list-item'>Population : {props.item.population}</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Rotation Period: {props.item.rotation_period}</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Climate: {props.item.climate}</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Terrain: {props.item.terrain}</MDBListGroupItem>
                </MDBListGroup>      
            </MDBCardBody>
        )
    }

    if (props.cardChecker === 'films') {
        film = (
            <MDBCardBody className='elegant-color white-text rounded-bottom'>
            <MDBCardTitle>{props.item.title}</MDBCardTitle>
            <hr className='hr-light' />
            <MDBListGroup className="my-4 mx-4 transparent">
                <MDBListGroupItem className='white-text swCard-list-item'>Director : {props.item.director}</MDBListGroupItem>
                <MDBListGroupItem className='white-text swCard-list-item'>Release Date: {props.item.release_date}</MDBListGroupItem>
            </MDBListGroup>      
        </MDBCardBody>
        )
    }

    if (props.cardChecker === 'people') {
        people = (
            <MDBCardBody className='elegant-color white-text rounded-bottom'>
                <MDBCardTitle>{props.item.name}</MDBCardTitle>
                <hr className='hr-light' />
                <MDBListGroup className="my-4 mx-4 transparent">
                    <MDBListGroupItem className='white-text swCard-list-item'>Gender : {props.item.gender}</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Height : {props.item.height} cm</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Birth Year : {props.item.birth_year}</MDBListGroupItem>
                </MDBListGroup>      
            </MDBCardBody>
        )
    }

    if (props.cardChecker === 'species') {
        species = (
        <MDBCardBody className='elegant-color white-text rounded-bottom'>
            <MDBCardTitle>{props.item.name}</MDBCardTitle>
            <hr className='hr-light' />
            <MDBListGroup className="my-4 mx-4 transparent">
                <MDBListGroupItem className='white-text swCard-list-item'>Average Height : {props.item.average_height} cm</MDBListGroupItem>
                <MDBListGroupItem className='white-text swCard-list-item'>Average Lifespan : {props.item.average_lifespan}</MDBListGroupItem>
                <MDBListGroupItem className='white-text swCard-list-item'>Eye colors : {props.item.eye_colors}</MDBListGroupItem>
                <MDBListGroupItem className='white-text swCard-list-item'>Hair colors : {props.item.hair_colors}</MDBListGroupItem>
                <MDBListGroupItem className='white-text swCard-list-item'>Language : {props.item.language}</MDBListGroupItem>
                <MDBListGroupItem className='white-text swCard-list-item'>Skin Colors : {props.item.skin_colors}</MDBListGroupItem>
            </MDBListGroup>      
        </MDBCardBody>
        )
    }

    if (props.cardChecker === 'starships') {
        starships = (
            <MDBCardBody className='elegant-color white-text rounded-bottom'>
                <MDBCardTitle> Name : {props.item.name} Model: {props.item.model}</MDBCardTitle>
                <hr className='hr-light' />
                <MDBListGroup className="my-4 mx-4 transparent">
                    <MDBListGroupItem className='white-text swCard-list-item'>Manufacturer : {props.item.manufacturer}</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Cargo Capacity : {props.item.cargo_capacity}</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Crew : {props.item.crew}</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Passengers: {props.item.passengers}</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Length : {props.item.length} meters</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Starship Class : {props.item.starship_class}</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Price (galactic credits): {props.item.cost_in_credits}</MDBListGroupItem>
                </MDBListGroup>      
            </MDBCardBody>
        )
    }

    if (props.cardChecker === 'vehicles') {
        vehicles = (
            <MDBCardBody className='elegant-color white-text rounded-bottom'>
                <MDBCardTitle> Name : {props.item.name} Model: {props.item.model}</MDBCardTitle>
                <hr className='hr-light' />
                <MDBListGroup className="my-4 mx-4 transparent">
                    <MDBListGroupItem className='white-text swCard-list-item'>Manufacturer : {props.item.manufacturer}</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Cargo Capacity : {props.item.cargo_capacity}</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Crew : {props.item.crew}</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Passengers: {props.item.passengers}</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Length : {props.item.length} meters</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Vehicle Class : {props.item.vehicle_class}</MDBListGroupItem>
                    <MDBListGroupItem className='white-text swCard-list-item'>Price (galactic credits): {props.item.cost_in_credits}</MDBListGroupItem>
                </MDBListGroup>      
            </MDBCardBody>
        )
    }

   
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