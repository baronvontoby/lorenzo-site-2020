import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import GamePage from './pages/GamePage';
import ResumePage from './pages/ResumePage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


import "./index.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='Main'>
          <Router>
              <NavBar></NavBar>
            <Switch>
              <Route exact path='/' component={HomePage}></Route>
              <Route exact path='/portfolio' component={PortfolioPage}></Route>
              <Route exact path='/games' component={GamePage}></Route>
              <Route exact path='/resume' component={ResumePage}></Route>
            </Switch>
        </Router>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
