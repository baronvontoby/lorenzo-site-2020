import React from 'react';
import {MDBRow, MDBContainer, MDBCol} from 'mdbreact';
import './ApiPage.css';
import API from '../../util/API';
import StarWarsApi from '../../components/StarWarsApi';
import StarWarsImage from '../../images/hero_star_wars.png';
import StarWarsImage2 from '../../images/1200px-Star_wars2.png';
import StarWarsCard from '../../components/StarWarsCard';
import StarWarsJumbo from '../../components/StarWarsJumboTron';

const images = [{StarWarsImage},{StarWarsImage2}]

class ApiPage extends React.Component {


state = {
    starWarsApi : [{
        options: [
            {
              text: "Films",
              value: "films"
            },
            {
              text: "People",
              value: "people"
            },
            {
              text: "Planets",
              value: "planets"
            },
            {
              text: "Species",
              value: "species"
            },
            {
              text: "Starships  ",
              value: "starships"
            },
            {
              text: "Vehicles",
              value: "vehicles"
            }
          ],
          requestedInfo: null,
          image: images[0].StarWarsImage,
          image2: images[1].StarWarsImage2,
          categoryOption: null,
          categorySet: false,
          secondValue: false,
          secondOption: null,
          categoryChecker: false,
          resultsCategory: null,
          filmOptions: [
            {
                text: "Star Wars: Episode IV A New Hope (1977)",
                value: "1"
            },
            {
                text: "Star Wars: Episode V The Empire Strikes Back (1980)",
                value: "2"
            },
            {
                text: "Star Wars: Episode VI Return of the Jedi (1983)",
                value: "3"
            },
            {
                text: "Star Wars: Episode I The Phantom Menace (1999)",
                value: "4"
            },
            {
                text: "Star Wars: Episode II Attack of the Clones (2002)",
                value: "5"
            },   
            {
                text: "Star Wars: Episode III Revenge of the Sith (2005)",
                value: "6"
            },   
            {
                text: "Star Wars: Episode VII The Force Awakens (2015)",
                value: "7"
            }
        ],
        results: false,
        finalResults: []
    }]
}

searchStarWars = () => {
    let option1 = this.state.starWarsApi[0].categoryOption;
    let option2 = this.state.starWarsApi[0].secondOption;
    let secondValueCheck = this.state.starWarsApi[0].secondValue;
    console.log(option1 + ' ' + option2 + ' ' + secondValueCheck);
    const newState = [...this.state.starWarsApi];
    newState[0].resultsCategory = option1;
    if (option1 === 'films') {
        if (secondValueCheck){
            let endpoint = `${option1}/${option2}`;
            API.starWarsGet(endpoint).then(res => {
                newState[0].finalResults = res;
                newState[0].results = true;
                this.setState({starWarsApi: newState})
            });
        } else {
            let endpoint = `${option1}`;
            API.starWarsGet(endpoint).then(res => {
                newState[0].finalResults = res.results;
                newState[0].results = true;
                this.setState({starWarsApi: newState})
            });
        }
    } else if (option1 !== 'films') {
        let inputOption = document.getElementById('secondValueInput').value;
        if(inputOption === '') {
            let endpoint = `${option1}`
            API.starWarsGet(endpoint).then(res => {
                console.log(res);
                newState[0].finalResults = res.results;
                newState[0].results = true;
                this.setState({starWarsApi: newState})
            });   
        } else {
            let endpoint = `${option1}/?search=${inputOption}`
            API.starWarsGet(endpoint).then(res => {
                newState[0].finalResults = res.results;
                newState[0].results = true;
                this.setState({starWarsApi: newState})
            });   
        }
    } else {
        console.log('did not work');
    } 
}

categorySelector = (e) => {
    const newOpt = [...this.state.starWarsApi];
    newOpt[0].categoryOption = e[0];
    newOpt[0].categorySet = true;
    this.setState({starWarsApi: newOpt });
}

secondValue = (e) => {
    const newOpt = [...this.state.starWarsApi];
    newOpt[0].secondOption = e[0];
    newOpt[0].secondValue = true;
    this.setState({starWarsApi: newOpt})
}


render() {
    let resultsHolder = null;
    
    if (this.state.starWarsApi[0].results) {
        resultsHolder = (
            this.state.starWarsApi[0].finalResults.map((item, id) => 
                <StarWarsCard 
                item={item} 
                image={this.state.starWarsApi[0].image2} 
                key={id} 
                cardChecker={this.state.starWarsApi[0].resultsCategory} />
            )
        )
    }

    return(
        <MDBContainer>
            <MDBRow className='w-100 p-3'>
                <StarWarsJumbo
                    image={this.state.starWarsApi[0].image}
                />
            </MDBRow>
            <MDBRow className='w-100 p-3'>
                <StarWarsApi
                    firstOptions={this.state.starWarsApi[0].options}
                    click={this.searchStarWars}
                    categoryValue={this.categorySelector}
                    categorySet={this.state.starWarsApi[0].categorySet}
                    selectedValue={this.state.starWarsApi[0].categoryOption}
                    filmOps={this.state.starWarsApi[0].filmOptions}
                    getSecondValue={this.secondValue}
                >
                </StarWarsApi>
                <MDBCol lg='12' md='12' sm='12'>
                    <MDBRow className='w-100'>
                        {resultsHolder}
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
}

export default ApiPage;