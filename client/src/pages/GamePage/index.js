import React from 'react';
import './game.css';
import HarryPotterTrivia from '../../components/HarryPotterTrivia';
import { MDBBtn, MDBBtnGroup, MDBRow, MDBContainer, MDBCol } from 'mdbreact';


class GamePage extends React.Component {
    
    state = {
        harryPotter : [
            { question: 'What was Harry\'s owl name?',
              answers : [ 'Hedwig', 'Crookshanks', 'Padfoot', 'Buckbeak' ],
              correct : 'Hedwig' 
            },
            { question: 'When is Harry Potters birthday?',
              answers : [ 'July 12th', 'August 10th', 'May 31st', 'July 31st' ],
              correct : 'July 31st' 
            },
            { question: 'What is the tavern called in Hogsmeade?',
              answers : [ 'The Three Broomsticks', 'Knockturn Alley', 'Leaky Cauldron', 'Godrics Hollow' ],
              correct : 'The Three Broomsticks' 
            },
            { question: 'Which school did Harry Potter Attend?',
              answers : [ 'Hogwarts', 'Durmstrang', 'Ilvermorny', 'Beauxbatons' ],
              correct : 'Hogwarts' 
            }
        ],
        harryPotterGame : false,
        currentGame : [{
            question: '',
            answers: [],
            correct: ''
        }],
        harryPotterWinsLosses : {
            wins : 0,
            losses : 0
        }
    }

    harryPotterGameHandler = () => {
        const doesShow = this.state.harryPotterGame;
        this.setState({harryPotterGame: !doesShow});

    }

    harryPlayHandler = () => {
        let n = this.state.harryPotter.length;
        let x = this.getRandomInt(n);
        let q = this.state.harryPotter[x].question;
        let a = this.state.harryPotter[x].answers;
        let c = this.state.harryPotter[x].correct;
        let newGame = [{ question : q, answers : a, correct : c}]
        this.setState({currentGame: newGame});
    }

    getRandomInt(max) {
        return Math.floor(Math.random()* Math.floor(max));
    }

    answerChecker = (event) => {
        let x = this.state.currentGame[0].correct;
        let y = event.target.value;
        let wins = this.state.harryPotterWinsLosses.wins;
        let loss = this.state.harryPotterWinsLosses.losses;
        let newWinsLoss = {wins : 0, losses: 0}

        if ( x === y ) {
            wins++
            newWinsLoss = { wins: wins, losses: loss}
            this.setState({harryPotterWinsLosses: newWinsLoss});
        } else {
            loss++
            newWinsLoss = {wins: wins, losses : loss}
            this.setState({harryPotterWinsLosses: newWinsLoss});
        }
    }

    render() {
        
        let harryPotterHolder = null;

        if (this.state.harryPotterGame) {
            harryPotterHolder = (
                <HarryPotterTrivia
                    question={this.state.currentGame[0].question}
                    correct={this.state.currentGame[0].correct}
                    answers={this.state.currentGame[0].answers}
                    click={this.harryPlayHandler}
                    checker={this.answerChecker}
                ></HarryPotterTrivia>
             )
        }


        return(
            <div className='GameMain'>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md='12' className='mb-4 text-center'>
                            <MDBBtnGroup size='lg'>
                                <MDBBtn className='hpTriviaBtn' onClick={this.harryPotterGameHandler}>Harry Potter Trivia Game</MDBBtn>
                                <MDBBtn className='hpTriviaBtn'>Coming Soon</MDBBtn>
                                <MDBBtn className='hpTriviaBtn'>Coming Soon</MDBBtn>
                            </MDBBtnGroup>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='GameDisplay'>
                        <MDBCol md='12' className='mb-4 text-center'>
                            {harryPotterHolder}
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='12' className='mb-4 text-center'>
                            <h3>Wins and Losses</h3>
                            <p>Wins: {this.state.harryPotterWinsLosses.wins} Losses: {this.state.harryPotterWinsLosses.losses}</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default GamePage;