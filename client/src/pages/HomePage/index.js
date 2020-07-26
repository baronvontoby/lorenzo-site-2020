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

        const heroText = `Welcome to my new and improved website.  Below you will learn a little bit more about me and also see a few strengths
        I have as a developer.  Thanks for taking the time and I hope you enjoy!`

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
                            <MDBIcon icon="file-code" size="3x" className="red-text" />
                            <h5 className="font-weight-bold my-4">Front End and UI</h5>
                            <p className="grey-text mb-md-0 mb-5 text-left">
                                The majority of my work so far has been primarily focused on Front End issues with some back end work also. In my pervious role
                                I was one of two developers so we definitely needed to wear multiple hats, but one of our main responsibilities was to work with
                                the creative team and turn sketches into websites. From those experiences my abilities in the design and implementation flourished and
                                I would consider myself proficient in the three big front end languages (HTML, CSS and JavaScript) and the user interface.
                            </p>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBIcon icon="server" size="3x" className="cyan-text" />
                            <h5 className="font-weight-bold my-4">API Integrations and Back End</h5>
                            <p className="grey-text mb-md-0 mb-5 text-left">
                                One of the areas of coding that has excited me is linking up data and applications to one another.  I began development
                                on an API integration for the primarily used CRM (FranConnect) and google utilizing google apps. Also being one of two developers I
                                handled quite a few hosting issues that would come up on the various sites that we maintained. The main platforms I have worked
                                with are Dreamhost, Firebase and Heroku but I have had some minimal exposure ot AWS too.

                                This is the one area I would say I have the most interest in expanding as I move forward in my career. Finding more ways to 
                                connect up applications and data and make them look visually appealing and work well for the user.
                            </p>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBIcon far icon="comments" size="3x" className="orange-text" />
                            <h5 className="font-weight-bold my-4">Project Management</h5>
                            <p className="grey-text mb-md-0 mb-5 text-left">
                                Working for a smaller company has helped me develop more of a Project Manager style way of working.  The flow of the project and 
                                what was going to be developed first fell on the developer.  It taught me to manage my time correctly, when it was the right time
                                to communicate issues and what where the necessary requirements needed before any project could truly begin.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </section>
            </div>
        );
    }
}

export default HomePage;