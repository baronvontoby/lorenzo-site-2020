import React from 'react';
import { MDBJumbotron, MDBBtn, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import './jumbo.css';


const SWJumbotron = (props) => {
    return (
        <MDBJumbotron className="p-0 jumbo-top">
            <MDBCardImage
            className="img-fluid"
            src={props.image}
            />
            <MDBCardBody>
                <MDBCardTitle className="h3">For Star Wars fans far and wide, welcome to Star Wars Encylopedia. Select a category and search the "SWAPI" a Star Wars open API for all things JEDI!</MDBCardTitle>
                <MDBCardText>
                    Below are some quick guides on using this application.  Enjoy and hopefully as it continues to evolve more and better things will come!
                </MDBCardText>
            </MDBCardBody>
      </MDBJumbotron>
    )
}

export default SWJumbotron;