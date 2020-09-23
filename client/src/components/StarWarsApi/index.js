import React from 'react';
import {MDBSelect, MDBBtn, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBInput} from 'mdbreact';
import './StarWarsApi.css';

const StarWarsApiWindow = props => {
    let continuedSelections = null;
    let results = null;
    
    if (props.categorySet) {
     if (props.selectedValue === 'films') {
         continuedSelections = (
             <MDBSelect
                options={props.filmOps}
                getValue={props.getSecondValue}
                label='Select Film'
                selected='Select a Film'
             />
         )
     } else {
         continuedSelections = (
             <MDBInput 
                id='secondValueInput'
             />
         )
     }
     
    }
    return (
        <div className='margin-man'>
            <MDBRow>
              <img src={props.image} alt='star wars' className='img-fluid'/>
            </MDBRow>
            <MDBRow>
            <h3 className='middle w-75 sw-heading'>For Star Wars fans far and wide, welcome to Star Wars Encylopedia. Select a category and search the "SWAPI" a Star Wars open API for all things JEDI!</h3>
            <MDBListGroup className='middle w-75'>
                <MDBListGroupItem>First pick a category</MDBListGroupItem>
                <MDBListGroupItem>Depending on what category you picked, either select from the options or fill in the input to refine your search</MDBListGroupItem>
                <MDBListGroupItem>Leave the second option empty if you want to see a bunch of options</MDBListGroupItem>
                <MDBListGroupItem>All information will be displayed below the form in card formats</MDBListGroupItem>
            </MDBListGroup>
                <MDBCol size='4' className='middle text-center'>
                    <MDBSelect 
                        options={props.firstOptions}
                        selected='Choose your first option'
                        label='Select Category'
                        id='category'
                        getValue={props.categoryValue}
                    />
                    {continuedSelections}
                    <MDBBtn
                        onClick={props.click}
                        className='white-text middle'
                        color='grey darken-3'
                    >
                        Search the Galaxy
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default StarWarsApiWindow;