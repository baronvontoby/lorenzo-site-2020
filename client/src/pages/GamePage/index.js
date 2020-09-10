import React from 'react';
import './game.css';
import HarryPotterTrivia from '../../components/HarryPotterTrivia';
import Calculator from '../../components/Calculator';
import BotGame from '../../components/BotGame';
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
            equalChecker : ''
         }],
         botGameShow: false,
         botGame : [{
             currentlyPlaying : false,
             numClosedDoors : 0,
             door1 : 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg',
             door2 : 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg',
             door3 : 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg',
             spaceDoorPath : 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg',
             botDoorPath : 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg',
             beachDoorPath : 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg',
             closedDoorPath : 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg',
             guess1 : '',
             guess2 : '',
             guess3 : '',
             win: false,
             lose: false
         }]
    }

    //
    // BOT GAME!
    //

    botShowHandler = () => {
        const doesShow = this.state.botGameShow;
        const hpShow = this.state.harryPotterGame;
        const calculatorShow = this.state.calculatorShow;
        const newArr = [...this.state.botGame];
        newArr[0].win = false;
        newArr[0].lose = false;
        if (hpShow === true ) {
            this.setState({harryPotterGame: !hpShow, botGameShow: !doesShow});
        } else if (calculatorShow === true) {
            this.setState({botGameShow : !doesShow, calculatorShow : !calculatorShow});
        }
        else {
            this.setState({botGameShow: !doesShow, botGame: newArr});
        }
    }



    isBot = door => {
        let botDoorPath = this.state.botGame[0].botDoorPath;
        if ( door === botDoorPath ) {
            return true;
        }
        else {
            return false;
        }
    }

    isClicked = door => {
        let closedDoorPath = this.state.botGame[0].closedDoorPath;
        if ( door === closedDoorPath ) {
            return false;
        } else {
            return true;
        }
    }

    doorCheck1 = () => {
        const currentlyPlaying = this.state.botGame[0].currentlyPlaying;
        const doorImage = this.state.botGame[0].door1;
        if ( currentlyPlaying && !this.isClicked(doorImage)  ) {
            const newArr = [...this.state.botGame];
            let x = this.state.botGame[0].guess1;
            const numClosedDoors = newArr[0].numClosedDoors;
            let newNumClosedDoors = numClosedDoors - 1;
            newArr[0].numClosedDoors = newNumClosedDoors;
            newArr[0].door1 = x;
            if ( newNumClosedDoors === 0 ) {
                this.gameOver('win');
            } else if ( this.isBot(x) ) {
                this.gameOver();
            } else {
                this.setState({botGame: newArr});
            }
        }
    }

    doorCheck2 = () => {
        const currentlyPlaying = this.state.botGame[0].currentlyPlaying;
        const doorImage = this.state.botGame[0].door2;
        if ( currentlyPlaying && !this.isClicked(doorImage) ) {
            let x = this.state.botGame[0].guess2;
            const newArr = [...this.state.botGame];
            const numClosedDoors = newArr[0].numClosedDoors;
            let newNumClosedDoors = numClosedDoors - 1;
            newArr[0].numClosedDoors = newNumClosedDoors;
            newArr[0].door2 = x;
            if ( newNumClosedDoors === 0 ) {
                this.gameOver('win');
            } else if ( this.isBot(x) ) {
                this.gameOver();
            } else {
                this.setState({botGame: newArr});
            }
        }
    }

    doorCheck3 = () => {
        const currentlyPlaying = this.state.botGame[0].currentlyPlaying;
        const doorImage = this.state.botGame[0].door3;
        if ( currentlyPlaying && !this.isClicked(doorImage) ) {
            const newArr = [...this.state.botGame];
            const numClosedDoors = newArr[0].numClosedDoors;
            let newNumClosedDoors = numClosedDoors - 1;
            newArr[0].numClosedDoors = newNumClosedDoors;
            let x = this.state.botGame[0].guess3;
            newArr[0].door3 = x;
            console.log(newArr);
            if ( newNumClosedDoors === 0 ) {
                this.gameOver('win');
            } else if ( this.isBot(x) ) {
                this.gameOver();
            } else {
                this.setState({botGame: newArr});
            }
        }
    }

    startRound = () => {
        let win = this.state.botGame[0].win;
        let lose = this.state.botGame[0].lose;
        let closed = this.state.botGame[0].numClosedDoors;
        let playing = this.state.botGame[0].currentlyPlaying;
        if( !win && playing ) {
            return
        } else if (!lose && playing) {
            return
        } else if (closed > 0 && playing) {
            return
        } else {
            const newArr = [...this.state.botGame]
            newArr[0].currentlyPlaying = true;
            newArr[0].door1 = newArr[0].closedDoorPath;
            newArr[0].door2 = newArr[0].closedDoorPath;
            newArr[0].door3 = newArr[0].closedDoorPath;
            newArr[0].win = false;
            newArr[0].lose = false;
            let numClosedDoors = 3;
            newArr[0].numClosedDoors = numClosedDoors;
            let choreDoor = Math.floor(Math.random()*numClosedDoors);
            if ( choreDoor === 0 ) {
                newArr[0].guess1 = newArr[0].botDoorPath;
                newArr[0].guess2 = newArr[0].spaceDoorPath;
                newArr[0].guess3 = newArr[0].beachDoorPath;
                this.setState({botGame: newArr})
            } else if ( choreDoor === 1 ) {
                newArr[0].guess2 = newArr[0].botDoorPath;
                newArr[0].guess3 = newArr[0].spaceDoorPath;
                newArr[0].guess1 = newArr[0].beachDoorPath;
                this.setState({botGame: newArr})
            } else {
                newArr[0].guess3 = newArr[0].botDoorPath;
                newArr[0].guess1 = newArr[0].spaceDoorPath;
                newArr[0].guess2 = newArr[0].beachDoorPath;
                this.setState({botGame: newArr})
            }
        }
    }

    gameOver = status => {
        const newArr = [...this.state.botGame];
        newArr[0].currentlyPlaying = false;
        if ( status === 'win' ) {
            newArr[0].win = true;
            this.setState({botGame: newArr});
        } else {
            newArr[0].lose = true;
            this.setState({botGame: newArr});
        }
    }

    //
    //
    //
    // Calculator Portion
    //
    //
    //

    calculatorShowHandler = () => {
        const doesShow = this.state.calculatorShow;
        const hpShow = this.state.harryPotterGame;
        const botGame = this.state.botGameShow;
        const newArr = [...this.state.botGame];
        newArr[0].win = false;
        newArr[0].lose = false;
        if (hpShow === true ) {
            this.setState({harryPotterGame: !hpShow, calculatorShow: !doesShow});
        } else if (botGame === true) {
            this.setState({botGameShow : !botGame, calculatorShow : !doesShow, botGame: newArr});
        }
        else {
            this.setState({calculatorShow: !doesShow});
        }
    }

   calculate = (event) => {
        let i = event.target.value;
        let f = this.state.calculator[0].equalChecker;
        if (i === undefined || f === '=') {
            return
        } else {
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
                let n = parseInt(this.state.calculator[0].valueOne);
                let m = parseInt(this.state.calculator[0].holder);
                let o = this.state.calculator[0].operator;
                
                if ( o === '+') {
                    let sum = m + n;
                    this.setState({
                        calculator : [{
                            valueOne: sum,
                            equalChecker: i
                        }]
                    });
                } else if ( o === '-' ) {
                    let sum = m - n;
                    this.setState({
                        calculator : [{
                            valueOne: sum,
                            equalChecker: i
                        }]
                    });
                } else if ( o === '*' ) {
                    let sum = m * n;
                    this.setState({
                        calculator : [{
                            valueOne: sum,
                            equalChecker: i
                        }]
                    });
                } else if ( o === '/' ) {
                    let sum = m / n;
                    this.setState({
                        calculator : [{
                            valueOne: sum,
                            equalChecker: i
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

    }

    clear = (event) => {
        this.setState({
            calculator : [{
                valueOne : '',
                holder : '',
                operator : '',
                equalChecker: ''
            }]
        })
    }

    //
    //
    // HARRY POTTER GAME LOGIC
    //
    //

    harryPotterGameHandler = () => {
        const doesShow = this.state.harryPotterGame;
        const calc = this.state.calculatorShow;
        const botGame = this.state.botGameShow;
        const newArr = [...this.state.botGame];
        newArr[0].win = false;
        newArr[0].lose = false;
        if (calc === true ) {
            this.setState({harryPotterGame: !doesShow, calculatorShow: !calc});
        } else if ( botGame ) {
            this.setState({harryPotterGame: !doesShow, botGameShow : !botGame, botGame : newArr});
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
        let botGameHolder = null;
        let botGameFinal = null

        if (this.state.harryPotterGame) {
            harryPotterHolder = (
                <MDBRow>
                    <MDBCol className='mb-12'>
                        <HarryPotterTrivia
                            question={this.state.currentGame[0].question}
                            correct={this.state.currentGame[0].correct}
                            answers={this.state.currentGame[0].answers}
                            click={this.harryPlayHandler}
                            checker={this.answerChecker}
                            gRight={this.state.guessRight}
                            gWrong={this.state.guessWrong}
                        >
                        </HarryPotterTrivia>
                    </MDBCol>
                    <MDBCol className='mb-12'>
                        <MDBRow>
                            <MDBCol md='12' className='mb-4 text-center'>
                                <h3>Wins and Losses</h3>
                                <p>Wins: {this.state.harryPotterWinsLosses.wins} Losses: {this.state.harryPotterWinsLosses.losses}</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
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

        if (this.state.botGameShow) {
            botGameHolder = (
                <BotGame 
                door1={this.state.botGame[0].door1}
                door2={this.state.botGame[0].door2}
                door3={this.state.botGame[0].door3}
                doorClick1={this.doorCheck1}
                doorClick2={this.doorCheck2}
                doorClick3={this.doorCheck3}
                start={this.startRound}
                >
                </BotGame>
            )
        }

        if (this.state.botGame[0].win) {
            botGameFinal = (
                <MDBRow className='d-flex justify-content-center'>
                    <p>Congrats on the win! Hit play to play again.</p>
                </MDBRow>
            )
        } else if (this.state.botGame[0].lose) {
            botGameFinal = (
                <MDBRow className='d-flex justify-content-center'>
                    <p>At last, you weren't good enough to avoid the Chore BOT!  Your workload will be endless! Hit play to play again.</p>
                </MDBRow>
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
                                <MDBBtn className='hpTriviaBtn' onClick={this.botShowHandler}>Bot Game</MDBBtn>
                            </MDBBtnGroup>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='no-flex'>
                        <MDBCol md='12' className='mb-12 text-center'>
                            {harryPotterHolder}
                            {calcHolder}
                            {botGameHolder}
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='no-flex'>
                        <MDBCol md='12' className='mb-12 text-center'>
                            {result}
                            {gameStatus}
                            {botGameFinal}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default GamePage;