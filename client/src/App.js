import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import "./index.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar></NavBar>
        <div className='main'>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={HomePage}></Route>
            </Switch>
          </BrowserRouter>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
