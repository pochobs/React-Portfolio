import React from 'react';
import Github from '../../images/github.png';
import LinkedIn from '../../images/linkedin.png';

function Footer() {


    return (
        <footer className="container">
            <div>
                <h3>Let's connect</h3>
                <a href="https://github.com/pochobs" target="blank"><img alt="github icon" src={Github}></img></a>
                <a href="www.linkedin.com/in/pochobs/" target="blank"><img alt="linkedin icon" src={LinkedIn}></img></a>
            </div>
        </footer>
    );
}

export default Footer;