import React from 'react';
import {MDBCol, MDBRow, MDBContainer} from 'mdbreact';
import './ApiPage.css';
import API from '../../util/API';
import StarWarsApi from '../../components/StarWarsApi';
import StarWarsImage from '../../images/hero_star_wars.png';
import StarWarsImage2 from '../../images/1200px-Star_wars2.png';

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
          secondOption: null,
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
    console.log(typeof option2)
    let newImage = this.state.starWarsApi[0].image2;
    console.log(option2);
    const newState = [...this.state.starWarsApi];
    if (option2 === null) {
        let inputOption = document.getElementById('secondValueInput').value;   
        let endpoint = `${option1}/?search=${inputOption}`
        console.log(endpoint);
        API.starWarsGet(endpoint).then(res => {
            console.log(res);
            newState[0].finalResults = res.results[0];
            this.setState({starWarsApi: newState})
    });
    } else {
        let endpoint = `${option1}/${option2}`;
        API.starWarsGet(endpoint).then(res => {
            newState[0].finalResults = res;
            newState[0].finalResults.newImage = newImage;
            this.setState({starWarsApi: newState})
        });
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
    this.setState({starWarsApi: newOpt})
}


render() {
    return(
        <MDBContainer>
            <MDBRow className='w-100 p-3'>
                <StarWarsApi
                    firstOptions={this.state.starWarsApi[0].options}
                    click={this.searchStarWars}
                    image={this.state.starWarsApi[0].image}
                    categoryValue={this.categorySelector}
                    categorySet={this.state.starWarsApi[0].categorySet}
                    selectedValue={this.state.starWarsApi[0].categoryOption}
                    filmOps={this.state.starWarsApi[0].filmOptions}
                    getSecondValue={this.secondValue}
                >
                </StarWarsApi>
            </MDBRow>
        </MDBContainer>
    );
}
}

export default ApiPage;