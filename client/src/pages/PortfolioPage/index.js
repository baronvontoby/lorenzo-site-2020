import React from 'react';
import './portfolio.css';
import {MDBRow} from 'mdbreact';
import PortfolioCard from '../../components/PortfolioCard';
import PortJumbo from '../../components/PortfolioJumbo';

//Images

import PugsI from '../../images/pugs4life.JPG';
import BamazonI from '../../images/bamazon.JPG';
import FlipClockI from '../../images/flipClock.JPG';
import GiphyI from '../../images/giphyFun.JPG';
import LiriI from '../../images/liriNodeApp.JPG';
import ZombieI from '../../images/zombieGame.JPG';

const images = [{PugsI}, {BamazonI}, {FlipClockI}, {GiphyI}, {LiriI}, {ZombieI}]


class PortfolioPage extends React.Component {

    state = {
        projects : [
            {
                title: 'Pugs',
                description: 'This react application was an attempt to make a social app that centered around bringing random people together to create meet ups specifically centered around pick up games.  Either board games or sports this app was an attempt to do it all.  It was complete, with User authentication and the ability to make events and join them.',
                image: images[0].PugsI,
                link: 'https://lit-citadel-88830.herokuapp.com/'
            },
            {   
                title: 'Bamazon',
                description : 'This was a node app that I created that created a simple version of the Amazon store. I even took it a step further and created inventory and manager access for a more backend look. Check out the link to the GitHub repository, I was quite proud of this application.',
                image: images[1].BamazonI,
                link: 'https://www.youtube.com/watch?v=BVYfkzHkiDM&feature=youtu.be'
            },
            {
                title: 'Flip Clock',
                description: 'This was a project I worked on while at HotDish Advertising where I made a custom plugin for wordpress to create a flip clock for Hammer and Nails.  I used a combonation of PHP and JavaScript to complete the project.',
                image: images[2].FlipClockI,
                link: 'https://github.com/baronvontoby/LDFlipClock'
            },
            {
                title: 'Liri Node App',
                description: 'This was a node application that was designed and created to search databases for information on your favorite songs, favorite artists and favorite movies.',
                image: images[4].LiriI,
                link: 'https://www.youtube.com/watch?v=KW6I4isnixU&feature=youtu.be'
            },
            {
                title: 'Zombie Node Game',
                description: 'This was another node application that kind of took off on me.  It was a game that allowed you to create a character, select a weapon and fight zombies.  The logic was sound but I will self admit, I made the zombies too hard to kill.',
                image: images[5].ZombieI,
                link: 'https://github.com/baronvontoby/zombiegame'
            },
            {
                title: 'Giphy Fun',
                description: 'This was the first application that I ever made that was pretty decently built.  I have come along way but it is always fun and worth noting the beginning of my career.',
                image: images[3].GiphyI,
                link: 'https://baronvontoby.github.io/giphy-fun/'
            }
        ]
    }

    render() {
        
        return (
            <div>
                <MDBRow className='TopRow'>
                    <PortJumbo />
                </MDBRow>
                <MDBRow className='CardRow'>
                    {
                        this.state.projects.map((project, id) => (
                            <PortfolioCard project={project} key={id} />
                        ))
                    }
                </MDBRow>
            </div>
        )
    }
}

export default PortfolioPage;