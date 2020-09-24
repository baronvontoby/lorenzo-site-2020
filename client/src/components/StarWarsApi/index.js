import React from 'react';
import {MDBSelect, MDBBtn, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBInput} from 'mdbreact';
import './StarWarsApi.css';

const StarWarsApiWindow = props => {
    let continuedSelections = null;
    
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
                valueDefault=''
             />
         )
     }
     
    }
    return (
        <div className='margin-man'>
            <MDBRow>
                <MDBListGroup className='middle w-75'>
                    <MDBListGroupItem>First pick a category</MDBListGroupItem>
                    <MDBListGroupItem>Depending on what category you picked, either select from the options or fill in the input to refine your search</MDBListGroupItem>
                    <MDBListGroupItem>Leave the second option empty if you want to see multiple results</MDBListGroupItem>
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