import React, { useState } from 'react';
import Project from '../Project';

function Work() {

    const [projects] = useState([
        {
            name: 'Project-1-Rentz',
            description: 'HTML, CSS and Javascript project',
            src: '../../images/Project-1-Rentz.png',
            link: 'https://pochobs.github.io/Project1/'
        },
        {
            name: 'Project-2-Social-Cards',
            description: 'Full Stack application',
            srcs: '../../images/Project-2-Social-Cards.png',
            link: 'https://cryptic-shelf-96558.herokuapp.com/'
        },
        {
            name: 'Project-3-Teach-Me-Too',
            description: ' HTML and CSS',
            srcs: '../../images/Project-3-Teach-Me-Too.png',
            link: 'https://floating-spire-39046.herokuapp.com/'
        },
        {
            name: 'Challenge-1-Code-Refactor',
            description: ' HTML and CSS',
            srcs: '../../images/Challenge-1-Code-Refactor.png',
            link: 'https://pochobs.github.io/First-Challenge/'
        },
        {
            name: 'Challenge-2-Portfolio-PlainCSS',
            description: ' HTML and CSS portfolio',
            srcs: '../../images/Challenge-2-Portfolio-PlainCSS.png',
            link: 'https://pochobs.github.io/Portfolio/'
        },
        {
            name: 'haCllenge-3-PasswordGenerator',
            description: 'Javascript app',
            srcs: '../../images/Challenge-3-PasswordGenerator.png',
            link: 'https://pochobs.github.io/mySecurePsswrd/'
        },
        {
            name: 'Challenge-4-Time-Quiz',
            description: 'Javascript app',
            srcs: '../../images/Challenge-4-Time-Quiz.png',
            link: 'https://pochobs.github.io/myQuickz/'
        },
        {
            name: 'Challenge-5-Work-Day-Scheduler',
            description: ' HTML and CSS and Javascript',
            srcs: '../../images/Challenge-1-Code-Refactor.png',
            link: 'https://pochobs.github.io/DayScheduler/'
        },
        {
            name: 'Challenge-6-Weather-App',
            description: 'fetching API',
            srcs: '../../images/Challenge-6-Weather-App.png',
            link: 'https://pochobs.github.io/myWeatherApp/'
        },
        {
            name: 'Challenge-9-Readme-Generator',
            description: ' Node App',
            srcs: '../../images/Challenge-9-Readme-Generator.png',
            link: 'https://github.com/evkonradi/teach-me-to/'
        },
        {
            name: 'Challenge-10-Team-Profile-Generator',
            description: 'Node app',
            srcs: '../../images/Challenge-10-Team-Profile-Generator.png',
            link: 'https://github.com/pochobs/Team-Profile/'
        },
        {
            name: 'Challenge-11-Note-Taker',
            description: 'Full Stack App',
            srcs: '../../images/Challenge-11-Note-Taker',
            link: 'https://notez-taker.herokuapp.com/'
        },
        {
            name: 'Challenge-12-Employee-Tracker',
            description: 'Company Database',
            srcs: '../../images/Challenge-12-Employee-Tracker.png',
            link: 'Challenge-12-Employee-Tracker/'
        },
        {
            name: 'Challenge-13-E-Commerce',
            description: 'E-commerce database',
            srcs: '../../images/Challenge-13-E-Commerce.png',
            link: 'https://github.com/pochobs/e_commerce/'
        },
        {
            name: 'Challenge-14-Tech-Blog',
            description: 'Full Stack App',
            srcs: '../../images/Challenge-14-Tech-Blog.png',
            link: 'https://lit-cove-67418.herokuapp.com/'
        },
        {
            name: 'Challenge-17-Regex',
            description: 'Gist tutorial on regex',
            srcs: '../../images/Challenge-17-Regex.png',
            link: 'https://gist.github.com/pochobs/9d3ff041c75b1c0b7ce62c8f4d130544/'
        },
        {
            name: 'Challenge-18-Social-Network',
            description: 'Full Stack App',
            srcs: '../../images/Challenge-18-Social-Network.png',
            link: 'https://github.com/pochobs/Social-Network/'
        },
        {
            name: 'Challenge-19-Budget-Tracker',
            description: 'Full Stack App',
            srcs: '../../images/Challenge-19-Budget-Tracker.png',
            link: 'https://blooming-tundra-35094.herokuapp.com/'
        }
    ])

    return (
        <div>
            <h1>Portfolio</h1>
            <div>
                {projects.map((project, i) => (
                    <Project
                        project={project}
                        i={i}
                    />
                ))}
            </div>
        </div>
    );
}

export default Work;