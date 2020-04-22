import React from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import Hero from '../../images/heroHome.jpg';
import './home.css';
import HeroHolder from '../../components/HeroHolder';


const images = [{Hero}];

class HomePage extends React.Component {

    state = {
        heroImage: images[0].Hero
    }


    render() {
        const secondPara = `Technology has always been a passion for me.  Like most people growing up in the 90's, 
        technology was changing at an incredibly fast rate. From dial up to DSL to now fiber, things were getting faster, more connected
        and how we interacted with our world drastically changed.  Star Trek and Star Wars went from being something of imagination to
        something that might be possible.  That is what has led me on this path of being a Developer, to explore the possible.
        `;

        const heroText = `Welcome to my new and approved website.  Below you will learn a little bit more about me and my path
        to becoming a programmer.  Thanks for taking the time and I hope you enjoy!`

        return(
            <div>
                <section className='hero my-5'>
                    <HeroHolder src={this.state.heroImage} heading='The Journey of A Coder' text={heroText}>
                     </HeroHolder>
                </section>
                <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">
                        Who I am as a coder.
                    </h2>
                    <p className="lead grey-text w-responsive mx-auto mb-5">
                        {secondPara}
                    </p>
                    <MDBRow className="main-page-four">
                    <MDBCol md="4">
                        <MDBIcon icon="chart-area" size="3x" className="red-text" />
                        <h5 className="font-weight-bold my-4">Dashboard Programming</h5>
                        <p className="grey-text mb-md-0 mb-5">
                            I am currently developing two projects that manage data.  One is setting up a community connector through
                            Google's Coummunity Connectors app builder to allow data to flow from a 3rd party API to Google Data Studio.
                            My second dashboard project is to combine two API's sets of data and create a custom UI to allow the creating of
                            their own dashboards.  I am using a combination of MDB React and Chart.js to create all the necessary visuals.
                        </p>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBIcon icon="server" size="3x" className="cyan-text" />
                        <h5 className="font-weight-bold my-4">Websites</h5>
                        <p className="grey-text mb-md-0 mb-5">
                            After all I am a web developer.  I have deployed multiple projects utilizing multiple cloud based solutions.
                            Most of my sites are Wordpress and hosted through Dreamhost but I do have a few passion projects that utilize React,
                            like this site does and those are hosted on a mixture of Heroku and AWS. As I continue this journey I hope to develop
                            more dynamic applications that bring people together.
                        </p>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBIcon far icon="comments" size="3x" className="orange-text" />
                        <h5 className="font-weight-bold my-4">Support</h5>
                        <p className="grey-text mb-md-0 mb-5">
                            I also wanted to state that I am a people person first.  My journey to the world of development actually started with
                            me in Sales.  People are what drive everything, and being able to communicate well and concisely is extremely important.
                            Now that I am on the operations side, I think it has actually made me a better communicator, especially when it comes to
                            asking for what you need. Details are important but it is also important to let people know why.
                        </p>
                    </MDBCol>
                    </MDBRow>
                </section>
            </div>
        );
    }
}

export default HomePage;