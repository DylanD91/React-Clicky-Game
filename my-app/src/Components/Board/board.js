import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Piper',
        img: 'images/piper.jpg',
        clicked: false
    },
    {
        name: 'Alex',
        img: 'images/alex.jpg',
        clicked: false
    },
    {
        name: 'Lorna',
        img: 'images/lorna.jpg',
        clicked: false
    },
    {
        name: 'Red',
        img: 'images/red.jpg',
        clicked: false
    },
    {
        name: 'Crazy Eyes',
        img: 'images/crazyEyes.jpg',
        clicked: false
    },
    {
        name: 'Tiffany',
        img: 'images/tiffany.jpg',
        clicked: false
    },
    {
        name: 'Taystee',
        img: 'images/taystee.jpg',
        clicked: false
    },
    {
        name: 'Vee',
        img: 'images/vee.jpg',
        clicked: false
    },
    {
        name: 'Sophia',
        img: 'images/sophia.jpg',
        clicked: false
    },
    {
        name: 'Poussey',
        img: 'images/poussey.jpg',
        clicked: false
    },
    {
        name: 'Dayanara',
        img: 'images/dayanara.jpg',
        clicked: false
    },
    {
        name: 'Nicky',
        img: 'images/nicky.jpg',
        clicked: false
    },
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Test your memory by trying to click each image only once!!</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}