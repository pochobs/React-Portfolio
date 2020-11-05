import React from 'react';


const Carousel = () => {

    return(
        <div className="Carousel"></div>
    )
};

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
 
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default Carousel;

// challenge 1 Code Refactor - https://pochobs.github.io/First-Challenge/
// challenge2 portfolio - https://pochobs.github.io/Portfolio/
// challenge3 Password Generator - https://pochobs.github.io/mySecurePsswrd/
// challenge4 Time Quiz - https://pochobs.github.io/myQuickz/
// challenge5 Work Scheduler - https://pochobs.github.io/DayScheduler/
// challenge6 Weather App - https://pochobs.github.io/myWeatherApp

// challenge9 Readme Generator - Tutorial Video - https://drive.google.com/file/d/1Ek1M0DqMnP-VXwCFsp5HuW_djYNWR7bo/preview
// challenge10 Team Profile Generator - Tutorial Video - https://drive.google.com/file/d/18TcC9MYfWf6DK-lPchQpySPHViJdU5dD/edit
// challenge11 Note Taker - https://notez-taker.herokuapp.com/notes
// challenge12 Employee Traker - Tutorial Video- https://drive.google.com/file/d/1rpxpM26_RjxFcLn_D0GfWYvv5lJHHkzr/view
// challenge13 E-Commerce - https://drive.google.com/file/d/1Pd771sfi3b-N8cGtYSBciEzM1zXCSwoW/view
// challenge14 Tech-blog - https://lit-cove-67418.herokuapp.com/dashboard
// chellenge17 Regex - Link to gist.github - gist.github.com/pochobs/9d3ff041c75b1c0b7ce62c8f4d130544
// challenge18 Social-Network - Tutorial Video - https://drive.google.com/file/d/1TW4yEoyeoKr2Fnep-O5i5fTVyhI0NwkZ/view
// challenge19 Budget-Tracker - https://blooming-tundra-35094.herokuapp.com/
// Challenge20 React-Portfolio -  

// project1 Rentz - https://pochobs.github.io/project1/
// project2 CardSocial - https://cryptic-shelf-96558.herokuapp.com/
// project3 Teach-Me-To - https://floating-spire-39046.herokuapp.com/
