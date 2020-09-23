import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import GamePage from './pages/GamePage';
import ApiPage from './pages/ApiPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className='App w-auto'>
        <div className='Main'>
          <Router>
              <NavBar></NavBar>
            <Switch>
              <Route exact path='/' component={HomePage}></Route>
              <Route exact path='/portfolio' component={PortfolioPage}></Route>
              <Route exact path='/games' component={GamePage}></Route>
              <Route exact path='/api' component={ApiPage}></Route>
            </Switch>
          </Router>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
