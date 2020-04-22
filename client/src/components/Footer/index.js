import React from "react";
import { MDBContainer, MDBRow, MDBFooter, MDBIcon, MDBBtn } from "mdbreact";
import './footer.css';

const Footer = () => {
  return (
    <MDBFooter color="indigo" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center">
        <MDBRow className='text-center social-icons-row'>
            <MDBBtn size="lg" href="https://www.linkedin.com/in/lorenzo-dandrea-41b720157/" 
            tag="a" target="_blank" floating social="li">
                <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
            <MDBBtn size="lg" href="https://github.com/baronvontoby" tag="a" target="_blank" floating social="git">
                <MDBIcon fab icon="github" />
            </MDBBtn>
            <MDBBtn size="lg" href="mailto:lgdandrea4@gmail.com" tag="a" floating social="email">
                <MDBIcon icon="envelope" />
            </MDBBtn>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/">
               lorenzocodes.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;