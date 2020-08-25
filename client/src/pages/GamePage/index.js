import React from 'react';
import './game.css';
import HarryPotterTrivia from '../../components/HarryPotterTrivia';
import Calculator from '../../components/Calculator';
import { MDBBtn, MDBBtnGroup, MDBRow, MDBContainer, MDBCol } from 'mdbreact';


class GamePage extends React.Component {
    
    state = {
        harryPotter : [
            { 
                question: 'What was Harry\'s owl name?',
                answers : [ 'Hedwig', 'Crookshanks', 'Padfoot', 'Buckbeak' ],
                correct : 'Hedwig',
                id : 1 
            },
            { 
                question: 'When is Harry Potters birthday?',
                answers : [ 'July 12th', 'August 10th', 'May 31st', 'July 31st' ],
                correct : 'July 31st',
                id : 2 
            },
            { 
                question: 'What is the tavern called in Hogsmeade?',
                answers : [ 'The Three Broomsticks', 'Knockturn Alley', 'Leaky Cauldron', 'Godrics Hollow' ],
                correct : 'The Three Broomsticks',
                id : 3 
            },
            {
                question: 'Which school did Harry Potter Attend?',
                answers : [ 'Hogwarts', 'Durmstrang', 'Ilvermorny', 'Beauxbatons' ],
                correct : 'Hogwarts',
                id : 4 
            },
            {
                question: 'Who was the headmaster of Hogwarts when the Chamber of Secrets was opened for the first time?',
                answers: [ 'Armando Dippet', 'Albus Dumbledore', 'Phineas Nigellus Black', 'Brutus Scrimgeour'],
                correct: 'Armando Dippet',
                id : 5
            },
            {
                question: 'What was the room called that Harry taught other students in Dumbledores Army?',
                answers: ['The Library', 'Room of Requirement', 'Gryffindor Common Room', 'The Three Broomsticks'],
                correct: 'Room of Requirement',
                id : 6
            },
            {
                question: 'What real world library was used to film some of the library scenes in the Harry Potter movies?',
                answers: ['National Library of Brazil', 'Peckham Library London', 'Trinity College Library Dublin', 'George Peabody Library USA'],
                correct: 'Trinity College Library Dublin',
                id : 7
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
        },
        guessRight : null,
        guessWrong : null,
        gameOver : false,
        calculatorShow : false,
        calculator : [{
            valueOne : '',
            holder : '',
            operator : '',
         }]
    }

    // Calculator Portion
    calculatorShowHandler = () => {
        const doesShow = this.state.calculatorShow;
        const hpShow = this.state.harryPotterGame;
        if (hpShow === true ) {
            this.setState({harryPotterGame: !hpShow, calculatorShow: doesShow});
        } else {
            this.setState({calculatorShow: !doesShow});
        }
    }

   calculate = (event) => {
        let i = event.target.value;
        if ( i === '+' || i === '-' || i === '*' || i === '/') {
            let oldVal = this.state.calculator[0].valueOne;
            let newVal = oldVal;
            let operator = i;
            this.setState({
                calculator : [{
                    valueOne: '',
                    holder: newVal,
                    operator: operator
                }]
            });
        } else if ( i === '=') {
            console.log('worked')
            let n = parseInt(this.state.calculator[0].valueOne);
            let m = parseInt(this.state.calculator[0].holder);
            let o = this.state.calculator[0].operator;
            
            if ( o === '+') {
                let sum = m + n;
                this.setState({
                    calculator : [{
                        valueOne: sum
                    }]
                });
            } else if ( o === '-' ) {
                let sum = m - n;
                this.setState({
                    calculator : [{
                        valueOne: sum
                    }]
                });
            } else if ( o === '*' ) {
                let sum = m * n;
                this.setState({
                    calculator : [{
                        valueOne: sum
                    }]
                });
            } else if ( o === '/' ) {
                let sum = m / n;
                this.setState({
                    calculator : [{
                        valueOne: sum
                    }]
                });
            } 
        } else {
            let oldVal = this.state.calculator[0].valueOne;
            let newVal = oldVal + i;
            let h = this.state.calculator[0].holder;
            let o = this.state.calculator[0].operator;
            this.setState({
                calculator : [{
                    valueOne: newVal,
                    holder : h,
                    operator : o
                }]
            });
        }

    }

    clear = (event) => {
        this.setState({
            calculator : [{
                valueOne : '',
                holder : '',
                operator : '',
            }]
        })
    }


    // HARRY POTTER GAME LOGIC//

    harryPotterGameHandler = () => {
        const doesShow = this.state.harryPotterGame;
        const calc = this.state.calculatorShow;

        if (calc === true ) {
            this.setState({harryPotterGame: !doesShow, calculatorShow: !doesShow});
        } else {
            this.setState({harryPotterGame: !doesShow});
        }
    }


    harryPlayHandler = () => {
        const oldArr = [...this.state.harryPotter];
        let n = this.state.harryPotter.length;
        const doesShow = this.state.harryPotterGame;
        if ( n > 0 ) {
            let x = this.getRandomInt(n);
            let q = this.state.harryPotter[x].question;
            let a = this.state.harryPotter[x].answers;
            let c = this.state.harryPotter[x].correct;
            oldArr.splice(x, 1);
            let newGame = [{ question : q, answers : a, correct : c}]
            this.setState({currentGame: newGame, guessRight: null, guessWrong: null, harryPotter: oldArr});
        }
        else {
            this.setState({gameOver: true, harryPotterGame: !doesShow});
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random()* Math.floor(max));
    }

    answerChecker = (event) => {
        console.log('click')
        let x = this.state.currentGame[0].correct;
        let y = event.target.value;
        let wins = this.state.harryPotterWinsLosses.wins;
        let loss = this.state.harryPotterWinsLosses.losses;
        let newWinsLoss = {wins : 0, losses: 0}

        if ( x === y ) {
            wins++
            newWinsLoss = { wins: wins, losses: loss}
            this.setState({harryPotterWinsLosses: newWinsLoss, guessRight : true});
        } else {
            loss++
            newWinsLoss = {wins: wins, losses : loss}
            this.setState({harryPotterWinsLosses: newWinsLoss, guessWrong : true});
        }
    }

    render() {

        let result = null;
        let harryPotterHolder = null;
        let gameStatus = null;
        let calcHolder = null;

        if (this.state.harryPotterGame) {
            harryPotterHolder = (
                <HarryPotterTrivia
                    question={this.state.currentGame[0].question}
                    correct={this.state.currentGame[0].correct}
                    answers={this.state.currentGame[0].answers}
                    click={this.harryPlayHandler}
                    checker={this.answerChecker}
                    gRight={this.state.guessRight}
                    gWrong={this.state.guessWrong}
                ></HarryPotterTrivia>
             )
        }

        if (this.state.guessRight) {
            result = (
                <h4>Congratulations you win! The correct answer is {this.state.currentGame[0].correct}. Hit play and play again!</h4>
            )
        } else if (this.state.guessWrong) {
            result = (
                <h4>That is incorrect. The correct answer is {this.state.currentGame[0].correct}. Please hit play and try again.</h4>
            )
        }
        else if ( !this.state.guessWrong && !this.state.guessRight ) {
            result = null;
        }

        if (this.state.gameOver) {
            gameStatus = (
                <h4>The Game is over.... come back soon and play again!</h4>
            )
        }

        if (this.state.calculatorShow) {
            calcHolder = (
                <Calculator
                click={this.calculate}
                clear={this.clear}
                numbers={this.state.calculator[0].valueOne}
                >         
                </Calculator>
            )
        }

        return(
            <div className='GameMain'>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md='12' className='mb-4 text-center'>
                            <MDBBtnGroup size='lg' className='btn-group'>
                                <MDBBtn className='hpTriviaBtn' onClick={this.harryPotterGameHandler}>Harry Potter Trivia Game</MDBBtn>
                                <MDBBtn className='hpTriviaBtn' onClick={this.calculatorShowHandler}>Awesome Calculator</MDBBtn>
                                <MDBBtn className='hpTriviaBtn'>Coming Soon</MDBBtn>
                            </MDBBtnGroup>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='GameDisplay'>
                        <MDBCol md='12' className='mb-4 text-center'>
                            {harryPotterHolder}
                            {calcHolder}
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='mb-4 text-center'>
                            {result}
                            {gameStatus}
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