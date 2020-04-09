import React from 'react';
import { MDBView, MDBMask, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import Hero from '../../images/heroHome.jpg';
import './home.css';

class HomePage extends React.Component {

    render() {
        return(
            <div>
                <section className='hero my-5'>
                    <MDBView src={Hero}>
                        <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                        <h1>The Journey of A Coder</h1>
                        <p>Every journey is unique and my path to becoming the coder I am today is no exception. 
                            I hope you enjoy getting to know me a little bit as you travel through my site.</p>
                        </MDBMask>
                    </MDBView>
                </section>
                <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">
                    Who I am as a coder.
                    </h2>
                    <p className="lead grey-text w-responsive mx-auto mb-5">
                        I am self described technology enthusiast. My journey began when I was a little kid and
                        when my parents bought our first home computer.
                    </p>
                    <MDBRow className="main-page-four">
                    <MDBCol md="4">
                        <MDBIcon icon="chart-area" size="3x" className="red-text" />
                        <h5 className="font-weight-bold my-4">Analytics</h5>
                        <p className="grey-text mb-md-0 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                        </p>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBIcon icon="book" size="3x" className="cyan-text" />
                        <h5 className="font-weight-bold my-4">Tutorials</h5>
                        <p className="grey-text mb-md-0 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                        </p>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBIcon far icon="comments" size="3x" className="orange-text" />
                        <h5 className="font-weight-bold my-4">Support</h5>
                        <p className="grey-text mb-md-0 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                        </p>
                    </MDBCol>
                    </MDBRow>
                </section>
            </div>
        );
    }
}

export default HomePage;