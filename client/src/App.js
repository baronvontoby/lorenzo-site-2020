import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        
        <div className='main'>
          <BrowserRouter>
            <Switch>

            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
