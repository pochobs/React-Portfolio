import React from 'react';
import Headshot from '../../images/Portfolio.jpg';

function About() {
    return (
        <div>
            <div>
                <img className="headshot space-between" src={Headshot} alt="This is me"></img>
            </div>
            <div>
                <h2>
                    About Me
                </h2>
                <p>
                    
                I am a student of University of Texas, I am in the process of becoming a full-stack web development, 
                I am a motivated person who seeks to develop and merge into new technologies that would benefit the needs of my family, friends, and love ones, as well as to people in need, 
                I am blessed to have lived multiple experiences throughout my life, and I always come to ideas on who I can make my lifestyle better.
                I have worked around the world from when I was 20 years old, traveling in a cruise-ship for 5 contracts, watching people needs, having needs my self, 
                and now that I have this opportunity to learn how to make it happen, I had also have the best experience working on mining industry as safety officer, taking care of my workers, creating system procedures and following them to make sure it works for safety at the job designed, measuring frequency and lethality on all jobs, 
                and be present in all high risk jobs and assure it is done correctly with safety matters.
                </p>
                
            </div>
        </div>
    );
}

export default About;