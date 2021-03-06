import React from 'react';
import FadeIn from '../Transitions/fade-in';

const Header = () => { return(
    <header className="App-header">
        <FadeIn in={true} duration={600} length={'30px'} direction={'bottom'}>
            <h2>React-Clicky-Game</h2>
        </FadeIn>
        <FadeIn in={true} duration={600} length={'50px'} direction={'bottom'} >
            <h1>OITNB - Clicky Game</h1>
        </FadeIn>
    </header>
)};

export default Header;