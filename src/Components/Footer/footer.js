import React from 'react';

import FadeIn from '../Transitions/fade-in';

const Footer = () => {
    return (
        <footer className="Footer">
            <FadeIn 
                delay={'1s'}
                direction={'top'}
                length={'20px'}
                duration={500}>
                
            </FadeIn>
        </footer>
    )
};

export default Footer;