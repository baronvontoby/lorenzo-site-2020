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
        harryPotterGame : false
    }

    harryPotterGameHandler = () => {
        const doesShow = this.state.harryPotterGame;
        this.setState({harryPotterGame: !doesShow});
    }

    render() {
        
        let harryPotterHolder = null;

        if (this.state.harryPotterGame) {
            harryPotterHolder = (
                    <HarryPotterTrivia></HarryPotterTrivia>
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
                        {harryPotterHolder}
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default GamePage;