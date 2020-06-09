import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';
import './PortfolioCard.css';

const PortfolioCard = props => {
  return (
    <MDBCol md="4" className='PortCard'>
        <MDBCard>
          <MDBCardImage
            top
            src={props.project.image}
            overlay='white-slight'
            hover
            waves
            alt='this is a project i worked on'
          />
          <MDBCardBody>
            <a href={props.project.link} className='activator waves-effect waves-light mr-4'>
              <MDBIcon icon='share-alt' className='black-text' />
            </a>
            <MDBCardTitle>{props.project.title}</MDBCardTitle>
            <hr />
            <MDBCardText>
              {props.project.description}
            </MDBCardText>
            <a href={props.project.link} className='black-text d-flex justify-content-end'>
              <h5>
                Click to See More
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
  )
}

export default PortfolioCard;