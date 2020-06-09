import React from "react";
import { MDBJumbotron, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardText,  MDBCardTitle } from "mdbreact";

const PortfolioJumbo = () => {
  return (
    <MDBRow className="mt-5 text-center">
        <MDBCol>
          <MDBJumbotron>
            <MDBCardBody>
              <MDBCardTitle className="h2">
                A Look At My Projects
              </MDBCardTitle>
              <p className="blue-text my-4 font-weight-bold">
                Here is a showcase of all my projects. For a full look at everything click on the Github link below and for a copy of 
                my resume click the download button.
              </p>
              <MDBCardText>
                These are the projects that I wanted to highlight.  I have worked on many applications throughout my time as a developer
                but these in particular have stood out to me as exciting or fun.  I have also worked on at least 30 fully functional sites and
                developed 3 sites from scratch. Those are noted in my resume. Feel free to look and play around with any of the active pages, otherwise
                check out the Fun Games section and have some fun with my creations.
              </MDBCardText>
              <hr className="my-4" />
              <div className="pt-2">
              <MDBBtn size="lg" href="https://github.com/baronvontoby" tag="a" target="_blank" floating social="git">
                <MDBIcon fab icon="github" />
              </MDBBtn>
                <MDBBtn
                  outline
                  color="primary"
                  className="waves-effect"
                  href="https://docs.google.com/document/d/1POueIHZouYbasqnA73irXPvntlM36czO2tsCMLqyEyo/edit?usp=sharing"
                >
                  View Resume<MDBIcon icon="download" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
  )
}

export default PortfolioJumbo;